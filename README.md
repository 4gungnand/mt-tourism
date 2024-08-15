# Muara Takus Village Website

This project is a simple website to promote Muara Takus Village, built with Next.js, TypeScript, and Tailwind CSS. The site provides information about the village, its attractions, and features an interactive map to explore various points of interest.

## Features

- **Next.js**: Framework for building React applications with server-side rendering.
- **TypeScript**: Provides static type checking to catch errors early in development.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Firebase**: Used for integrating analytics and other Firebase services.
- **Leaflet**: Interactive map library used to pin places on the map.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (v6 or later) or [Yarn](https://yarnpkg.com/) (v1.22 or later)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/muara-takus-website.git
   cd muara-takus-website
   ```

2. **Install dependencies:**

   If you're using npm:

   ```bash
   npm install
   ```

   Or with Yarn:

   ```bash
   yarn install
   ```

3. **Add Firebase Configuration:**

   Update the `firebase.ts` file located in `src/utils/firebase.ts` with your Firebase project credentials.

4. **Run the development server:**

   ```bash
   npm run dev
   ```

   Or with Yarn:

   ```bash
   yarn dev
   ```

5. **Open the application in your browser:**

   Visit `http://localhost:3000` in your browser to see the website in action.

## Project Structure

- `components/`: Reusable React components (e.g., navigation, map).
- `pages/`: Next.js pages. Each file represents a route in the application.
- `public/`: Static files (e.g., images, favicon).
- `styles/`: Global CSS and Tailwind configuration.
- `utils/`: Utility functions and configurations (e.g., Firebase).
- `src/`: Contains the main application code.

## Firebase Setup

This project uses Firebase for analytics. Ensure your Firebase project is set up with the appropriate credentials in the `firebase.ts` file. If you do not have Firebase set up, you can skip the Firebase-related functionality or remove it.

## Map Functionality

The website features an interactive map powered by Leaflet. You can click on the map to add markers with custom SVG icons and brief descriptions.

## Deployment

You can deploy this Next.js application using platforms like Vercel, Netlify, or any other hosting service that supports Node.js applications.

### Deploy with Vercel

1. **Install the Vercel CLI:**

   ```bash
   npm i -g vercel
   ```

2. **Deploy the application:**

   ```bash
   vercel
   ```

   Follow the prompts to set up the project, and your site will be deployed.

## Contributing

If you would like to contribute to this project, feel free to fork the repository and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

Made with ❤️ for Muara Takus Village by Prema
