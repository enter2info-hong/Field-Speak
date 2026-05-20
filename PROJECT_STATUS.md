# FieldSpeak Project Status

Last updated: 2026-05-20 (post Gemini AI Coach integration)

## Current App

FieldSpeak is a mobile-first PWA for English speaking practice during a Detroit automation equipment setup business trip.

Live app:

<https://enter2info-hong.github.io/Field-Speak/>

GitHub repository:

<https://github.com/enter2info-hong/Field-Speak>

## What Has Been Built

- Modern mobile app UI based on the approved "mission mode" design.
- PWA files:
  - `manifest.webmanifest` (4 icon entries: PNG 192/512/maskable + SVG fallback)
  - `sw.js` (cache `fieldspeak-v2`)
  - `icon.svg`, `icon-192.png`, `icon-512.png`, `icon-maskable-512.png`, `apple-touch-icon.png`
  - `build-icons.js` (one-time PNG generation using `sharp`)
- Daily field mission flow with ten missions:
  1. Sensor Check
  2. Wiring Check
  3. Handover Ready
  4. Ask Maintenance
  5. Detroit Daily
  6. PLC I/O Check
  7. Robot Home Position
  8. Conveyor Jam
  9. Safety Interlock
  10. Customer Handover Meeting
- Stacked expression cards with:
  - Korean meaning
  - Main English phrase
  - Alternate English phrase
  - Slow, normal, and local/native-like speed listening buttons
- 3-Step Clear:
  - Listen
  - Repeat
  - Roleplay
- AI Coach feedback panel:
  - Rule-based local feedback by default
  - Optional Gemini-powered feedback (`gemini-2.5-flash`) via Settings toggle + user-provided API key
  - Loading state, automatic fallback to rule-based on error
- Bottom input dock:
  - Listen
  - Mic
  - Text input
- Review Queue with **Leitner-style spaced repetition** (5 boxes: 1, 3, 7, 14, 30 day intervals):
  - "오늘 복습할 문장" surfaces due items
  - "알았어요" / "다시" buttons promote/reset box
  - Auto-migration of pre-existing review items
- Local storage persistence for:
  - Completed daily missions (per date)
  - Review Queue (with box + dueDate)
  - Study logs
  - Difficulty (level)
  - Study duration
  - Dark mode
  - AI Coach toggle + Gemini API key (`fieldspeak-ai-key`)
  - Streak count
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
- Live HTML contains the FieldSpeak app shell, AI settings UI, and 4 PNG icons
- Latest commit: `Add-Gemini-AI-Coach-feedback-with-settings-toggle`

Expected live URL:

```text
https://enter2info-hong.github.io/Field-Speak/
```

## Important Files

```text
index.html                       Main app shell (incl. AI settings UI)
styles.css                       Mobile UI, dark mode, scroll layout, dock/tabs, review/AI styles
app.js                           Curriculum, missions, local storage, speech, AI Coach, Spaced Repetition
manifest.webmanifest             PWA manifest with PNG icon entries
sw.js                            Service worker cache (fieldspeak-v2)
icon.svg                         PWA icon (vector fallback)
icon-192.png                     PWA icon 192x192
icon-512.png                     PWA icon 512x512
icon-maskable-512.png            PWA maskable icon (80% safe zone)
apple-touch-icon.png             iOS home screen icon 180x180
build-icons.js                   Build script: SVG → PNG (run once after icon.svg changes)
package.json / package-lock.json sharp devDependency for build-icons.js
server.js                        Local static server for testing
smoke-test.js                    Static wiring smoke test
check-server.js                  Local server response check
README.md                        User-facing project description
PROJECT_STATUS.md                This handoff/status document
.gitignore                       Excludes node_modules/, .claude/
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

## Build Steps (icon regeneration only)

```bash
npm install            # one-time, installs sharp devDependency
node build-icons.js    # regenerates 4 PNG files from icon.svg
```

Commit the generated PNG files after regenerating.

## Verification Commands

Run these before committing updates:

```bash
node --check app.js
node --check server.js
node --check check-server.js
node --check smoke-test.js
node --check build-icons.js
node smoke-test.js
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

To enable AI Coach (optional):

1. Visit <https://ai.google.dev/> and create a free API key.
2. In the FieldSpeak app: Settings → paste key into "Gemini API 키" → toggle "AI Coach 사용 (Gemini)" ON.
3. Submit any answer → feedback will be generated by `gemini-2.5-flash`.

## Current Limitations

- Speech output uses browser speech synthesis (Cloud TTS not yet integrated).
- Speech input uses browser speech recognition where available.
- AI Coach uses user-provided Gemini key (data sent to Google for evaluation).
- Pronunciation scoring is not yet structured (no audio analysis).
- Data is stored locally in the browser with `localStorage`; it does not sync across devices.
- No backend account/login yet.

## Recommended Next Updates

1. Export/Import learning history (JSON backup/restore) — offline safety net.
2. Premium TTS via Google Cloud Text-to-Speech (reuse Gemini key with API enabled).
3. Structured pronunciation/fluency scoring (extend Gemini response with numeric scores, or integrate Azure Pronunciation Assessment).
4. Cloud sync for review queue and study logs (e.g. Firebase, Supabase).
5. Additional shop-floor scenarios (vision sensor, gripper change, cycle time deviation).

## Quick Mental Model

The app is intentionally built around this learning loop:

```text
Mission -> Expression card -> Listen -> Repeat -> Roleplay -> Feedback (rule-based or Gemini)
        -> Save to Review Queue -> Spaced Repetition surfaces it later -> Mission complete
```

Keep future updates aligned with that loop. Avoid adding features that make the app feel like a generic study dashboard instead of a fast field-English speaking coach.
