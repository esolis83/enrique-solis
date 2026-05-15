# Enrique Solis — Frontend Engineer Portfolio

### [enriquesolis.me](https://enriquesolis.me)

A personal portfolio site built with Next.js and React, showcasing frontend engineering skills, active projects, and contact information. Deployed automatically to Hostinger via GitHub Actions on every push to `main`.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 9.3.3 (static export) |
| UI | React 17 + styled-components 5 |
| Icons | react-icons 4 |
| Analytics | Google Analytics 4 + Microsoft Clarity |
| CI/CD | GitHub Actions → Hostinger FTP |

---

## Features

- **Responsive design** with mobile hamburger navigation
- **Active Projects** section — paginated (4 per page) with GA4 tracking
- **Skills section** — proficiency level revealed on hover (Expert / Advanced / Intermediate / Familiar)
- **Contact / Footer** — cycling skill phrase animation, copy-to-clipboard email, social links
- **Password-gated project modal** — site password revealed only inside the modal
- **GA4 event tracking** — nav clicks, resume downloads, social links, pagination, project links, copy-to-clipboard
- **Microsoft Clarity** session recording

---

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # static export → ./out/
```

---

## Deployment (GitHub Actions → Hostinger FTP)

The workflow in [.github/workflows/deploy.yml](.github/workflows/deploy.yml) runs on every push to `main`:

1. Installs dependencies (`npm ci`)
2. Builds the static site (`npm run build` → `./out/`)
3. Uploads `./out/` to Hostinger via FTP

### Required GitHub Repository Secrets

Add these in **Settings → Secrets and variables → Actions**:

| Secret | Where to find it |
|---|---|
| `FTP_SERVER` | Hostinger hPanel → Hosting → FTP Accounts |
| `FTP_USERNAME` | Hostinger hPanel → Hosting → FTP Accounts |
| `FTP_PASSWORD` | Hostinger hPanel → Hosting → FTP Accounts |
| `FTP_REMOTE_PATH` | e.g. `/public_html/` |

---

## Project Structure

```
src/
  components/
    Header/         # Desktop nav with hash links + GA4 tracking
    MobileMenu/     # Mobile hamburger nav
    Hero/           # Landing section
    Skills/         # 4-category skills grid with proficiency hover
    Projects/       # Projects grid
    ActiveProjects/ # Paginated active projects + external link modal
    Footer/         # Contact section + social links
  constants/
    activeProjectsData.js   # Project cards data
  pages/
    index.js
    explore-active-projects.js
  styles/
    globals.js
  utils/
    analytics.js    # SSR-safe GA4 trackEvent() wrapper
```

---

## Contact

- **Website:** [enriquesolis.me](https://enriquesolis.me)
- **LinkedIn:** [linkedin.com/in/enrique-solis](https://www.linkedin.com/in/enrique-solis)
- **GitHub:** [github.com/esolis83](https://github.com/esolis83)
- **Email:** e.solis824@gmail.com
