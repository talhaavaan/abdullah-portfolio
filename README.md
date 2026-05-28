# Elena Voss — Portfolio Site

A Node.js/Express portfolio website converted from a single HTML file into a proper project structure.

## 📁 Project Structure

```
portfolio-site/
├── server.js              # Express entry point
├── package.json           # Dependencies & scripts
├── .gitignore
├── routes/
│   ├── index.js           # Serves index.html
│   └── contact.js         # Handles contact form POST /contact/send
├── public/
│   ├── index.html         # Main portfolio page
│   ├── 404.html           # Custom 404 page
│   ├── css/
│   │   └── style.css      # All styles
│   ├── js/
│   │   └── main.js        # Scroll, slider, form AJAX
│   └── images/
│       └── profile.jpg    # Profile photo
└── README.md
```

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start the server
```bash
# Production
npm start

# Development (with auto-reload)
npm run dev
```

### 3. Open in browser
```
http://localhost:3000
```

## ⚙️ Configuration

The server runs on port `3000` by default. Set a custom port via environment variable:
```bash
PORT=8080 npm start
```

## 📬 Contact Form

The contact form submits via AJAX to `POST /contact/send`. 

To wire up email delivery, edit `routes/contact.js` and add a mailer like **Nodemailer**:

```bash
npm install nodemailer
```

Then update the route with your SMTP credentials.

## 🛠 Tech Stack

- **Runtime**: Node.js
- **Framework**: Express 4
- **Frontend**: Vanilla HTML/CSS/JS
- **Fonts**: Google Fonts (Playfair Display + Manrope)
- **Dev tool**: Nodemon
"# abdullah-portfolio" 
