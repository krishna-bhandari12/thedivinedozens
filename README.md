# The Divine Dozens

A beautiful, mobile-responsive website for The Divine Dozens Christian community.

## 🛠️ Tech Stack

- **React 19** - UI Library
- **Vite** - Build Tool
- **Tailwind CSS v4** - Styling
- **Lucide React** - Icons

## 🚀 Getting Started

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Production Build

```bash
npm run build
```

The built files will be in the `dist` folder.

## 🌐 Deployment to thedivinedozens.com

### Option 1: Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "New Project" and import your repository
4. Vercel will auto-detect Vite settings
5. Click "Deploy"
6. After deployment, go to **Settings → Domains**
7. Add `thedivinedozens.com`
8. Update your domain's DNS:
   - Add an **A record** pointing to `76.76.19.19`
   - Or add a **CNAME record** pointing to `cname.vercel-dns.com`

### Option 2: Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) and sign in
3. Click "Add new site" → "Import an existing project"
4. Connect to your GitHub repository
5. Build settings are auto-configured via `netlify.toml`
6. Click "Deploy"
7. After deployment, go to **Domain settings**
8. Add custom domain `thedivinedozens.com`
9. Update your domain's DNS:
   - Add a **CNAME record** pointing to your Netlify subdomain

### Option 3: GitHub Pages

1. Install gh-pages: `npm install -D gh-pages`
2. Add to `package.json` scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Run `npm run deploy`
4. Go to repository **Settings → Pages**
5. Add custom domain `thedivinedozens.com`
6. Update your domain's DNS with GitHub's IPs

### Option 4: Cloudflare Pages

1. Push your code to GitHub
2. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
3. Create a new project and connect your repository
4. Build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
5. Deploy and add custom domain

## 🔧 DNS Configuration

After deploying, configure your domain registrar's DNS:

| Type  | Name | Value                          |
|-------|------|--------------------------------|
| A     | @    | (IP from hosting provider)     |
| CNAME | www  | thedivinedozens.com            |

## 📁 Project Structure

```
thedivinedozens/
├── public/
│   ├── CNAME           # Custom domain for GitHub Pages
│   ├── cross.svg       # Favicon
│   └── _redirects      # Netlify redirects
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Events.jsx
│   │   ├── Sermons.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── netlify.toml        # Netlify config
├── vercel.json         # Vercel config
└── vite.config.js
```

## 📝 License

Made with ❤️ for God's glory.
