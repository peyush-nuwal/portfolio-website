# Peyush Nuwal - Portfolio Website

This is my personal portfolio website built to showcase my skills, projects, and experience as a developer. The website is built with a focus on smooth animations, responsive design, and modern user interface practices.

![Screenshot 1](./src/assets/screenshots/screenshot-1.png)
![Screenshot 2](./src/assets/screenshots/screenshot-2.png)
![Screenshot 3](./src/assets/screenshots/screenshot-3.png)
![Screenshot 4](./src/assets/screenshots/screenshot-4.png)

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Animations](#animations)
- [Contributing](#contributing)
- [License](#license)

## Features
- **Responsive Design:** Works seamlessly on all devices, from mobile to desktop.
- **Smooth Animations:** Leveraging GSAP and Framer Motion for dynamic UI transitions.
- **Smooth Scrolling:** Using Lenis for a smooth scroll experience.
- **Interactive User Interface:** Built with modern tools to provide an engaging experience.
- **Portfolio Section:** Highlights key projects with details and images.
- **Contact Form:** Allows users to get in touch.

## Technologies Used
- **React** - JavaScript library for building user interfaces.
- **GSAP (GreenSock Animation Platform)** - High-performance animations for UI elements.
- **Framer Motion** - Declarative animations and gestures.
- **Lenis** - Smooth scrolling library for enhanced user experience.
- **Tailwind CSS** - Utility-first CSS framework for styling.

## Setup Instructions
To get a copy of the project up and running on your local machine, follow these steps:

### Prerequisites
- [Node.js](https://nodejs.org/) (version 16 or above recommended)
- npm (comes with Node.js)

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/peyush-nuwal/peyush-nuwal.git
    ```

2. Navigate to the project directory:
    ```bash
    cd peyush-nuwal
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Run the development server:
    ```bash
    npm start
    ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## Usage
This project is primarily designed for showcasing my portfolio. It can also be adapted for personal use by modifying the content in the `src` directory.

## Folder Structure
```plaintext
/peyush-nuwal
├── /public         # Static files and assets
├── /src
│   ├── /assets
│   │   └── /screenshots   # Add project screenshots here
│   ├── /components        # Reusable UI components
│   ├── /pages             # Pages like Home, About, Projects
│   ├── /hooks             # Custom React hooks
│   ├── /styles            # Global and component-specific styles
│   └── /utils             # Utility functions
└── README.md       # Project documentation
```

## Animations
This project heavily utilizes **GSAP** and **Framer Motion** for creating interactive animations:
- **GSAP** is used for complex animations like text reveals and scroll-based animations.
- **Framer Motion** handles UI transitions and micro-interactions to enhance the UX.
- **Lenis** ensures that the scrolling experience is smooth and responsive.

## Contributing
Contributions are welcome! If you have suggestions or improvements, feel free to fork the repository and submit a pull request. For major changes, please open an issue to discuss what you would like to change.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
