# Simple Portfolio

A modern, responsive portfolio website built with React and Vite.

## Features

- Responsive design
- Smooth scrolling navigation
- Project showcase with images
- Skills section
- Contact information
- Modern UI with animations

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Adding Project Images

To add images for your projects:

1. **Place images in the `public/images/` folder**
   - Recommended format: PNG or JPG
   - Recommended size: 400x300px or similar aspect ratio
   - File names should match the `src` attributes in `App.jsx`

2. **Current image references in the code:**
   - `/images/stylecuts-project.png` - for StyleCuts project
   - `/images/ecommerce-api.png` - for E-Commerce Microservices API
   - `/images/user-management.png` - for User Management System

3. **Fallback behavior:**
   - If an image fails to load, it will automatically show a placeholder
   - The placeholder displays the project name with a gradient background

4. **Image optimization tips:**
   - Use compressed images (under 200KB each)
   - Maintain consistent aspect ratios
   - Use descriptive file names

## Customization

- Update project details in `src/App.jsx`
- Modify styles in `src/App.css`
- Replace placeholder content with your information
- Add your own projects and skills

## Technologies Used

- React
- Vite
- CSS3
- HTML5

## License

MIT
