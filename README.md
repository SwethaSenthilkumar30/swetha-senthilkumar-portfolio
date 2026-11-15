# Swetha SenthilKumar — Portfolio

A modern, responsive single-page developer portfolio showcasing full-stack Java, Spring, and web engineering projects.

Built during the placement training program at [TAP Academy](https://thetapacademy.com/) (full-stack development, AI and augmented reality training).

## Live Site
https://YOUR-SITE-URL/

## Tech Stack
- React 19
- Vite
- Tailwind CSS 4
- Framer Motion
- AOS
- EmailJS
- WebGL

## Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Build for production
npm run build
```

## Environment Variables

Create a `.env.local` file in the root directory with your EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

*(If unconfigured, the contact form uses the pre-formatted email-client mailto fallback).*
