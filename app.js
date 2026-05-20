const curriculum = {
  automation: [
    {
      title: "Sensor Check",
      ko: "센서가 부품을 감지하지 못하는 상황입니다. 현장 담당자에게 상태를 설명하고 위치 조정을 요청하세요.",
      prompt: "What seems to be the problem with the station?",
      targets: {
        beginner: "The sensor is not detecting the part. Can we adjust the position?",
        intermediate: "The sensor is not detecting the part. I think the position is slightly off. Can we adjust the bracket?",
        advanced: "The sensor signal is intermittent, and the part position looks slightly off. I would like to adjust the bracket and run another test cycle."
      },
      hints: {
        beginner: "not detecting / adjust the position",
        intermediate: "position is slightly off / adjust the bracket",
        advanced: "intermittent signal / run another test cycle"
      }
    },
    {
      title: "Handover Ready",
      ko: "장비 인수인계 전 테스트 런을 한 번 더 진행해야 합니다. 고객에게 이유와 예상 시간을 말하세요.",
      prompt: "Are we ready to hand over the machine?",
      targets: {
        beginner: "We need one more test run. It will take about ten minutes.",
        intermediate: "We need one more test run before handover. It should take about ten minutes.",
        advanced: "Before we hand over the machine, I would like to run one more cycle to confirm that the sequence is stable."
      },
      hints: {
        beginner: "one more test run / ten minutes",
        intermediate: "before handover / should take",
        advanced: "confirm the sequence is stable"
      }
    }
  ],
  troubleshooting: [
    {
      title: "Wiring Check",
      ko: "I/O 신호가 불안정합니다. 배선과 센서를 확인해야 한다고 말하세요.",
      prompt: "Why did the machine stop during the cycle?",
      targets: {
        beginner: "The signal is unstable. I need to check the wiring.",
        intermediate: "The I/O signal is unstable. I need to check the wiring and the sensor.",
        advanced: "The I/O signal is unstable, so the machine stops during the cycle. I need to check the wiring, sensor alignment, and input status."
      },
      hints: {
        beginner: "signal is unstable / check the wiring",
        intermediate: "I/O signal / wiring and sensor",
        advanced: "input status / sensor alignment"
      }
    }
  ],
  factory: [
    {
      title: "Ask Maintenance",
      ko: "현장 유지보수 담당자를 찾아야 합니다. 정중하게 누구와 이야기해야 하는지 물어보세요.",
      prompt: "Hi, can I help you?",
      targets: {
        beginner: "Hi. I need the maintenance person. Who should I talk to?",
        intermediate: "Hi. I need to talk to the maintenance lead about this station. Who should I contact?",
        advanced: "Hi. I need to coordinate with the maintenance lead for this station. Could you point me to the right person?"
      },
      hints: {
        beginner: "maintenance person / who should I talk to",
        intermediate: "maintenance lead / who should I contact",
        advanced: "coordinate with / point me to"
      }
    }
  ],
  daily: [
    {
      title: "Detroit Daily",
      ko: "퇴근 후 식당이나 이동 상황에서 추천, 위치, 시간을 짧고 정확하게 물어보는 연습입니다.",
      prompt: "What can I get for you today?",
      targets: {
        beginner: "What do you recommend? Is it spicy?",
        intermediate: "What do you recommend here? I would like something not too spicy.",
        advanced: "Could you recommend something popular here? I prefer something flavorful but not too spicy."
      },
      hints: {
        beginner: "recommend / spicy",
        intermediate: "not too spicy",
        advanced: "popular here / flavorful"
      }
    }
  ],
  smalltalk: [
    {
      title: "Small Talk Starter",
      ko: "월요일 아침 공장에서 현지 직원과 가볍게 인사하고 주말 이야기를 나눕니다.",
      prompt: "How was your weekend?",
      targets: {
        beginner: "It was good. I rested at the hotel. How about you?",
        intermediate: "It was good. I rested at the hotel and walked around a little. How was yours?",
        advanced: "It was pretty relaxing. I stayed near the hotel, caught up on some rest, and explored the area a bit. How about yours?"
      },
      hints: {
        beginner: "It was good / How about you?",
        intermediate: "walked around a little",
        advanced: "caught up on some rest / explored the area"
      }
    }
  ]
};

const phraseBank = {
  automation: [
    {
      ko: "센서가 부품을 감지하지 못합니다.",
      beginner: ["The sensor is not detecting the part.", "The sensor cannot see the part."],
      intermediate: ["The sensor is not detecting the part correctly.", "The part is not being detected by the sensor."],
      advanced: ["The sensor signal is intermittent, so it is not consistently detecting the part.", "The detection point may be off, which is causing an intermittent sensor signal."]
    },
    {
      ko: "한 번 더 테스트해보겠습니다.",
      beginner: ["I will test it one more time.", "Let me try it again."],
      intermediate: ["I will run one more test cycle.", "Let me test it again after the adjustment."],
      advanced: ["I would like to run one more test cycle to confirm the sequence.", "After this adjustment, I will verify it with another full cycle."]
    },
    {
      ko: "인수인계 전에 확인이 필요합니다.",
      beginner: ["We need to check it before handover.", "I need to confirm it first."],
      intermediate: ["We need to confirm this before handover.", "I want to check the sequence before handover."],
      advanced: ["Before handover, I would like to verify that the sequence is stable and repeatable.", "We should confirm the full cycle before we hand over the equipment."]
    }
  ],
  troubleshooting: [
    {
      ko: "신호가 불안정합니다.",
      beginner: ["The signal is unstable.", "The signal is not stable."],
      intermediate: ["The I/O signal is unstable.", "The input signal is not stable during the cycle."],
      advanced: ["The I/O signal appears to be intermittent during the cycle.", "The input status is changing unexpectedly, so the machine stops."]
    },
    {
      ko: "배선을 확인해야 합니다.",
      beginner: ["I need to check the wiring.", "Let me check the cable."],
      intermediate: ["I need to check the wiring and the connector.", "Let me verify the cable connection first."],
      advanced: ["I would like to verify the cable connection, sensor power, and input status before restarting.", "The first step is to check the wiring and confirm whether the input is stable."]
    },
    {
      ko: "알람 원인을 먼저 확인하겠습니다.",
      beginner: ["I need to check the alarm first.", "Please wait. I will check the alarm."],
      intermediate: ["I need to check the cause of the alarm first.", "Please wait while I check the HMI alarm."],
      advanced: ["Before resetting the alarm, I would like to verify the root cause on the HMI.", "I do not want to reset it until we understand what triggered the alarm."]
    }
  ],
  factory: [
    {
      ko: "담당자를 찾고 있습니다.",
      beginner: ["I am looking for the maintenance person.", "Who should I talk to?"],
      intermediate: ["I am looking for the maintenance lead for this station.", "Who should I contact about this station?"],
      advanced: ["I need to coordinate with the maintenance lead responsible for this station.", "Could you point me to the right person for maintenance support?"]
    },
    {
      ko: "잠시 라인을 멈출 수 있을까요?",
      beginner: ["Can we stop the line for a moment?", "Please stop the line for a minute."],
      intermediate: ["Can we stop the line for a few minutes so I can check this?", "Could you pause the line while I inspect this station?"],
      advanced: ["Could we pause the line briefly so I can inspect the station without interrupting the sequence further?", "I need a short stop to check this safely and avoid another fault."]
    },
    {
      ko: "안전하게 확인하고 싶습니다.",
      beginner: ["I want to check it safely.", "Safety first. Let me check it."],
      intermediate: ["I want to check this safely before we restart.", "Let me inspect it safely before the next run."],
      advanced: ["I would like to inspect this safely before we restart the line.", "A short safety check now can prevent another issue during the next run."]
    }
  ],
  daily: [
    {
      ko: "추천 메뉴가 있나요?",
      beginner: ["What do you recommend?", "Is this popular?"],
      intermediate: ["What do you recommend here?", "I would like something not too spicy."],
      advanced: ["Could you recommend something popular here?", "I prefer something flavorful but not too spicy."]
    },
    {
      ko: "정문에서 기다리고 있습니다.",
      beginner: ["I am at the main entrance.", "I am waiting outside."],
      intermediate: ["I am waiting at the main entrance near the lobby.", "I am near the front doors."],
      advanced: ["I am standing by the main entrance near the lobby doors.", "Could you let me know when you are about two minutes away?"]
    },
    {
      ko: "영수증을 받을 수 있을까요?",
      beginner: ["Can I get a receipt?", "May I have a receipt?"],
      intermediate: ["Could I get a receipt, please?", "Can you email me the receipt?"],
      advanced: ["Could you print the receipt for my expense report?", "Would it be possible to email the receipt to me?"]
    }
  ],
  smalltalk: [
    {
      ko: "주말은 잘 보냈나요?",
      beginner: ["How was your weekend?", "Did you have a good weekend?"],
      intermediate: ["How was your weekend? Did you do anything fun?", "I hope you had a good weekend."],
      advanced: ["How was your weekend? Did you get a chance to relax?", "Hope you had a good weekend before another busy week."]
    },
    {
      ko: "저는 호텔에서 쉬었습니다.",
      beginner: ["I rested at the hotel.", "I stayed at the hotel."],
      intermediate: ["I rested at the hotel and walked around a little.", "I stayed near the hotel and got some rest."],
      advanced: ["I caught up on some rest near the hotel and explored the area a bit.", "It was pretty quiet, but I got some rest and walked around nearby."]
    },
    {
      ko: "오늘도 바쁜 하루가 될 것 같습니다.",
      beginner: ["It will be a busy day.", "Today looks busy."],
      intermediate: ["It looks like it will be a busy day.", "We have a lot to do today."],
      advanced: ["It looks like we have a packed schedule today.", "Seems like it will be another busy day on site."]
    }
  ]
};

const dailyMissions = [
  { id: "sensor", label: "Sensor Check", track: "automation", scenario: 0 },
  { id: "wiring", label: "Wiring Check", track: "troubleshooting", scenario: 0 },
  { id: "handover", label: "Handover Ready", track: "automation", scenario: 1 },
  { id: "maintenance", label: "Ask Maintenance", track: "factory", scenario: 0 },
  { id: "daily", label: "Detroit Daily", track: "daily", scenario: 0 }
];

const state = {
  duration: 45,
  level: "beginner",
  missionIndex: 0,
  expressionIndex: 0,
  lastCorrection: "",
  deferredInstallPrompt: null
};

const $ = (selector) => document.querySelector(selector);

const levelLabels = {
  beginner: "초급",
  intermediate: "중급",
  advanced: "고급"
};

const trackLabels = {
  automation: "Automation Setup",
  troubleshooting: "Troubleshooting",
  factory: "Factory Communication",
  daily: "Daily Life in Detroit",
  smalltalk: "Business Small Talk"
};

function activeMission() {
  return dailyMissions[state.missionIndex];
}

function currentScenario() {
  const mission = activeMission();
  return curriculum[mission.track][mission.scenario];
}

function currentExpressions() {
  const mission = activeMission();
  return phraseBank[mission.track];
}

function currentExpression() {
  const expressions = currentExpressions();
  return expressions[state.expressionIndex % expressions.length];
}

function renderMissionChips() {
  const completed = getCompletedMissions();
  $("#missionChips").innerHTML = dailyMissions.map((mission, index) => `
    <button class="mission-chip ${index === state.missionIndex ? "active" : ""} ${completed.includes(mission.id) ? "completed" : ""}" data-index="${index}" type="button">
      ${index + 1}. ${mission.label}
    </button>
  `).join("");
}

function renderProgress() {
  const completed = getCompletedMissions().length;
  const activeCount = Math.max(completed, state.missionIndex + 1);
  const percent = Math.round((completed / dailyMissions.length) * 100);
  const remaining = Math.max(0, dailyMissions.length - activeCount) * 6;
  $("#missionProgress").textContent = `${completed}/${dailyMissions.length}`;
  $("#remainingTime").textContent = `${remaining || 6}분`;
  $("#progressFill").style.width = `${percent}%`;
  $("#reviewCount").textContent = getReviewItems().length;
  $("#streakDays").textContent = localStorage.getItem("fieldspeak-streak") || "0";
  renderCompleteButton();
}

function renderScenario() {
  const mission = activeMission();
  const scenario = currentScenario();
  $("#sessionTitle").textContent = scenario.title;
  $("#activeTrackLabel").textContent = trackLabels[mission.track];
  $("#scenarioKorean").textContent = scenario.ko;
  $("#coachPrompt").textContent = scenario.prompt;
  $("#track").value = mission.track;
  $("#feedbackPanel").classList.add("hidden");
  renderMissionChips();
  renderExpression();
  renderProgress();
}

function renderExpression() {
  const expression = currentExpression();
  const variants = expression[state.level];
  $("#expressionCounter").textContent = `${(state.expressionIndex % currentExpressions().length) + 1} / ${currentExpressions().length}`;
  $("#expressionKo").textContent = expression.ko;
  $("#expressionMain").textContent = variants[0];
  $("#expressionAlt").textContent = `다른 표현: ${variants[1]}`;
}

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function getCompletedMissions() {
  const key = `fieldspeak-completed-${todayKey()}`;
  return JSON.parse(localStorage.getItem(key) || "[]");
}

function setCompletedMissions(items) {
  const key = `fieldspeak-completed-${todayKey()}`;
  localStorage.setItem(key, JSON.stringify([...new Set(items)]));
}

function renderCompleteButton() {
  const completed = getCompletedMissions();
  const isDone = completed.includes(activeMission().id);
  $("#completeMission").classList.toggle("done", isDone);
  $("#completeMission").textContent = isDone ? "완료됨 - 다음 미션으로" : "미션 완료";
}

function normalize(text) {
  return text.toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
}

function getFeedback(answer) {
  const scenario = currentScenario();
  const target = scenario.targets[state.level];
  const normalizedAnswer = normalize(answer);
  const targetWords = normalize(target).split(" ");
  const hitCount = targetWords.filter((word) => normalizedAnswer.includes(word)).length;
  const score = Math.round((hitCount / targetWords.length) * 100);

  $("#confidenceScore").textContent = `${Math.max(48, Math.min(96, score || 72))}%`;

  if (!answer.trim()) {
    return {
      title: "먼저 한 문장이라도 말해보세요.",
      body: `지금 단계에서는 완벽함보다 입 밖으로 꺼내는 것이 중요합니다. ${levelLabels[state.level]} 목표 문장을 따라 말해보세요.`,
      correction: target
    };
  }

  if (score > 72) {
    return {
      title: "좋아요. 현장에서 통할 문장입니다.",
      body: "핵심 의미가 잘 들어갔습니다. 다음 단계는 더 자연스럽게 이유나 다음 행동을 붙이는 것입니다.",
      correction: target
    };
  }

  if (score > 38) {
    return {
      title: "의미는 전달됩니다. 문장을 조금 더 정리해볼게요.",
      body: "현장 영어는 짧고 선명한 주어, 동사, 대상이 중요합니다. 아래 문장을 다시 말하면 더 자연스럽습니다.",
      correction: target
    };
  }

  return {
    title: "핵심 표현을 먼저 입에 붙이면 됩니다.",
    body: `이번 상황에서는 "${scenario.hints[state.level]}" 표현이 중요합니다. 천천히 한 번, 실제 속도로 한 번 더 말해보세요.`,
    correction: target
  };
}

function renderFeedback() {
  const feedback = getFeedback($("#userAnswer").value);
  state.lastCorrection = feedback.correction;
  $("#feedbackTitle").textContent = feedback.title;
  $("#feedbackBody").textContent = feedback.body;
  $("#correctionText").textContent = feedback.correction;
  $("#feedbackPanel").classList.remove("hidden");
}

function speak(text, rate = 0.85) {
  if (!("speechSynthesis" in window)) {
    alert("이 브라우저는 스피커 음성 재생을 지원하지 않습니다.");
    return;
  }

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = rate;
  utterance.pitch = 1;
  window.speechSynthesis.speak(utterance);
}

function getReviewItems() {
  return JSON.parse(localStorage.getItem("fieldspeak-review") || "[]");
}

function setReviewItems(items) {
  localStorage.setItem("fieldspeak-review", JSON.stringify(items));
}

function renderReview() {
  const items = getReviewItems();
  const logs = getStudyLogs();
  const reviewMarkup = items.length
    ? items.map((item) => `
      <div class="review-item">
        <strong>${item.text}</strong>
        <small>${item.mission} · ${item.level} · ${item.date}</small>
      </div>
    `).join("")
    : '<p class="empty-state">아직 저장된 복습 문장이 없습니다. 피드백을 받은 뒤 Review Queue에 저장하면 다음 학습 때 다시 나옵니다.</p>';
  const logMarkup = logs.length
    ? logs.slice(0, 10).map((log) => `
      <div class="review-item">
        <strong>${log.mission} 완료</strong>
        <small>${log.level} · ${log.date}</small>
      </div>
    `).join("")
    : '<p class="empty-state">아직 완료한 미션이 없습니다. 홈에서 미션 완료를 눌러 기록을 쌓아보세요.</p>';
  $("#reviewList").innerHTML = `
    <h3 class="history-title">완료한 미션</h3>
    ${logMarkup}
    <h3 class="history-title">복습 Queue</h3>
    ${reviewMarkup}
  `;
  renderProgress();
}

function getStudyLogs() {
  return JSON.parse(localStorage.getItem("fieldspeak-study-logs") || "[]");
}

function setStudyLogs(items) {
  localStorage.setItem("fieldspeak-study-logs", JSON.stringify(items));
}

function updateStreak() {
  const today = todayKey();
  const lastStudy = localStorage.getItem("fieldspeak-last-study");
  let streak = Number(localStorage.getItem("fieldspeak-streak") || "0");
  if (lastStudy !== today) {
    streak += 1;
    localStorage.setItem("fieldspeak-last-study", today);
    localStorage.setItem("fieldspeak-streak", String(streak));
  }
}

function completeMission() {
  const completed = getCompletedMissions();
  if (!completed.includes(activeMission().id)) {
    completed.push(activeMission().id);
    setCompletedMissions(completed);
    const logs = getStudyLogs();
    logs.unshift({
      mission: activeMission().label,
      level: levelLabels[state.level],
      date: new Date().toLocaleString("ko-KR", { dateStyle: "medium", timeStyle: "short" })
    });
    setStudyLogs(logs.slice(0, 50));
    updateStreak();
  }

  const nextOpenIndex = dailyMissions.findIndex((mission) => !getCompletedMissions().includes(mission.id));
  if (nextOpenIndex >= 0) {
    state.missionIndex = nextOpenIndex;
    state.expressionIndex = 0;
  }

  renderScenario();
  renderReview();
}

function loadSettings() {
  const saved = JSON.parse(localStorage.getItem("fieldspeak-settings") || "{}");
  if (saved.level && levelLabels[saved.level]) state.level = saved.level;
  if ([30, 45, 60].includes(Number(saved.duration))) state.duration = Number(saved.duration);
  if (saved.dark) document.body.classList.add("dark");
  $("#level").value = state.level;
  $("#duration").value = String(state.duration);
  document.querySelector(".brand-row h1").textContent = `오늘 ${state.duration}분`;
}

function saveSettings() {
  localStorage.setItem("fieldspeak-settings", JSON.stringify({
    level: state.level,
    duration: state.duration,
    dark: document.body.classList.contains("dark")
  }));
}

function saveForReview() {
  if (!state.lastCorrection) renderFeedback();
  const items = getReviewItems();
  items.unshift({
    text: state.lastCorrection,
    mission: activeMission().label,
    level: levelLabels[state.level],
    date: new Date().toLocaleDateString("ko-KR")
  });
  setReviewItems(items.slice(0, 30));
  updateStreak();
  renderReview();
}

function startSpeechInput() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    $("#answerArea").classList.remove("hidden");
    $("#userAnswer").placeholder = "이 브라우저는 음성 입력을 지원하지 않습니다. 직접 입력해 주세요.";
    $("#userAnswer").focus();
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
  $("#micButton").textContent = "●";
  recognition.onresult = (event) => {
    $("#answerArea").classList.remove("hidden");
    $("#userAnswer").value = event.results[0][0].transcript;
    renderFeedback();
  };
  recognition.start();
}

function showPage(pageId) {
  document.querySelectorAll(".page-section").forEach((page) => page.classList.remove("active"));
  document.querySelectorAll(".tab").forEach((tab) => tab.classList.toggle("active", tab.dataset.page === pageId));
  $(`#${pageId}`).classList.add("active");
  $("#feedbackPanel").classList.add("hidden");
}

$("#missionChips").addEventListener("click", (event) => {
  const chip = event.target.closest("[data-index]");
  if (!chip) return;
  state.missionIndex = Number(chip.dataset.index);
  state.expressionIndex = 0;
  renderScenario();
});

$("#nextMission").addEventListener("click", () => {
  state.missionIndex = (state.missionIndex + 1) % dailyMissions.length;
  state.expressionIndex = 0;
  renderScenario();
});

$("#nextExpression").addEventListener("click", () => {
  state.expressionIndex = (state.expressionIndex + 1) % currentExpressions().length;
  renderExpression();
});

let deckStartX = 0;
$("#expressionCard").addEventListener("pointerdown", (event) => {
  deckStartX = event.clientX;
});

$("#expressionCard").addEventListener("pointerup", (event) => {
  if (Math.abs(event.clientX - deckStartX) < 34) return;
  state.expressionIndex = (state.expressionIndex + 1) % currentExpressions().length;
  renderExpression();
});

$("#level").addEventListener("change", (event) => {
  state.level = event.target.value;
  renderExpression();
  saveSettings();
  $("#feedbackPanel").classList.add("hidden");
});

$("#duration").addEventListener("change", (event) => {
  state.duration = Number(event.target.value);
  document.querySelector(".brand-row h1").textContent = `오늘 ${state.duration}분`;
  saveSettings();
});

$("#track").addEventListener("change", (event) => {
  const missionIndex = dailyMissions.findIndex((mission) => mission.track === event.target.value);
  state.missionIndex = missionIndex >= 0 ? missionIndex : 0;
  state.expressionIndex = 0;
  renderScenario();
});

$("#themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  saveSettings();
});

$("#phraseSlow").addEventListener("click", () => speak($("#expressionMain").textContent, 0.65));
$("#phraseNormal").addEventListener("click", () => speak($("#expressionMain").textContent, 0.88));
$("#phraseFast").addEventListener("click", () => speak($("#expressionMain").textContent, 1.12));
$("#playPromptNormal").addEventListener("click", () => speak($("#coachPrompt").textContent, 0.88));
$("#stepListen").addEventListener("click", () => speak($("#expressionMain").textContent, 0.7));
$("#stepRepeat").addEventListener("click", () => speak($("#expressionMain").textContent, 0.88));
$("#stepRoleplay").addEventListener("click", () => speak($("#coachPrompt").textContent, 0.88));

$("#toggleInput").addEventListener("click", () => {
  $("#answerArea").classList.toggle("hidden");
  $("#userAnswer").focus();
});

$("#hintButton").addEventListener("click", () => {
  $("#userAnswer").value = currentScenario().hints[state.level];
  $("#userAnswer").focus();
});

$("#submitAnswer").addEventListener("click", renderFeedback);
$("#saveReview").addEventListener("click", saveForReview);
$("#micButton").addEventListener("click", startSpeechInput);
$("#clearReview").addEventListener("click", () => {
  setReviewItems([]);
  setStudyLogs([]);
  renderReview();
});

$("#completeMission").addEventListener("click", completeMission);

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  state.deferredInstallPrompt = event;
  $("#installApp").classList.remove("hidden");
});

$("#installApp").addEventListener("click", async () => {
  if (!state.deferredInstallPrompt) return;
  state.deferredInstallPrompt.prompt();
  await state.deferredInstallPrompt.userChoice;
  state.deferredInstallPrompt = null;
  $("#installApp").classList.add("hidden");
});

$("#emergencyList").addEventListener("click", (event) => {
  const button = event.target.closest("[data-text]");
  if (!button) return;
  speak(button.dataset.text, 0.82);
});

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => showPage(tab.dataset.page));
});

if ("serviceWorker" in navigator && location.protocol !== "file:") {
  navigator.serviceWorker.register("./sw.js").catch(() => {});
}

loadSettings();
renderScenario();
renderReview();
