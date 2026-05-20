# FieldSpeak

FieldSpeak is a mobile-first English speaking study app for an automation equipment setup engineer on a business trip in Detroit.

The first prototype runs as a static web app with no install step:

- Open `index.html` in a browser.
- Choose a study duration: 30 or 60 minutes.
- Choose a level: beginner, intermediate, advanced.
- Work through five daily field missions.
- Practice an answer, get feedback, and save useful corrections to the review loop.
- Listen to coach prompts, today's expressions, and corrected sentences at slow, normal, or local/native-like speed.

## Learning Goal

The app is designed around one practical goal:

> Speak enough English to handle simple real-world conversations with local engineers, operators, hotel staff, restaurant staff, and ride share drivers during a Detroit business trip.

## Study Modes

### 30-minute quick session

- 5 min: three useful expressions
- 10 min: repeat and retry
- 10 min: AI roleplay
- 5 min: save weak sentences for review

### 60-minute focused session

- 10 min: key expressions and vocabulary
- 15 min: sentence pattern drills
- 20 min: roleplay
- 10 min: grammar and pronunciation feedback
- 5 min: generate next-day review cards

## Difficulty Design

Difficulty is controlled by sentence length, freedom, and explanation depth.

- Beginner: one short sentence, direct request, hints available
- Intermediate: two or three sentences with reason and request
- Advanced: situation summary, likely cause, next action, and alternative proposal

## Today's Expressions

Each study track has a phrase bank. The app shows three expressions for the selected track and level.

- The same day favors repetition so the learner can memorize practical phrases.
- The "표현 바꾸기" button rotates to another set when the learner wants more variety.
- Each expression includes alternate English wording, because the same Korean meaning can be said naturally in more than one way.
- Listening buttons use the browser's speech synthesis: slow, normal, and local/native-like speed.

## Tracks

- Automation Setup
- Troubleshooting
- Factory Communication
- Daily Life in Detroit
- Business Small Talk

## Daily Field Missions

The home screen is organized around five daily missions:

1. Sensor Check
2. Wiring Check
3. Handover Ready
4. Ask Maintenance
5. Detroit Daily

Each mission connects to a roleplay prompt, a stacked expression deck, listening speeds, speech/input controls, confidence feedback, and the review queue.

## Final UI Direction

The current prototype follows the approved mission-mode design:

- Compact top progress area with today's minutes, mission count, remaining time, and streak.
- Stacked expression cards with alternate wording and listening speeds.
- Adult-friendly habit elements: Confidence, Review Queue, 3-Step Clear.
- Compact bottom input dock for listening, speaking, and text input.
- Bottom navigation tabs: Home, Learning History, Settings.
- Dark mode toggle.

## Next Engineering Steps

1. Add real AI feedback with an LLM endpoint.
2. Replace the local scoring function with structured JSON feedback.
3. Add speech-to-text fallback for browsers without Web Speech API.
4. Add text-to-speech for coach prompts and target sentences.
5. Persist sessions in a real database.
6. Add a spaced repetition scheduler for saved corrections.
7. Package as a mobile app with React Native or Capacitor.

## Suggested AI Feedback Shape

```json
{
  "score": 72,
  "level": "beginner",
  "can_understand": true,
  "main_issue": "word order",
  "natural_sentence": "The sensor is not detecting the part.",
  "short_feedback_ko": "의미는 전달되지만 주어와 동사를 분명히 말하면 더 자연스럽습니다.",
  "retry_instruction": "천천히 한 번, 실제 속도로 한 번 더 말하세요.",
  "next_question": "Do you think it is a wiring issue or an alignment issue?"
}
```

## Example System Prompt

```text
You are an English speaking coach for a Korean automation equipment setup engineer working in Detroit.
Focus on practical factory, troubleshooting, business travel, and daily life communication.
Keep feedback short and actionable.
Correct only the top 1-3 issues.
Always provide one natural sentence the learner can repeat immediately.
Adjust difficulty based on the selected level: beginner, intermediate, or advanced.
Do not over-explain grammar unless the learner asks.
Return structured JSON only.
```
