# META AIVI — Arrowmatics AI (static site)

Static marketing website for **meta-aivi.com** (Arrowmatics AI Sdn Bhd).  
Suitable for **GitHub Pages** free hosting. No backend, admin, or secrets.

## Files

- `index.html` — single-page marketing site
- `styles.css` — dark / tech industrial styles
- `CNAME` — custom domain (`meta-aivi.com`)
- `assets/` — optional static assets folder

## Preview locally

Open `index.html` in a browser, or from this folder:

```bash
# Python
python3 -m http.server 8080

# or Node
npx --yes serve .
```

Then visit `http://localhost:8080`.

## Deploy on GitHub Pages

1. Create a new GitHub repository (e.g. `meta-aivi-site` or `bensonlok.github.io` if using a user site).
2. Push this folder to the `main` branch:

   ```bash
   git init
   git add .
   git commit -m "Initial META AIVI static site"
   git branch -M main
   git remote add origin https://github.com/<your-user>/<your-repo>.git
   git push -u origin main
   ```

3. In the repo: **Settings → Pages**
   - Source: **Deploy from a branch**
   - Branch: **main** / **/** (root)
   - Save
4. Keep the `CNAME` file in the repo root (content: `meta-aivi.com`) so Pages binds the custom domain.

## DNS at Exabytes (custom domain)

Point **meta-aivi.com** to GitHub Pages:

### Apex (`meta-aivi.com`)

Create **A** records:

| Type | Host / Name | Value              |
|------|-------------|--------------------|
| A    | @           | 185.199.108.153    |
| A    | @           | 185.199.109.153    |
| A    | @           | 185.199.110.153    |
| A    | @           | 185.199.111.153    |

### www

| Type  | Host / Name | Value                 |
|-------|-------------|-----------------------|
| CNAME | www         | bensonlok.github.io   |

Notes:

- Replace `bensonlok.github.io` only if your Pages site lives under a different GitHub user/org.
- After DNS propagates, in GitHub Pages settings confirm the custom domain `meta-aivi.com` and enable **Enforce HTTPS** when available.
- Remove or update any old hosting A/CNAME records that conflict.

## Company (public)

- **Brand:** META AIVI / Arrowmatics AI Sdn Bhd (201801043774 / 1305806-W)
- **Contact:** No.64, Jalan Kapar 27/89, Megah Industrial Park, Taman Alam Megah, Section 27, 40400 Shah Alam, Selangor, Malaysia
- **Phone:** +60351910299 · **WhatsApp:** +60122112522 · **Email:** arrowmatics@gmail.com
