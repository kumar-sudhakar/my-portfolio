# 🚀 Personal Portfolio Website

A modern, responsive, and interactive personal portfolio website built to showcase my **skills, projects, experience, and contact information** as a Full Stack / MERN Stack Developer.

The website focuses on a clean UI, smooth animations, responsive layouts, and an engaging user experience.

## 🌐 Live Website

**Portfolio:** Coming Soon

---

## ✨ Features

* 🎨 Modern and responsive UI
* 🌌 Animated particle background
* ⚡ Smooth animations using Framer Motion
* 📱 Fully responsive for desktop, tablet, and mobile
* 👨‍💻 About Me section
* 🛠️ Skills and technologies section
* 💼 Projects showcase
* ⭐ Testimonials section
* 📩 Contact form
* 📧 EmailJS integration for sending messages
* 🔗 Social media and GitHub links
* 📄 Resume download
* 🎭 Interactive hover and scroll animations
* 🚀 Fast development and production build using Vite

---

## 🛠️ Technologies Used

### Frontend

* React.js
* JavaScript
* HTML5
* CSS3
* Tailwind CSS
* Framer Motion
* React Icons

### Tools & Services

* Vite
* Git
* GitHub
* EmailJS

---

## 📂 Project Structure

```text
My-Portfolio/
│
├── public/
│
├── src/
│   ├── assets/
│   │   ├── images
│   │   ├── icons
│   │   └── ...
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ParticlesBackground.jsx
│   │   └── ...
│   │
│   ├── sections/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Testimonials.jsx
│   │   └── Contact.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .env
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/kumar-sudhakar/my-portfolio.git
```

### 2. Navigate to the project

```bash
cd my-portfolio
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the root directory:

```env
VITE_SERVICE_ID=your_emailjs_service_id
VITE_TEMPLATE_ID=your_emailjs_template_id
VITE_PUBLIC_KEY=your_emailjs_public_key
```

These variables are used by EmailJS for the contact form.

### 5. Start the development server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

---

## 📧 Contact Form

The contact form uses **EmailJS** to send messages directly from the portfolio.

The form collects:

* Name
* Email
* Service required
* Budget
* Project idea

EmailJS credentials are stored using Vite environment variables and are **not hard-coded inside the source code**.

> Never commit your `.env` file containing credentials or keys that should remain private.

---

## 📱 Responsive Design

The portfolio is designed to work across different screen sizes:

* 🖥️ Desktop
* 💻 Laptop
* 📱 Mobile
* 📟 Tablet

Layouts, images, navigation, project cards, and forms adapt to different screen sizes using responsive CSS and Tailwind CSS utilities.

---

## 🎨 Sections

### 🏠 Home

Introduces me as a Full Stack / MERN Stack Developer with links to my social profiles and resume.

### 👨‍💻 About

Provides information about my background, experience, development focus, and career interests.

### 🛠️ Skills

Showcases my technical skills and technologies that I work with.

### 💼 Projects

Displays selected projects with descriptions, technologies used, and links to the source code or live projects.

### ⭐ Testimonials

Displays feedback and testimonials with an interactive presentation.

### 📩 Contact

Allows visitors or potential clients/recruiters to send me a message through EmailJS.

---

## 🚀 Build for Production

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## 🔮 Future Improvements

* Add a blog section
* Add project filtering
* Add more interactive animations
* Add dark/light theme support
* Add more project case studies
* Improve accessibility
* Add SEO optimization
* Deploy with a custom domain

---

## 👨‍💻 About Me

Hi, I'm **Sudhakar Kumar**, a Full Stack / MERN Stack Developer passionate about building modern, responsive, and user-friendly web applications.

### 💻 Technical Skills

* HTML
* CSS
* JavaScript
* React.js
* Node.js
* Express.js
* MongoDB
* REST APIs
* JWT Authentication
* bcrypt
* Git & GitHub

I enjoy learning new technologies, solving programming problems, and building real-world applications.

---

## 🔗 Connect With Me

* **GitHub:** https://github.com/kumar-sudhakar
* **LinkedIn:** https://linkedin.com/in/sudhakar-kumar-a23268349
* **LeetCode:** https://leetcode.com/u/Sudhakar_Kumar_18/

---

## 📄 License

This project is created for personal portfolio and educational purposes.

© 2026 Sudhakar Kumar. All rights reserved.

```

You can save this directly as **`README.md`** in your `My-Portfolio` root folder.
```
