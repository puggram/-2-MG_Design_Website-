# MG Design & Co. website

Latest v6 website source, including all 28 projects, local image assets, optimized image variants, search, galleries, inquiry form, recognition section and scrolling process line.

## Run

Extract this ZIP and open index.html. For a local web server, run `python3 -m http.server 8000` inside the mg-design folder, then visit http://localhost:8000. No build or installation is required.

## Deploy

Upload the contents of mg-design to any static website host. Keep the assets directory structure intact. The _headers file supplies cache rules on compatible hosts. Google Fonts requires an internet connection.

## Inquiries

The form prepares a message for Telegram. The visitor reviews and sends it. It does not store leads on a server or automatically confirm appointments. Requested dates require confirmation by the studio.

## Edit

Edit index.html for content, style.css for styling, and the JavaScript files for interactions. Project data is in project-data.js with a readable projects.json copy. Image variants are mapped in image-data.js and image-manifest.json.

## Khmer / English

The EN | ខ្មែរ switch (top right) is handled by i18n.js. English copy lives in index.html; Khmer copy lives in i18n.js (the `KM` object for page text, `PROJECT`/`PLACE`/`LABEL` for project data). To translate a new piece of text, add `data-i18n="key"` to the element and a matching `key` in `KM`. The visitor's choice is remembered, and `?lang=km` opens the site in Khmer. Khmer uses the Kantumruy Pro font from Google Fonts.

## Social

TikTok video cards use images cropped from a screenshot of the @designwithmg profile (assets/social). Each card links to the profile; swap in individual video URLs in index.html when available.
