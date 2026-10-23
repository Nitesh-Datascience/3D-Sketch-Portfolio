# Nitesh Kumar — 3D Sketch Portfolio

An interactive, hand-drawn-style 3D portfolio built with HTML, CSS, JavaScript, and Three.js. The scene is generated in code, so no separate 3D model files are required.

## Project files

- `index.html` — page structure, fonts, and library loading.
- `style.css` — responsive overlay, modal, buttons, and sketch-paper UI.
- `script.js` — Three.js scene, sketch textures, doors, camera movement, raycasting, room content, and sound effect.
- `README.md` — setup and deployment guide.

## Features

- Animated front entrance and 3D hallway.
- Click/tap-able Gallery, Studio, Resume, and About doors.
- Room details shown in a modal with external links.
- Pointer drag to look around and pinch-to-zoom on touch screens.
- Responsive layout and a short sound effect button.
- Sketch-style materials created dynamically with canvas textures.

## Run locally

1. Download or clone this repository.
2. Open `index.html` in a modern browser, or use VS Code's **Live Server** extension.
3. Keep an internet connection available: Three.js, Tween.js, and Google Fonts are loaded from public CDNs.

## Deploy with GitHub Pages

1. Open this repository on GitHub.
2. Go to **Settings → Pages**.
3. In **Build and deployment**, select **Deploy from a branch**.
4. Select branch **main** and folder **/(root)**, then save.
5. Open the Pages URL displayed in the Pages settings after the deployment completes.

## Customize portfolio content

Open `script.js` and find the `door(...)` calls near the beginning of the file.

- Update the Gallery description and project list there. The project entries currently use placeholders where a real project URL has not been supplied.
- Update the Studio, Resume, and About descriptions and links in the corresponding `door(...)` calls.
- Replace the generic LinkedIn URL with your own profile URL before sharing the site publicly.

The project is a static front-end website and does not need a database, package installation, or build step.
