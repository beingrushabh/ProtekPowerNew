DirectAdmin Hosting Guide (Vite + React SPA)

1) Install dependencies & build locally
   - Install Node.js LTS (>= 18)
   - In your project folder, run:
       npm install
       npm run build
   - This creates a /dist folder. Inside it you should see:
       index.html
       /assets (JS/CSS chunks)

   If you don’t see index.html, replace your vite.config.js with the one in
   vite.config.js.example (note the `base: "./"` line), then rebuild.

2) Upload to server (DirectAdmin -> File Manager)
   - Navigate to the document root of your domain (usually public_html/).
   - Create a folder (optional) like public_html/protek/ and upload the CONTENTS
     of your local /dist there (index.html + assets folder).
   - Also upload the provided .htaccess into the same folder as index.html.

3) Set the correct domain/subfolder
   - If you uploaded to root (public_html/), your site is at: https://your-domain/
   - If you uploaded to a subfolder (public_html/protek/), it’s at:
       https://your-domain/protek/
   - Because we used base: "./", assets will load correctly from subfolders.

4) Routing (very important)
   - React Router needs the server to serve index.html for every route.
   - The provided .htaccess handles this: /about, /products, etc. all rewrite to index.html.

5) Common gotchas
   - Blank page with 404 on /assets: set base: "./" in vite.config.js and rebuild.
   - "Cannot GET /some/route": missing .htaccess rewrite; upload it.
   - Mixed content / HTTPS: ensure your domain has a valid SSL certificate.
   - Uploading the project source (src/app) won’t work; you must upload /dist build.

6) Rebuild after changes
   - Any time you change code locally, run `npm run build` again and re-upload /dist.
