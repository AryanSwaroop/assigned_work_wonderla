
Wonderla Theme Park Website

A modern, responsive web application for Wonderla Theme Parks built with Next.js and React, featuring an interactive ride selection and booking system.
Overview

This project is a redesigned version of the Wonderla Theme Parks website, focusing on enhancing user experience for browsing and selecting rides across various categories. The application showcases a visually appealing interface with smooth animations and intuitive navigation.
Features

    Interactive Ride Categories: Browse rides by Land, Water, and Kids categories
    Dynamic Carousel: Smooth and responsive ride display with quick navigation
    Detailed Ride Information: View comprehensive details about each ride including location and description
    Responsive Design: Optimized for various screen sizes from mobile to desktop
    Modern UI Components: Built with custom UI components and Tailwind CSS

Tech Stack

    Frontend Framework: Next.js & React
    Styling: Tailwind CSS
    UI Components: Custom shadcn/ui components
    State Management: React Hooks (useState)
    Animations: CSS transitions and transforms

Getting Started
Prerequisites

    Node.js (v14.0.0 or higher)
    npm or yarn

Installation

    Clone the repository:

    bash

    git clone https://github.com/AryanSwaroop/assigned_work_wonderla.git
    cd assigned_work_wonderla

    Install dependencies:

    bash

    npm install
    # or
    yarn install

    Run the development server:

    bash

    npm run dev
    # or
    yarn dev

    Open http://localhost:3000 in your browser to see the application.

Project Structure


assigned_work_wonderla/
├── components/           # Reusable UI components
│   ├── Header.jsx        # Main navigation header
│   ├── Footer.jsx        # Site footer with selected rides count
│   ├── CategoryArcNav.jsx # Side navigation for ride categories
│   └── ui/               # UI component library
├── pages/                # Application pages
│   ├── _app.js           # Next.js App component
│   ├── index.js          # Homepage
│   └── rides/            # Ride-related pages
├── public/               # Static assets
├── styles/               # Global styles and Tailwind config
└── ...

Customization
Adding New Rides

To add new rides, edit the rides array in the RideSelection.jsx component with new ride objects following this structure:

javascript

{
  id: number,
  name: string,
  description: string,
  location: string,
  imageUrl: string,
  category: 'Land' | 'Water' | 'Kids'
}

Modifying Styles

This project uses Tailwind CSS for styling. Modify the tailwind.config.js file to update theme colors, fonts, or other design tokens.
Contributing

    Fork the repository
    Create your feature branch (git checkout -b feature/amazing-feature)
    Commit your changes (git commit -m 'Add some amazing feature')
    Push to the branch (git push origin feature/amazing-feature)
    Open a Pull Request

License

This project is licensed under the MIT License - see the LICENSE file for details.
Acknowledgments

    Designs inspired by the official Wonderla Parks website
    Built as part of a front-end development project assignment

