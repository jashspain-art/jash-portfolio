# Jash Navin Thakkar — Personal Portfolio

A premium, modern portfolio website built with **Next.js 16**, **Tailwind CSS v4**, and **Framer Motion**.  
Designed to position Jash as a high-potential business & AI growth professional.

## 🌐 Live Site

> https://jash-portfolio.vercel.app *(will be live after first deployment)*

---

## 🚀 Tech Stack

| Layer     | Tech                                |
|-----------|-------------------------------------|
| Framework | Next.js 16 (App Router)             |
| Styling   | Tailwind CSS v4                     |
| Animation | Framer Motion                       |
| Icons     | Lucide React                        |
| Theme     | next-themes (dark/light mode)       |
| Fonts     | Inter (Google Fonts)                |
| Deploy    | Vercel                              |

---

## 📁 Project Structure

```
jash-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout, SEO metadata
│   │   ├── page.tsx          # Main page (assembles all sections)
│   │   └── globals.css       # Global styles + CSS theme tokens
│   ├── components/
│   │   ├── Navbar.tsx        # Sticky nav + dark/light toggle
│   │   ├── Footer.tsx        # Footer with socials
│   │   ├── Section.tsx       # Reusable animated section wrapper
│   │   ├── theme-provider.tsx
│   │   └── sections/
│   │       ├── Hero.tsx
│   │       ├── About.tsx
│   │       ├── Experience.tsx
│   │       ├── Projects.tsx   # Filter: All / AI / Business
│   │       ├── Skills.tsx
│   │       └── Contact.tsx
│   └── config/
│       └── portfolio.ts      # ✏️ ALL CONTENT LIVES HERE
└── public/
    └── resume.pdf            # Add your resume PDF here
```

---

## ✏️ How to Edit Content

**All content (name, bio, projects, experience, skills, links) is in one file:**

```
src/config/portfolio.ts
```

Open that file and update any section. No coding knowledge needed — just change the text values.

### Adding a New Project

Find the `projects` array in `portfolio.ts` and add a new object:

```ts
{
  title: "My New Project",
  description: "What it does and why it matters.",
  tech: ["Tool A", "Tool B"],
  category: "AI",  // or "Business"
  links: {
    github: "https://github.com/your-repo",
    demo: "https://your-demo.com"
  }
}
```

---

## 🏃 Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/jash-portfolio.git
cd jash-portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open browser at http://localhost:3000
```

---

## 📄 Add Your Resume

Place your resume PDF in the `public/` folder named `resume.pdf`:

```
public/
└── resume.pdf
```

The "Download Resume" button will automatically serve it.

---

## 🌙 Dark / Light Mode

The site defaults to **dark mode**. Users can toggle using the button in the top-right corner. Preferences are saved automatically.

---

## 🚢 Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import this repository
4. Click **Deploy** — zero configuration needed
5. Auto-redeploys on every `git push`

---

## 📬 Contact

**Jash Navin Thakkar**  
📧 jash.spain@gmail.com  
💼 [LinkedIn](https://www.linkedin.com/in/jash-thakkar-325852330)
