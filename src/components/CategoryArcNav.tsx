import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const categories = [
  {
    label: "Land",
    color: "#FFD100",
    icon: "/lovable-uploads/807fa2aa-fe9e-4c50-b110-095b8ddb527f.png",
    count: 73,
  },
  {
    label: "Water",
    color: "#FFD100",
    icon: "/lovable-uploads/807fa2aa-fe9e-4c50-b110-095b8ddb527f.png",
    count: 54,
  },
  {
    label: "Kids",
    color: "#FFD100",
    icon: "/lovable-uploads/807fa2aa-fe9e-4c50-b110-095b8ddb527f.png",
    count: 35,
  },
];

const ICON_ANGLES = [-45, 0, 45];
const ARC_RADIUS = 300;
const STROKE_WIDTH = 120;

interface Props {
  active: string;
  onSelect: (label: string) => void;
}

export default function CategoryArcNav({ active, onSelect }: Props) {
  const angle = useMotionValue(ICON_ANGLES[0]);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [animationType, setAnimationType] = useState<"arc" | "straight" | "custom">("straight");
  const [prevActive, setPrevActive] = useState(active);
  const isInitialized = useRef(false);
  
  // Precompute all category positions
  const positions = categories.map((cat, i) => {
    const angle = ICON_ANGLES[i];
    const rad = (angle * Math.PI) / 180;
    return {
      label: cat.label,
      x: ARC_RADIUS + ARC_RADIUS * Math.cos(rad) - STROKE_WIDTH / 2,
      y: ARC_RADIUS + ARC_RADIUS * Math.sin(rad) - Math.sign(angle) * STROKE_WIDTH / 4,
      angle: angle
    };
  });

  // Find position for a category
  const getPositionForCategory = (categoryLabel) => {
    return positions.find(p => p.label === categoryLabel) || positions[0];
  };

  // Initialize position immediately on first render
  useEffect(() => {
    if (!isInitialized.current) {
      const initialPos = getPositionForCategory(active);
      x.set(initialPos.x);
      y.set(initialPos.y);
      angle.set(initialPos.angle);
      isInitialized.current = true;
    }
  }, [active, x, y, angle]);

  useEffect(() => {
    if (prevActive === active || !isInitialized.current) return;

    const fromPosition = getPositionForCategory(prevActive);
    const toPosition = getPositionForCategory(active);
    
    // Always preserve the current state as our starting point
    if (animationType === "arc") {
      // If we're currently in arc animation, ensure we're at the right angle
      angle.set(fromPosition.angle);
    } else {
      // If we're in straight animation, ensure we're at the right x/y
      x.set(fromPosition.x);
      y.set(fromPosition.y);
    }
    
    // Special handling for Kids to Land transition
    if (prevActive === "Kids" && active === "Land") {
      setAnimationType("custom");
      
      // Set starting position explicitly to Kids position
      x.set(fromPosition.x);
      y.set(fromPosition.y);
      
      // First, move horizontally towards Water's x-position but at Kids' y-position
      const waterPos = getPositionForCategory("Water");
      
      // First animation: move horizontally to be aligned with Water
      animate(x, waterPos.x, { 
        type: "spring", 
        stiffness: 400, 
        damping: 30,
        duration: 0.4
      }).then(() => {
        // Second animation: move both horizontally and vertically to Land position
        animate(x, toPosition.x, {
          type: "spring",  
          stiffness: 400,
          damping: 30,
          duration: 0.4
        });
        
        animate(y, toPosition.y, {
          type: "spring",
          stiffness: 400,
          damping: 30,
          duration: 0.4
        });
      });
    }
    // Arc path for transitions between adjacent categories (Land↔Water, Water↔Kids)
    else if (
      (prevActive === "Land" && active === "Water") ||
      (prevActive === "Water" && active === "Land") ||
      (prevActive === "Water" && active === "Kids") ||
      (prevActive === "Kids" && active === "Water")
    ) {
      setAnimationType("arc");
      
      // Always ensure we start from the exact angle of the previous category
      angle.set(fromPosition.angle);
      
      // Animate to the destination angle along the arc
      animate(angle, toPosition.angle, {
        type: "spring",
        stiffness: 300,
        damping: 30,
      });
    }
    // Default fallback - straight line for any other transition
    else {
      setAnimationType("straight");
      
      // Set starting position explicitly
      x.set(fromPosition.x);
      y.set(fromPosition.y);
      
      // Animate to destination position
      animate(x, toPosition.x, { type: "spring", stiffness: 300, damping: 30 });
      animate(y, toPosition.y, { type: "spring", stiffness: 300, damping: 30 });
    }

    setPrevActive(active);
  }, [active]);

  // Helper function to compute x/y from angle
  const computeXY = (a: number) => {
    const rad = (a * Math.PI) / 180;
    
    // Make sure we're using exactly the same calculation as used in the positions array
    // This ensures perfect alignment with category icons
    return {
      x: ARC_RADIUS + ARC_RADIUS * Math.cos(rad) - STROKE_WIDTH / 2,
      y: ARC_RADIUS + ARC_RADIUS * Math.sin(rad) - Math.sign(a) * STROKE_WIDTH / 4
    };
  };

  // Get the x/y coordinates for the motion circle based on animation type
  const arcX = useTransform(angle, (a) => computeXY(a).x);
  const arcY = useTransform(angle, (a) => computeXY(a).y);

  // Choose which motion values to use based on animation type
  const motionX = animationType === "arc" ? arcX : x;
  const motionY = animationType === "arc" ? arcY : y;

  const activeCat = categories.find(c => c.label === active) || categories[0];

  const arcPoints = categories.map((cat, i) => {
    const angle = ICON_ANGLES[i];
    const rad = (angle * Math.PI) / 180;
    return {
      ...cat,
      x: ARC_RADIUS + ARC_RADIUS * Math.cos(rad) - STROKE_WIDTH / 2,
      y: ARC_RADIUS + ARC_RADIUS * Math.sin(rad) - Math.sign(angle) * STROKE_WIDTH / 4,
    };
  });

  // Get arc angles for the active category
  const getArcSegmentAnglesForCategory = (categoryLabel) => {
    const index = categories.findIndex(c => c.label === categoryLabel);
    if (index === -1) return { start: 0, end: 0 };
    
    // Define the angle spans for each category segment
    // For Land (index 0): -90° to -15°
    // For Water (index 1): -15° to 15°
    // For Kids (index 2): 15° to 90°
    const segmentRanges = [
      { start: -90, end: -15 },  // Land
      { start: -15, end: 15 },   // Water
      { start: 15, end: 90 }     // Kids
    ];
    
    return segmentRanges[index];
  };

  // Get angles for the active category segment
  const activeSegment = getArcSegmentAnglesForCategory(active);

  return (
    <div
      style={{
        position: "absolute",
        left: -ARC_RADIUS,
        top: 0,
        width: ARC_RADIUS * 2,
        height: ARC_RADIUS * 2,
        pointerEvents: "none",
      }}
      className="hidden lg:block"
    >
      {/* Arc Path - White background */}
      <svg
        width={ARC_RADIUS * 2}
        height={ARC_RADIUS * 2}
        style={{ position: "absolute", left: 0, top: 0 }}
      >
        <path
          d={describeArc(
            ARC_RADIUS,
            ARC_RADIUS,
            ARC_RADIUS - STROKE_WIDTH / 2,
            0,
            180
          )}
          fill="none"
          stroke="white"
          strokeWidth={STROKE_WIDTH}
        />
        
        {/* Highlighted segment for active category */}
        <path
          d={describeArc(
            ARC_RADIUS,
            ARC_RADIUS,
            ARC_RADIUS - STROKE_WIDTH / 2,
            activeSegment.start + 90,
            activeSegment.end + 90
          )}
          fill="none"
          stroke="#FFD100"
          strokeWidth={STROKE_WIDTH}
        />
      </svg>

      {/* Static category icons */}
      {arcPoints.map((cat) => (
        <div
          key={cat.label}
          style={{
            position: "absolute",
            left: cat.x,
            top: cat.y,
            transform: "translate(-50%, -50%)",
            pointerEvents: "auto",
            cursor: "pointer",
            zIndex: 1,
          }}
          onClick={() => onSelect(cat.label)}
        >
          <div
            style={{
              width: 96,
              height: 96,
              borderRadius: "50%",
              background: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 8px rgba(0,0,0,0.2)",
            }}
          >
            <img src={cat.icon} alt={cat.label} style={{ width: 40, height: 40 }} />
          </div>
        </div>
      ))}

      {/* Moving/Animated icon - Fixed color based on initial active category */}
      <motion.div
        style={{
          position: "absolute",
          left: motionX,
          top: motionY,
          transform: "translate(-50%, -50%)",
          pointerEvents: "auto",
          zIndex: 2,
        }}
        onClick={() => onSelect(activeCat.label)}
      >
        <motion.div
          style={{
            width: 150,
            height: 150,
            borderRadius: "50%",
            background: "#fff",
            border: `8px solid ${activeCat.color}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: `0 0 24px ${activeCat.color}55`,
          }}
        >
          <img src={activeCat.icon} alt={activeCat.label} style={{ width: 48, height: 48 }} />
        </motion.div>

        {/* Text */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            left: "160%",
            top: "50%",
            transform: "translateY(-50%)",
            textAlign: "left",
            color: "white",
            fontWeight: "bold",
            fontSize: 18,
            whiteSpace: "nowrap",
          }}
        >
          {activeCat.label}
          <div
            style={{
              background: "#0066b3",
              color: "#fff",
              borderRadius: 16,
              padding: "2px 12px",
              marginTop: 4,
              fontSize: 14,
              display: "inline-block",
            }}
          >
            {activeCat.count} Rides
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Arc helpers
function describeArc(x: number, y: number, radius: number, startAngle: number, endAngle: number) {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);
  const arcSweep = endAngle - startAngle <= 180 ? "0" : "1";
  return ["M", start.x, start.y, "A", radius, radius, 0, arcSweep, 0, end.x, end.y].join(" ");
}

function polarToCartesian(centerX: number, centerY: number, radius: number, angleInDegrees: number) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}