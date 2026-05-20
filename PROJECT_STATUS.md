# FieldSpeak Project Status

Last updated: 2026-05-20

## Current App

FieldSpeak is a mobile-first PWA for English speaking practice during a Detroit automation equipment setup business trip.

Live app:

<https://enter2info-hong.github.io/Field-Speak/>

GitHub repository:

<https://github.com/enter2info-hong/Field-Speak>

## What Has Been Built

- Modern mobile app UI based on the approved "mission mode" design.
- PWA files:
  - `manifest.webmanifest`
  - `sw.js`
  - `icon.svg`
- Daily field mission flow with five missions:
  1. Sensor Check
  2. Wiring Check
  3. Handover Ready
  4. Ask Maintenance
  5. Detroit Daily
- Stacked expression cards with:
  - Korean meaning
  - Main English phrase
  - Alternate English phrase
  - Slow, normal, and local/native-like speed listening buttons
- 3-Step Clear:
  - Listen
  - Repeat
  - Roleplay
- AI Coach prompt panel.
- Bottom input dock:
  - Listen
  - Mic
  - Text input
- Review Queue and learning history.
- Local storage persistence for:
  - Completed daily missions
  - Review Queue
  - Study logs
  - Difficulty
  - Study duration
  - Dark mode
- Bottom tabs:
  - Home
  - Learning History
  - Settings
- Dark mode toggle.
- Emergency phrases.

## Deployment Status

GitHub Pages is configured through GitHub Actions.

Workflow file:

```text
.github/workflows/deploy-pages.yml
```

Latest confirmed status:

- GitHub Actions workflow: success
- Pages URL response: `200 OK`
- Live HTML contains the FieldSpeak app shell

Expected live URL:

```text
https://enter2info-hong.github.io/Field-Speak/
```

## Important Files

```text
index.html                 Main app shell
styles.css                 Mobile UI, dark mode, scroll layout, dock/tabs
app.js                     Curriculum, missions, local storage, speech, UI behavior
manifest.webmanifest       PWA manifest
sw.js                      Service worker cache
icon.svg                   PWA icon
server.js                  Local static server for testing
smoke-test.js              Static wiring smoke test
check-server.js            Local server response check
README.md                  User-facing project description
PROJECT_STATUS.md          This handoff/status document
.github/workflows/deploy-pages.yml
.nojekyll
```

## Local Run

From the project folder:

```bash
node server.js
```

Then open:

```text
http://127.0.0.1:4173/
```

The file URL also works for basic testing:

```text
file:///C:/pjt/CODEX22/COPY/index.html
```

Use the local server for PWA/service worker testing.

## Verification Commands

Run these before committing updates:

```bash
node --check app.js
node smoke-test.js
node --check server.js
node --check check-server.js
```

If the local server is running, verify server responses:

```bash
node check-server.js
```

Verify the deployed site:

```bash
curl -I https://enter2info-hong.github.io/Field-Speak/
```

Expected:

```text
HTTP/1.1 200 OK
```

## Git Workflow

Repository remote:

```bash
git remote -v
```

Expected origin:

```text
https://github.com/enter2info-hong/Field-Speak.git
```

Update workflow:

```bash
git status --short
node --check app.js
node smoke-test.js
git add .
git commit -m "Describe-update"
git push origin main
```

After pushing, GitHub Actions deploys the app to GitHub Pages.

## GitHub Pages Notes

Repository settings:

- Pages source: `GitHub Actions`
- Actions permission: `Allow all actions and reusable workflows`
- Enforce HTTPS: enabled by default for the GitHub Pages domain

If the site returns `404` after a push:

1. Check the repository `Actions` tab.
2. Confirm `Deploy FieldSpeak to GitHub Pages` completed successfully.
3. Wait 1-2 minutes for Pages cache propagation.
4. Re-check:

```bash
curl -I https://enter2info-hong.github.io/Field-Speak/
```

## Galaxy S25 Install Steps

On the Galaxy S25:

1. Open Chrome.
2. Go to:

   ```text
   https://enter2info-hong.github.io/Field-Speak/
   ```

3. Open the Chrome menu.
4. Tap `Install app` or `Add to Home screen`.
5. Launch FieldSpeak from the home screen.

## Current Limitations

- The "AI Coach" is currently rule-based/local, not connected to a real AI API.
- Speech output uses browser speech synthesis, not a premium neural voice.
- Speech input uses browser speech recognition where available.
- Data is stored locally in the browser with `localStorage`; it does not sync across devices.
- No backend account/login yet.

## Recommended Next Updates

1. Connect real AI feedback through an API endpoint.
2. Add higher-quality TTS voices.
3. Add structured pronunciation and fluency scoring.
4. Add more field missions:
   - PLC I/O check
   - Robot home position
   - Conveyor jam
   - Safety interlock
   - Customer handover meeting
5. Add spaced repetition scheduling for Review Queue.
6. Add export/import or cloud sync for study history.
7. Improve Android PWA install polish with PNG icons and splash screen assets.

## Quick Mental Model

The app is intentionally built around this learning loop:

```text
Mission -> Expression card -> Listen -> Repeat -> Roleplay -> Feedback -> Review Queue -> Mission complete
```

Keep future updates aligned with that loop. Avoid adding features that make the app feel like a generic study dashboard instead of a fast field-English speaking coach.
