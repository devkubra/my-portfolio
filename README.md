# Kubra Aiman Khira - Personal Portfolio

This is a production-ready personal portfolio built with React, Tailwind CSS, and Motion.

## 🚀 Getting Started

To run this project locally:

1. **Clone or Download**: Copy the files from this project to your local machine.
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Run Development Server**:
   ```bash
   npm run dev
   ```
4. **Build for Production**:
   ```bash
   npm run build
   ```

## 🛠 Tech Stack

- **Framework**: React 19
- **Styling**: Tailwind CSS 4
- **Animations**: Motion (formerly Framer Motion)
- **Icons**: Lucide React
- **Build Tool**: Vite

## 📂 Project Structure

- `src/App.tsx`: The main portfolio component containing all content and logic.
- `src/index.css`: Global styles and Tailwind theme configuration.
- `src/main.tsx`: React entry point.
- `vite.config.ts`: Vite configuration.
- `package.json`: Project dependencies and scripts.

## 📝 Customization

To personalize the portfolio, edit the constants at the top of `src/App.tsx`:
- `PROFILE`: Name, tagline, and bio.
- `SKILLS`: Technical and soft skills.
- `PROJECTS`: Your work samples.
- `EXPERIENCE`: Timeline entries.

## 🌐 Deployment to GitHub Pages

1. Create a new repository on GitHub.
2. Push your code to the repository.
3. In your repository settings, go to **Pages**.
4. Set the source to **GitHub Actions**.
5. Use the "Static HTML" or "Vite" template to automate the build and deploy process.

Alternatively, you can run `npm run build` and upload the contents of the `dist` folder to your repository.
