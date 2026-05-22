# Arjun Pai Portfolio

## Deploying to Netlify

This project uses **Vite + TanStack Start**.

### Netlify build settings

- **Build command:** `npm run build`
- **Publish directory:** `dist/client`

### Step-by-step setup

1. Connect this repository to Netlify.
2. In **Site configuration → Build & deploy → Build settings**, set:
   - Build command: `npm run build`
   - Publish directory: `dist/client`
3. Deploy the site.

### SPA routing support (`_redirects`)

This repo includes `public/_redirects` so the built output contains SPA fallback routing:

```txt
/*    /index.html   200
```

### Troubleshooting 404 / "Page not found"

- Confirm Netlify is using **`dist/client`** (not `dist` or repository root) as publish directory.
- Confirm build command is **`npm run build`**.
- Redeploy after changing build settings.
- If deep links (like `/about`) fail with 404, verify `_redirects` is present in deployed files.
