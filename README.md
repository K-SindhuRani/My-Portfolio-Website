# 🌟 Kotti Sindhu Rani — Developer Portfolio Website

A sleek, responsive, and high-performance developer portfolio built from scratch for **Kotti Sindhu Rani** using **React**, **Vite**, **JavaScript**, and **Tailwind CSS**.

Featuring a premium dark theme (`#0B0F19`), glowing purple-to-cyan gradients, glassmorphism cards, typewriter role animations, and full mobile responsiveness.

---

## 🚀 Live Demo & Profiles
## 🌐 Live Portfolio
-**Visit my portfolio**:https://my-portfolio-website-delta-virid-78.vercel.app/
- **LeetCode Profile**: [https://leetcode.com/u/kotti_sindhu_rani/](https://leetcode.com/u/kotti_sindhu_rani/)
- **LinkedIn Profile**: [https://www.linkedin.com/in/k-sindhu-rani/](https://www.linkedin.com/in/k-sindhu-rani/)
- **GitHub Profile**: [https://github.com/K-SindhuRani](https://github.com/K-SindhuRani)
- **RecruitSmart CRM Application**: [https://github.com/K-SindhuRani/RecruitSmart-CRM_Application](https://github.com/K-SindhuRani/RecruitSmart-CRM_Application) | [Live Demo](https://recruitsmart-crm.vercel.app/)
- **Secure Banking System**: [https://github.com/K-SindhuRani/Secure-Banking-System-](https://github.com/K-SindhuRani/Secure-Banking-System-)
- **Student Management System**: [https://github.com/K-SindhuRani/Student-Management-System-CRUD](https://github.com/K-SindhuRani/Student-Management-System-CRUD)
- **Contact Email**: [sindhurani334@gmail.com](mailto:sindhurani334@gmail.com)

---

## 📁 Project Folder Structure

```text
Portfolio Web/
├── public/
│   ├── images/
│   │   └── profile.png          <-- 📸 ACTUAL PROFILE PHOTO
│   ├── profile.png              <-- 📸 ROOT PROFILE PHOTO
│   ├── resume.pdf               <-- 📄 ACTUAL RESUME PDF
│   ├── favicon.svg              <-- Website browser tab icon
│   └── icons.svg
├── src/
│   ├── assets/                  <-- Additional static image assets
│   ├── components/
│   │   ├── Navbar.jsx           <-- Sticky navigation with active links & mobile drawer
│   │   ├── Hero.jsx             <-- 2-column hero: photo on left, typewriter intro on right
│   │   ├── About.jsx            <-- Bio summary & 2x2 highlight stats cards
│   │   ├── Skills.jsx           <-- 6 technical toolkit cards with pill badges
│   │   ├── Projects.jsx         <-- Featured project cards (RecruitSmart, Banking, etc.)
│   │   ├── Education.jsx        <-- Academic journey timeline (B.Tech, Inter, SSC)
│   │   ├── Certifications.jsx   <-- Dedicated Technical Certifications section
│   │   ├── Achievements.jsx     <-- Honors & Awards (Gold Medalist, Academic Excellence)
│   │   ├── Contact.jsx          <-- Direct email (with copy button), socials & message form
│   │   ├── Footer.jsx           <-- Quick links, copyright, and smooth scroll-to-top
│   │   ├── Icons.jsx            <-- Pixel-perfect SVG brand icons (GitHub, LinkedIn)
│   │   └── ResumeModal.jsx      <-- Interactive download & preview resume modal
│   ├── App.jsx                  <-- Main application layout container
│   ├── index.css                <-- Tailwind directives, glassmorphism & custom animations
│   └── main.jsx                 <-- React root entry point
├── index.html                   <-- HTML5 entry with Plus Jakarta Sans & SEO meta tags
├── package.json                 <-- Project metadata & dependencies
├── postcss.config.js            <-- PostCSS Tailwind configuration
├── tailwind.config.js           <-- Custom color tokens, fonts & keyframes
└── vite.config.js               <-- Vite server & build configurations
```

---

## 📸 1. How to Add Your Profile Picture

Your profile picture container is prominently positioned on the **left side** of the Hero section with a rounded gradient border, soft glow, and `object-fit: cover`.

1. Take your clear portrait or headshot photo.
2. Rename the image file to **`profile.jpg`** (or `.png`).
3. Place it into the **`public/`** folder:
   ```text
   Portfolio Web/public/profile.jpg
   ```
4. Refresh your browser! The site will automatically detect and display your photo immediately. If the file is not yet present, a graceful vector placeholder avatar with instructions is displayed without breaking the layout.

---

## 📄 2. How to Add Your Resume PDF

1. Export or save your resume as a PDF.
2. Rename the file to **`resume.pdf`**.
3. Place it into the **`public/`** folder:
   ```text
   Portfolio Web/public/resume.pdf
   ```
4. Whenever recruiters or visitors click the **"Download Resume"** button on the website, this PDF will download directly with the filename `Kotti_Sindhu_Rani_Resume.pdf`.

---

## 💻 3. How to Run Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18 or newer recommended)
- `npm` (comes bundled with Node.js)

### Step-by-Step Commands

1. **Open a terminal** inside the project root:
   ```bash
   cd "c:\my project\Portfolio Web"
   ```

2. **Install dependencies** (if not already installed):
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```text
   http://localhost:5173/
   ```

---

## 🛠️ 4. How to Build for Production

To create an optimized, production-ready static bundle:

```bash
npm run build
```

The output files will be generated in the **`dist/`** directory. You can test the production build locally by running:

```bash
npm run preview
```

---

## 🌐 5. Deployment Guide (Vercel or Netlify)

### Option A: Deploy to Vercel (Recommended)
1. Push this repository to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Kotti Sindhu Rani portfolio"
   git remote add origin https://github.com/K-SindhuRani/portfolio-web.git
   git branch -M main
   git push -u origin main
   ```
2. Go to [Vercel](https://vercel.com/) and sign in with GitHub.
3. Click **"Add New Project"** and select `portfolio-web`.
4. Vercel will automatically detect **Vite** with:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**. Your site will be live within seconds with a free `.vercel.app` domain and HTTPS!

### Option B: Deploy to GitHub Pages
1. Install `gh-pages`:
   ```bash
   npm install -D gh-pages
   ```
2. In `vite.config.js`, set `base: '/<repository-name>/'`.
3. In `package.json`, add `"deploy": "gh-pages -d dist"`.
4. Run `npm run build && npm run deploy`.

---

## 🎨 Technologies Used

- **React 19**: Component-based UI library.
- **Vite 8**: Fast, modern frontend build tool.
- **Tailwind CSS 3**: Utility-first CSS framework with tailored tokens.
- **Lucide Icons & SVG**: Clean, accessible iconography.
- **Plus Jakarta Sans**: Modern typography from Google Fonts.

---

## 📬 Contact & Connect

- **Email**: [sindhurani334@gmail.com](mailto:sindhurani334@gmail.com)
- **LinkedIn**: [https://www.linkedin.com/in/k-sindhu-rani/](https://www.linkedin.com/in/k-sindhu-rani/)
- **GitHub**: [https://github.com/K-SindhuRani](https://github.com/K-SindhuRani)
