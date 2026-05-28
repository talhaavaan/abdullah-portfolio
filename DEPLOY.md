# 🚀 Deploy to Vercel — Step by Step

## Option A: Vercel CLI (Fastest)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy from the project folder:
```bash
cd portfolio-site
vercel
```

4. Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? (your account)
   - Link to existing project? **N**
   - Project name: `portfolio-site` (or anything)
   - Directory: `./` (press Enter)
   - Override settings? **N**

5. Your site will be live at a URL like:
   `https://portfolio-site-abc123.vercel.app`

---

## Option B: GitHub + Vercel Dashboard (Recommended)

1. Push your project to GitHub:
```bash
git init
git add .
git commit -m "Initial deploy"
git remote add origin https://github.com/YOUR_USERNAME/portfolio-site.git
git push -u origin main
```

2. Go to https://vercel.com → **Add New Project**
3. Import your GitHub repo
4. Vercel auto-detects Node.js — just click **Deploy**
5. Done! Auto-deploys on every `git push`

---

## ⚙️ Vercel Settings (already configured in vercel.json)
- Entry point: `server.js`
- Runtime: Node.js
- Routes: all traffic → Express

## 🔒 Source Protection (already applied)
- JavaScript is fully obfuscated (unreadable)
- CSS is minified
- HTML is minified and stripped of comments
- Right-click → Inspect is disabled
- F12 / Ctrl+Shift+I / Ctrl+U blocked
- DevTools detection active
