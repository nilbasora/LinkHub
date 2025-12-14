<p align="center">
  <img src="public/linkhub.png" width="96" alt="LinkHub Logo">
</p>

<h1 align="center">LinkHub</h1>

<p align="center"><strong>
The free, open-source alternative to Linktree — powered by GitHub Pages and fully configurable through <code>setup.yaml</code>.
</strong></p>

<p align="center">
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg"></a>
  <img src="https://img.shields.io/badge/Powered%20By-GitHub%20Pages-black?logo=github" />
  <img src="https://img.shields.io/badge/Built%20With-React%20%2B%20TypeScript%20%2B%20Vite-blue" />
  <img src="https://img.shields.io/badge/Styling-TailwindCSS-06B6D4?logo=tailwindcss" />
</p>

<p align="center">
  <img src="docs/img/default.png" alt="LinkHub preview" width="900">
</p>

---

# 🚀 Demo

**Live demo:**
👉 https://nilbasora.github.io/LinkHub/

---

# ⭐ About LinkHub

**LinkHub** is a completely static, open-source **Link-in-bio page** inspired by Linktree — but:

- 🆓 **100% free**
- 🔐 **Fully own your code**
- 🖥 **Hosted automatically by GitHub Pages**
- 🛠 **Configured entirely through `setup.yaml`**
- 🎨 **Themeable (default, dark, neon, custom themes)**

Fork the repo, edit your config, push — **your personal link hub is instantly deployed**.

---

# ✨ Features

- ✔ Fully static (no backend required)
- ✔ Hosted via GitHub Pages automatically
- ✔ YAML configuration (`setup.yaml`) — no coding needed
- ✔ Zod-validated config with clean error reporting
- ✔ Profile, bio, social links, sections, and custom buttons
- ✔ Multiple themes (Default, Dark, Neon)
- ✔ Easy to build your own theme
- ✔ Mobile-first design
- ✔ Custom domain support

---

# 📦 Getting Started

## 1️⃣ Fork or Clone the Repository

```sh
git clone https://github.com/nilbasora/LinkHub.git
cd LinkHub
```

Or use GitHub's "**Fork**" button.

## 2️⃣ Edit `setup.yml`

This file controls **everything** on your page.

Example:
```yaml
    profile:
      name: "John Doe"
      avatarUrl: "/avatar.png"
      bio: "Welcome to my link hub!"

    social:
      github: "https://github.com/yourname"
      website: "https://yourwebsite.com"

    sections:
      my-links:
        title: "Useful Links"
        links:
          portfolio:
            title: "Portfolio"
            url: "https://yourwebsite.com"
            icon: "website"

    theme:
      name: "neon"
      options:
        style: "futur"
```

Push your changes → GitHub Pages will automatically redeploy.

---

## 3️⃣ Run Locally

```sh
    npm install
    npm run dev
```

Open `http://localhost:5173`

---

## 4️⃣ Deploy Automatically with GitHub Pages

This repo already includes a GitHub Pages workflow (when pushed to `main`).

Your site appears at:

`https://yourusername.github.io/LinkHub/`

---

## 5️⃣ Optional: Custom Domain

1. Go to Repository → Settings → Pages

2. Enter your domain (example: links.linkhub.com)

3. Add a DNS CNAME record linking to yourusername.github.io

---

# 🧩 setup.yml Reference

## profile

```yaml
profile:
  name: "John Doe"        # required
  avatarUrl: "/me.png"    # optional
  bio: "Short bio here"   # optional
```

## social

```yaml
social:
  github: "https://github.com/username"
  x: "https://x.com/username"
  instagram: ""
```

Blank entries are ignored.

Supported platforms:

twitter, x, facebook, github, linkedin, youtube, instagram, tiktok, website

## sections

Each section contains multiple links.

```yaml
sections:
  dev:
    title: "Developer Stuff"
    links:
      myrepo:
        title: "My Repo"
        url: "https://github.com/me"
        icon: "github"
```


Each link must contain:

url (required)

**At least one of:** title or icon

## theme

```yaml
theme:
  name: default | dark | neon
  options: {}     # theme-specific
```


Theme documentation is here:
👉 /docs/themes

## analytics (WIP)

```yaml
analytics:
  provider: plausible | ga4 | none
  domain: "example.com"
  measurementId: "G-XXXXXXX"
```

---

# 🎨 Themes

LinkHub includes 3 official themes:

| Theme | Description | Docs|
|-------|------|------|
| Default | Clean, minimal, modern | docs/themes/default.md |
| Dark | Solid dark mode variant | docs/themes/dark.md |
| Neon | Pink/blue neon glowing aesthetic | docs/themes/neon.md |

---

# 🛠 Create Your Own Theme

Creating themes is extremely simple — each theme exports a function:

```bash
src/theme/<your-theme>/index.ts
```
Example:

```ts
import type { ThemeTokens } from '../ThemeContext';

const getTokens = (options?: Record<string, any>): ThemeTokens => {
  return {
    app: {
      wrapper: "your-styles-here",
    },
    profileHeader: { ... },
    linkButton: { ... },
    sections: { ... },
    socialLinks: { ... }
  };
};

export default getTokens;
```

To register your theme:

```ts
// src/theme/index.ts
import mytheme from './mytheme';

export const themeRegistry = {
  default,
  dark,
  neon,
  mytheme,  // ← add it here
};
```

Then enable it from `setup.yml`:

```yaml
theme:
  name: "mytheme"
  options:
    yourOption: true
```

Full theming guide available inside:
👉 `/docs/themes`

---

# 🤝 Contributing

All contributions are welcome — issues, ideas, and PRs!

---

# 📜 License

MIT License — see LICENSE for details.

---

# 💛 Credits

Created by Nil Basora
https://nilbasora.dev
