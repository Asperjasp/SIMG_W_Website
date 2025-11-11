# 🧠 SIMG - Semillero de Investigación en Modelos Generativos

<div align="center">

![SIMG Banner](public/images/website/SIMG_LOGO.jpg)

**Research Seminar on Generative Models**  
Universidad Nacional de Colombia

[🌐 Website](https://simg-website.vercel.app) • [📚 Research](https://simg-website.vercel.app/en/research) • [👥 Team](https://simg-website.vercel.app/en/members) • [📧 Contact](https://simg-website.vercel.app/en/contact)

</div>

---

## 📖 About

The **SIMG** (Semillero de Investigación en Modelos Generativos) is a research seminar affiliated with the **Universidad Nacional de Colombia - UNAL**, dedicated to advancing the frontiers of artificial intelligence through rigorous research and collaborative innovation.

Our mission is to create a dynamic learning environment that introduces students to cutting-edge AI research, focusing on:

- 🔤 **Natural Language Processing (NLP)**
- 🧠 **Long Short-Term Memory (LSTM) Networks**
- ⚡ **Transformers & Attention Mechanisms**
- 🤖 **Autonomous AI Agents**
- 📊 **Benchmarks & Model Fine-tuning**
- 🎨 **Diffusion Models**

---

## 🎨 Design System

This website features a modern design with:

- **Color Palette**: Orange primary (#f97316), Blue secondary (#0ea5e9)
- **Visual Effects**: Glassmorphism, radial gradients, smooth animations
- **Theme Support**: Dark/Light mode with persistent storage
- **Typography**: Responsive, clamp-based sizing with system fonts
- **Components**: Reusable design tokens and CSS custom properties

---

## 🚀 Tech Stack

- **[Astro 5.14.8](https://astro.build)** - Static Site Generator
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[EmailJS](https://www.emailjs.com/)** - Client-side email service for contact form
- **CSS Custom Properties** - Comprehensive design token system
- **Content Collections** - Markdown-based content management
- **Node.js v24.11.0** - Runtime environment

---

## 📁 Project Structure

```text
SIMG_W_Website/
├── public/
│   ├── images/
│   │   └── website/          # Site images and assets
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.astro      # Navigation with theme toggle
│   │   └── SponsorCarousel.astro
│   ├── content/
│   │   ├── config.ts         # Content Collections config
│   │   ├── members/          # Team member profiles
│   │   ├── research/         # Research projects (en/es)
│   │   └── blog/             # Blog posts
│   ├── layouts/
│   │   └── Layout.astro      # Base layout with FOUC prevention
│   ├── pages/
│   │   ├── en/               # English pages
│   │   │   ├── index.astro
│   │   │   ├── about.astro
│   │   │   ├── research.astro
│   │   │   ├── members.astro
│   │   │   └── contact.astro
│   │   ├── es/               # Spanish pages
│   │   │   └── ...
│   │   └── index.astro       # Language redirect
│   └── styles/
│       └── global.css        # Design tokens & global styles
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── CHANGELOG.md
```

---

## 🧞 Commands

Run from the project root:

| Command                | Action                                              |
| :--------------------- | :-------------------------------------------------- |
| `npm install`          | Install dependencies                                |
| `npm run dev`          | Start dev server at `localhost:4321`                |
| `npm run build`        | Build production site to `./dist/`                  |
| `npm run preview`      | Preview build locally before deploying              |
| `npm run astro ...`    | Run Astro CLI commands                              |

---

## 🌐 Pages

### 1. **Home** (`/`)

- Auto-redirects to preferred language (en/es)
- Hero section with gradient backgrounds
- Featured research preview
- Call-to-action sections

### 2. **About Us** (`/about`)

- Mission statement
- Research focus areas with interactive cards
- Team introduction

### 3. **Research** (`/research`)

- Filterable research projects grid
- Search functionality
- Category-based organization (Research, Products, Partnerships)

### 4. **Members** (`/members`)

- Team profiles with photos
- Research interests and links
- Alumni section

### 5. **Contact** (`/contact`)

- **Email Contact Form** powered by [EmailJS](https://www.emailjs.com/)
  - Sends emails directly from the browser without a backend server
  - Messages are sent to: `alesanchezpov@gmail.com` and `robertgomez.datascience@gmail.com`
  - Includes sender's name, email, subject, and message
  - Real-time validation and loading states
  - Success/error feedback with styled notifications
  - Free tier: 200 emails/month
- Contact information (location, emails, meeting times)
- Social media links

#### EmailJS Configuration

The contact form uses EmailJS to send emails without requiring a backend server. Here's how it works:

1. **Service Setup**: Connected to Gmail account (`alesanchezpov@gmail.com`)
2. **Email Template**: Custom HTML template with SIMG branding
3. **Recipients**: 
   - Primary: `alesanchezpov@gmail.com`
   - Bcc: `robertgomez.datascience@gmail.com`
4. **Reply-To**: Automatically set to the sender's email from the form

**Required Configuration**:
- `EMAILJS_PUBLIC_KEY`: Your EmailJS public key
- `EMAILJS_SERVICE_ID`: Gmail service ID
- `EMAILJS_TEMPLATE_ID`: Contact form template ID

These values are configured in both `/en/contact.astro` and `/es/contact.astro`.

---

## 🎯 Key Features

### Design System

- **600+ lines** of comprehensive CSS custom properties
- **Light/Dark Mode** with localStorage persistence
- **FOUC Prevention** via inline script in `<head>`
- **Glassmorphism** effects throughout
- **Responsive** design with mobile-first approach

### Color Identity

- Primary: Orange (#f97316, #ea580c)
- Secondary: Blue (#0ea5e9, #8b5cf6)
- Gradients: 50/50 orange-blue in text, orange-dominant in backgrounds

### Interactive Elements

- Theme toggle button (sun/moon icons)
- Language selector with hover dropdown
- Smooth scroll animations
- Hover effects with orange accents
- **Contact Form Integration**:
  - Client-side email delivery via EmailJS
  - No backend required
  - Form validation and error handling
  - Loading states and user feedback

---

## 🌍 Internationalization

The website supports both **English** and **Spanish** with:
- Parallel page structure (`/en/` and `/es/`)
- Automatic language detection from browser
- Manual language switching via header dropdown
- Bilingual content collections

---

## 📧 Contact Form Setup

The contact form uses **EmailJS** to send emails directly from the browser without a backend server.

### Setup Instructions

1. **Create EmailJS Account**
   - Visit [emailjs.com](https://www.emailjs.com/)
   - Sign up for free (200 emails/month)

2. **Configure Email Service**
   - Add Gmail service
   - Connect with `alesanchezpov@gmail.com`

3. **Create Email Template**
   - Template ID: Save this for step 4
   - Subject: `Nuevo mensaje de contacto SIMG: {{subject}}`
   - To: `alesanchezpov@gmail.com`
   - Bcc: `robertgomez.datascience@gmail.com`
   - Reply-To: `{{reply_to}}`

4. **Configure Environment Variables**
   
   Copy the example file and fill in your credentials:
   ```bash
   cp .env.example .env
   ```

   Edit `.env` with your EmailJS credentials:
   ```env
   PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
   PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
   PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
   ```

   **Where to find these values:**
   - `PUBLIC_EMAILJS_PUBLIC_KEY`: EmailJS Dashboard → Account → API Keys
   - `PUBLIC_EMAILJS_SERVICE_ID`: EmailJS Dashboard → Email Services (shows next to your Gmail service)
   - `PUBLIC_EMAILJS_TEMPLATE_ID`: EmailJS Dashboard → Email Templates (shows next to your template)

   **Important:** The `.env` file is already in `.gitignore` and won't be committed to Git.

5. **For Production Deployment (Vercel)**
   
   Add the environment variables in your Vercel project settings:
   - Go to Project Settings → Environment Variables
   - Add all three `PUBLIC_EMAILJS_*` variables
   - Deploy or redeploy your site

6. **Test the Form**
   - Restart your dev server: `npm run dev`
   - Fill out the contact form on the website
   - Check both email inboxes for the message
   - Verify reply-to functionality

### Email Template Variables

The form sends these variables to EmailJS:
- `{{from_name}}` - Sender's name
- `{{reply_to}}` - Sender's email address
- `{{subject}}` - Message subject
- `{{message}}` - Message content

### Security Notes

- ✅ **Environment variables are safe**: The `.env` file is gitignored and never committed
- ✅ **Public keys are OK**: EmailJS public keys are meant to be visible in client-side code
- ✅ **Rate limiting**: EmailJS has built-in rate limiting and spam protection
- ✅ **Production ready**: Works seamlessly with Vercel, Netlify, and other platforms

---

## 🚢 Deployment

The site is optimized for deployment on:

- **Vercel** (recommended)
- **Netlify**
- **GitHub Pages**
- Any static hosting service

Build command: `npm run build`  
Output directory: `./dist/`

---

## 👥 Team

**Research Supervisor**: [Professor Name]  
**Student Leaders**: Multiple contributors  
**Alumni**: Past members who've contributed to the project

---

## 📺 Connect With Us

<div id="badges">
  <a href="https://www.linkedin.com/in/alejandrosanchezpoveda/">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"/>
  </a>
  <a href="https://www.youtube.com/channel/UCI5h3tbo4s7VE-VuMMYptYw">
    <img src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white" alt="YouTube"/>
  </a>
  <a href="https://x.com/Asperjasp/">
    <img src="https://img.shields.io/badge/X-000000?style=for-the-badge&logo=x&logoColor=white" alt="X/Twitter"/>
  </a>
  <a href="https://www.instagram.com/alejosanchezpoveda/">
    <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram"/>
  </a>
  <a href="https://github.com/Asperjasp">
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/>
  </a>
  <a href="https://linktr.ee/Asperjasp">
    <img src="https://img.shields.io/badge/Linktree-39E09B?style=for-the-badge&logo=linktree&logoColor=white" alt="Linktree"/>
  </a>
</div>

---

## 📄 License

This project is maintained by the SIMG research seminar at Universidad Nacional de Colombia.

---

## 🤝 Contributing

We welcome contributions! Please feel free to submit issues or pull requests.

For major changes, please open an issue first to discuss what you would like to change.

---

<div align="center">

**Made with ❤️ by the SIMG Team**

[⬆ Back to Top](#-simg---semillero-de-investigación-en-modelos-generativos)

</div>
