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
- Interactive Google Maps integration showing Building 404 - Yu Takeuchi location
- Social media links

### 6. **Session Recordings** (`/sessions/recordings`)

- **YouTube Video Integration** powered by [YouTube Data API v3](https://developers.google.com/youtube/v3)
  - Automatically fetches the latest 3 videos from the SIMG YouTube channel
  - Displays high-quality video thumbnails
  - Shows video duration and publication date
  - Click-to-play functionality with hover effects
  - Styled with Van Gogh color palette (yellow/blue gradients)
  - Free tier: 10,000 quota units/day (sufficient for ~100 video fetches)
- Direct links to full YouTube channel
- Subscribe call-to-action section

**Video Display Features**:
- Grid layout (3 columns on desktop, responsive on mobile)
- Glassmorphism effects with dark backgrounds
- Yellow play button overlay (#F4C542)
- Animated hover states with scaling effects
- Error handling with fallback to direct YouTube links

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

#### YouTube Data API Configuration

The session recordings page uses YouTube Data API v3 to fetch and display videos from the SIMG channel. Here's how it works:

1. **API Setup**: Fetches latest videos from `@simg-UN` YouTube channel
2. **Video Data Retrieved**: 
   - Video thumbnails (high quality)
   - Title and description
   - Publication date
   - Video duration
   - Video ID for direct YouTube links
3. **Display Features**:
   - Automatic grid layout (3 videos)
   - Click-to-watch on YouTube
   - Styled with Van Gogh palette
   - Fallback error messages if API fails

**Required Configuration**:
- `PUBLIC_YOUTUBE_API_KEY`: Your YouTube Data API v3 key
- `PUBLIC_YOUTUBE_CHANNEL_ID`: SIMG YouTube channel ID

These values are configured in both `/en/sessions/recordings.astro` and `/es/sessions/recordings.astro`.

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

## 📺 YouTube Integration Setup

The session recordings page uses **YouTube Data API v3** to automatically fetch and display the latest videos from the SIMG channel.

### Setup Instructions

1. **Create Google Cloud Project**
   - Visit [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select an existing one
   - Name it (e.g., "SIMG Website")

2. **Enable YouTube Data API v3**
   - In the Cloud Console, go to "APIs & Services" → "Library"
   - Search for "YouTube Data API v3"
   - Click "Enable"

3. **Create API Credentials**
   - Go to "APIs & Services" → "Credentials"
   - Click "Create Credentials" → "API Key"
   - Copy the generated API key
   - (Optional) Restrict the key to YouTube Data API v3 for security

4. **Get Your YouTube Channel ID**
   - Visit your YouTube channel: `https://www.youtube.com/@simg-UN`
   - Click "About" tab
   - Click "Share channel" → "Copy channel ID"
   - Alternative: Use the URL structure to find it

5. **Configure Environment Variables**
   
   Edit your `.env` file and add the YouTube credentials:
   ```env
   # YouTube Data API v3
   PUBLIC_YOUTUBE_API_KEY=your_youtube_api_key_here
   PUBLIC_YOUTUBE_CHANNEL_ID=your_channel_id_here
   ```

   **Where to find these values:**
   - `PUBLIC_YOUTUBE_API_KEY`: Google Cloud Console → APIs & Services → Credentials
   - `PUBLIC_YOUTUBE_CHANNEL_ID`: YouTube Channel → About → Share → Copy channel ID

6. **For Production Deployment (Vercel)**
   
   Add the environment variables in your Vercel project settings:
   - Go to Project Settings → Environment Variables
   - Add both `PUBLIC_YOUTUBE_API_KEY` and `PUBLIC_YOUTUBE_CHANNEL_ID`
   - Redeploy your site

7. **Test the Integration**
   - Restart your dev server: `bun run dev`
   - Navigate to `/en/sessions/recordings` or `/es/sessions/recordings`
   - Verify that the latest 3 videos from your channel appear
   - Click on a video to ensure it opens on YouTube

### API Features

The integration automatically fetches:
- **Video Thumbnails**: High-quality images (480x360px)
- **Video Titles**: Displayed with 2-line truncation
- **Publication Dates**: Formatted in English/Spanish
- **Video Duration**: Converted from ISO 8601 format (PT1H2M3S → 1:02:03)
- **Direct Links**: Click any video card to watch on YouTube

### Quota Limits

YouTube Data API v3 has quota limits:
- **Daily Quota**: 10,000 units per day (default)
- **Search Request Cost**: ~100 units
- **Videos Request Cost**: ~1 unit
- **Total per page load**: ~101 units
- **Daily page loads possible**: ~99 loads (more than enough for normal traffic)

### Fallback Behavior

If the API key is not configured or requests fail:
- Displays friendly error message
- Provides direct link to YouTube channel
- Doesn't break the page functionality

### Security Notes

- ✅ **API restrictions recommended**: Limit the API key to YouTube Data API v3 only
- ✅ **HTTP referrer restrictions**: Set allowed domains in Google Cloud Console
- ✅ **Public exposure is safe**: Client-side API keys are normal for YouTube API
- ✅ **Rate limiting**: Google handles quota limits automatically

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
