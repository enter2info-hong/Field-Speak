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
    },
    {
      title: "Robot Home Position",
      ko: "사이클 시작 전 로봇이 홈 포지션에 없습니다. 원인을 확인하고 홈으로 복귀시키겠다고 말하세요.",
      prompt: "The robot did not start the cycle. What is going on?",
      targets: {
        beginner: "The robot is not at the home position. I will send it home.",
        intermediate: "The robot is not at the home position, so the cycle cannot start. I will move it home and try again.",
        advanced: "The robot is off the home position, which is blocking the cycle start. I will jog it home, clear the alarm, and re-run the start sequence."
      },
      hints: {
        beginner: "not at home position / send it home",
        intermediate: "cycle cannot start / move it home",
        advanced: "jog it home / clear the alarm / start sequence"
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
    },
    {
      title: "PLC I/O Check",
      ko: "PLC 입력 상태가 예상과 다릅니다. 어떤 입력을 확인하고 어떻게 모니터링할지 설명하세요.",
      prompt: "Can you check why the PLC is not stepping forward?",
      targets: {
        beginner: "I will check the PLC inputs. One signal is missing.",
        intermediate: "I will check the PLC input status. One of the sensor inputs is not coming in.",
        advanced: "I will monitor the PLC input table on the HMI. One sensor input is not transitioning, so the step condition is not met."
      },
      hints: {
        beginner: "check the PLC inputs / signal is missing",
        intermediate: "input status / not coming in",
        advanced: "monitor the input table / step condition"
      }
    },
    {
      title: "Conveyor Jam",
      ko: "컨베이어에 부품이 끼었습니다. 라인을 멈추고 안전하게 부품을 제거하겠다고 알리세요.",
      prompt: "The conveyor stopped again. What happened?",
      targets: {
        beginner: "A part is stuck on the conveyor. I need to stop the line and remove it.",
        intermediate: "A part is jammed on the conveyor. Please stop the line so I can remove it safely.",
        advanced: "There is a part jammed between the guides. I need to stop the line, lock it out, and clear the jam before we restart."
      },
      hints: {
        beginner: "part is stuck / stop the line",
        intermediate: "jammed on the conveyor / remove it safely",
        advanced: "lock it out / clear the jam before restart"
      }
    },
    {
      title: "Safety Interlock",
      ko: "안전 도어 인터록이 풀리지 않아 사이클이 시작되지 않습니다. 도어와 리셋 절차를 설명하세요.",
      prompt: "Why won't the machine start? The start button does nothing.",
      targets: {
        beginner: "The safety door is open. Please close it and press reset.",
        intermediate: "The safety interlock is not engaged. Please close the door fully and press the reset button.",
        advanced: "The safety interlock circuit is open, so the start command is blocked. We need to close the door, confirm the interlock, then reset the safety relay before starting."
      },
      hints: {
        beginner: "safety door is open / press reset",
        intermediate: "interlock is not engaged / close the door fully",
        advanced: "interlock circuit is open / reset the safety relay"
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
    },
    {
      title: "Customer Handover Meeting",
      ko: "고객 인수인계 미팅에서 오늘 완료한 작업, 남은 항목, 다음 단계를 정리해 보고하세요.",
      prompt: "Could you walk us through what is ready for handover today?",
      targets: {
        beginner: "Today we finished the setup and the test cycle. One small item is left for tomorrow.",
        intermediate: "Today we completed the setup and a full test cycle. One adjustment is still open, and we plan to finish it tomorrow.",
        advanced: "Today we completed the mechanical setup, the I/O check, and a full test cycle. One minor sensor adjustment is still open, and we plan to close it tomorrow before final sign-off."
      },
      hints: {
        beginner: "finished the setup / left for tomorrow",
        intermediate: "completed the test cycle / still open / tomorrow",
        advanced: "mechanical setup / minor adjustment / final sign-off"
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
    },
    {
      ko: "로봇이 홈 포지션에 없습니다.",
      beginner: ["The robot is not at home.", "The robot is not in home position."],
      intermediate: ["The robot is not at the home position.", "The robot is off the home position right now."],
      advanced: ["The robot is off the home position, so the cycle start is blocked.", "Until the robot returns to home, the start sequence will not arm."]
    },
    {
      ko: "홈으로 보내고 다시 시작하겠습니다.",
      beginner: ["I will send it home and try again.", "Let me move it home first."],
      intermediate: ["I will jog the robot home and start the cycle again.", "Let me bring it back to home and re-run the sequence."],
      advanced: ["I will jog the robot back to home, clear the alarm, and re-run the start sequence.", "Once it is back at home, I will confirm the alarm is cleared before restarting."]
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
    },
    {
      ko: "PLC 입력 상태를 확인하겠습니다.",
      beginner: ["I will check the PLC inputs.", "Let me check the input signals."],
      intermediate: ["I will check the PLC input status on the HMI.", "Let me monitor the input signals during the cycle."],
      advanced: ["I will monitor the PLC input table to see which signal is not transitioning.", "Let me watch the input status live and find the missing step condition."]
    },
    {
      ko: "컨베이어에 부품이 끼었습니다.",
      beginner: ["A part is stuck on the conveyor.", "There is a jam on the conveyor."],
      intermediate: ["A part is jammed on the conveyor.", "Something is stuck between the guides."],
      advanced: ["A part is jammed between the guides on the conveyor.", "There is a jam that is blocking the next station."]
    },
    {
      ko: "라인을 멈추고 안전하게 제거하겠습니다.",
      beginner: ["Please stop the line. I will remove it.", "I need to stop the line to clear it."],
      intermediate: ["Please stop the line so I can remove it safely.", "Let me stop the line and clear the jam."],
      advanced: ["I need to stop the line, lock it out, and clear the jam before we restart.", "Once the line is stopped and locked out, I will safely remove the part."]
    },
    {
      ko: "안전 인터록이 풀리지 않았습니다.",
      beginner: ["The safety door is open.", "The interlock is not closed."],
      intermediate: ["The safety interlock is not engaged.", "The door is not fully closed, so the interlock is open."],
      advanced: ["The safety interlock circuit is open, so the start command is blocked.", "Until the interlock is engaged, the PLC will not arm the start sequence."]
    },
    {
      ko: "도어를 닫고 리셋하겠습니다.",
      beginner: ["Please close the door and press reset.", "Close the door, then reset."],
      intermediate: ["Please close the door fully and press the reset button.", "Close the door, confirm the interlock, then press reset."],
      advanced: ["We need to close the door, confirm the interlock light, and reset the safety relay before starting.", "Once the door is closed and the interlock light is on, I will reset the safety circuit."]
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
    },
    {
      ko: "오늘 완료한 작업을 보고드리겠습니다.",
      beginner: ["Today we finished the setup and the test.", "We completed the setup today."],
      intermediate: ["Today we completed the setup and a full test cycle.", "We finished the mechanical setup and the I/O check today."],
      advanced: ["Today we completed the mechanical setup, the I/O check, and a full test cycle.", "We closed out the setup, verified the I/O, and ran one full cycle without faults."]
    },
    {
      ko: "남은 항목과 다음 단계를 설명드리겠습니다.",
      beginner: ["One item is left for tomorrow.", "We will finish the rest tomorrow."],
      intermediate: ["One adjustment is still open, and we plan to finish it tomorrow.", "There is one open item, and we will close it tomorrow morning."],
      advanced: ["One minor sensor adjustment is still open, and we plan to close it tomorrow before final sign-off.", "We have one open item to address tomorrow, then we are ready for the final sign-off."]
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
  { id: "daily", label: "Detroit Daily", track: "daily", scenario: 0 },
  { id: "plc", label: "PLC I/O Check", track: "troubleshooting", scenario: 1 },
  { id: "robot", label: "Robot Home Position", track: "automation", scenario: 2 },
  { id: "conveyor", label: "Conveyor Jam", track: "troubleshooting", scenario: 2 },
  { id: "safety", label: "Safety Interlock", track: "troubleshooting", scenario: 3 },
  { id: "handover-meeting", label: "Customer Handover Meeting", track: "factory", scenario: 1 }
];

const state = {
  duration: 45,
  level: "beginner",
  missionIndex: 0,
  expressionIndex: 0,
  lastCorrection: "",
  deferredInstallPrompt: null,
  aiEnabled: false,
  aiKey: "",
  aiRequestId: 0,
  ttsEnabled: false,
  ttsVoice: "en-US-Neural2-D",
  ttsAudio: null
};

const GEMINI_MODEL = "gemini-2.5-flash";
const GEMINI_ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;
const CLOUD_TTS_ENDPOINT = "https://texttospeech.googleapis.com/v1/text:synthesize";

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
  const minutesPerMission = Math.max(1, Math.round(state.duration / dailyMissions.length));
  const remaining = Math.max(0, dailyMissions.length - activeCount) * minutesPerMission;
  $("#missionProgress").textContent = `${completed}/${dailyMissions.length}`;
  $("#remainingTime").textContent = `${remaining || minutesPerMission}분`;
  $("#progressFill").style.width = `${percent}%`;
  $("#reviewCount").textContent = getDueReviewItems().length;
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

function showFeedback(feedback) {
  state.lastCorrection = feedback.correction;
  $("#feedbackTitle").textContent = feedback.title;
  $("#feedbackBody").textContent = feedback.body;
  $("#correctionText").textContent = feedback.correction;
  const accuracy = clampScore(feedback.accuracy);
  const fluency = clampScore(feedback.fluency);
  const overall = clampScore(feedback.overall);
  const scoreContainer = $("#feedbackScores");
  if (scoreContainer) {
    if (accuracy === null && fluency === null && overall === null) {
      scoreContainer.classList.add("hidden");
      scoreContainer.innerHTML = "";
    } else {
      const chip = (label, value) => value === null
        ? ""
        : `<span class="score-chip"><strong>${value}</strong><small>${label}</small></span>`;
      scoreContainer.innerHTML = `${chip("종합", overall)}${chip("정확도", accuracy)}${chip("유창성", fluency)}`;
      scoreContainer.classList.remove("hidden");
    }
  }
  $("#feedbackPanel").classList.remove("hidden");
}

async function getAIFeedback(answer) {
  const scenario = currentScenario();
  const mission = activeMission();
  const target = scenario.targets[state.level];
  const prompt = `당신은 한국인 자동화 엔지니어의 영어 회화 코치입니다. 미국 Detroit 출장 현장에서 사용할 영어를 평가합니다.

상황(한국어): ${scenario.ko}
현장 카테고리: ${trackLabels[mission.track]}
미션: ${mission.label}
난이도: ${levelLabels[state.level]}
상대방 영어 프롬프트: ${scenario.prompt}
참고 목표 문장 (${state.level}): ${target}
사용자의 답변: ${answer || "(답변 없음)"}

다음 규칙을 지켜 한 줄짜리 순수 JSON으로만 응답하세요. 코드 블록, 설명, 마크다운 금지.
- title: 한국어 한 줄 평가 (40자 이내)
- body: 한국어 1~2문장. 잘한 점과 개선 포인트를 구체적으로
- correction: 사용자의 답변을 자연스럽게 다듬은 영어 문장. 답변이 비었으면 목표 문장을 그대로
- accuracy: 0~100 정수. 목표 의미를 얼마나 정확히 전달했는지
- fluency: 0~100 정수. 영어 문장이 얼마나 자연스러운지
- overall: 0~100 정수. 현장에서 통할 수준인지 종합

형식: {"title":"...","body":"...","correction":"...","accuracy":0,"fluency":0,"overall":0}`;

  const response = await fetch(`${GEMINI_ENDPOINT}?key=${encodeURIComponent(state.aiKey)}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        responseMimeType: "application/json",
        temperature: 0.4
      }
    })
  });

  if (!response.ok) {
    const errText = await response.text().catch(() => "");
    throw new Error(`Gemini ${response.status}: ${errText.slice(0, 160)}`);
  }

  const data = await response.json();
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
  let parsed;
  try {
    parsed = JSON.parse(text);
  } catch (err) {
    throw new Error("AI 응답이 JSON 형식이 아닙니다.");
  }
  if (!parsed.title || !parsed.body || !parsed.correction) {
    throw new Error("AI 응답에 필수 필드가 없습니다.");
  }
  const overall = clampScore(parsed.overall);
  if (overall !== null) $("#confidenceScore").textContent = `${overall}%`;
  return parsed;
}

function clampScore(value) {
  const n = Math.round(Number(value));
  if (!Number.isFinite(n)) return null;
  return Math.max(0, Math.min(100, n));
}

async function renderFeedback() {
  const answer = $("#userAnswer").value;
  if (state.aiEnabled && state.aiKey) {
    const requestId = ++state.aiRequestId;
    showFeedback({
      title: "AI 분석 중…",
      body: "Gemini가 답변을 평가하고 있습니다.",
      correction: state.lastCorrection || currentScenario().targets[state.level]
    });
    try {
      const ai = await getAIFeedback(answer);
      if (requestId !== state.aiRequestId) return;
      showFeedback(ai);
    } catch (err) {
      if (requestId !== state.aiRequestId) return;
      console.warn("AI feedback failed, falling back:", err);
      const fallback = getFeedback(answer);
      fallback.title = `AI 호출 실패 — ${fallback.title}`;
      showFeedback(fallback);
    }
    return;
  }
  showFeedback(getFeedback(answer));
}

function speakBrowser(text, rate) {
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

async function speakCloud(text, rate) {
  const response = await fetch(`${CLOUD_TTS_ENDPOINT}?key=${encodeURIComponent(state.aiKey)}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      input: { text },
      voice: { languageCode: "en-US", name: state.ttsVoice },
      audioConfig: { audioEncoding: "MP3", speakingRate: rate }
    })
  });
  if (!response.ok) {
    const errText = await response.text().catch(() => "");
    throw new Error(`Cloud TTS ${response.status}: ${errText.slice(0, 160)}`);
  }
  const data = await response.json();
  if (!data.audioContent) throw new Error("Cloud TTS 응답에 오디오가 없습니다.");
  if (state.ttsAudio) {
    try { state.ttsAudio.pause(); } catch (err) { /* noop */ }
  }
  const audio = new Audio(`data:audio/mp3;base64,${data.audioContent}`);
  state.ttsAudio = audio;
  await audio.play();
}

function speak(text, rate = 0.85) {
  if (state.ttsEnabled && state.aiKey) {
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    speakCloud(text, rate).catch((err) => {
      console.warn("Cloud TTS failed, falling back to browser TTS:", err);
      speakBrowser(text, rate);
    });
    return;
  }
  speakBrowser(text, rate);
}

const LEITNER_INTERVAL_DAYS = [1, 3, 7, 14, 30];
const MAX_BOX = LEITNER_INTERVAL_DAYS.length;

function getReviewItems() {
  return JSON.parse(localStorage.getItem("fieldspeak-review") || "[]");
}

function setReviewItems(items) {
  localStorage.setItem("fieldspeak-review", JSON.stringify(items));
}

function dateOffset(days) {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}

function migrateReviewItems() {
  const items = getReviewItems();
  let changed = false;
  for (const item of items) {
    if (typeof item.box !== "number") { item.box = 1; changed = true; }
    if (!item.dueDate) { item.dueDate = todayKey(); changed = true; }
    if (!("lastResult" in item)) { item.lastResult = null; changed = true; }
  }
  if (changed) setReviewItems(items);
}

function getDueReviewItems() {
  const today = todayKey();
  return getReviewItems()
    .map((item, index) => ({ ...item, _index: index }))
    .filter((item) => (item.dueDate || today) <= today)
    .sort((a, b) => (a.dueDate || "").localeCompare(b.dueDate || ""));
}

function markReviewResult(index, result) {
  const items = getReviewItems();
  if (!items[index]) return;
  const item = items[index];
  if (result === "known") {
    item.box = Math.min(MAX_BOX, (item.box || 1) + 1);
  } else {
    item.box = 1;
  }
  item.lastResult = result;
  item.dueDate = dateOffset(LEITNER_INTERVAL_DAYS[item.box - 1]);
  setReviewItems(items);
  renderReview();
}

function escapeHtml(text) {
  return String(text).replace(/[&<>"']/g, (ch) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[ch]);
}

function renderReview() {
  const items = getReviewItems();
  const due = getDueReviewItems();
  const logs = getStudyLogs();
  const dueMarkup = due.length
    ? due.map((item) => `
      <div class="review-item due-item">
        <strong>${escapeHtml(item.text)}</strong>
        <small>${escapeHtml(item.mission)} · ${escapeHtml(item.level)} · <span class="box-badge">Box ${item.box || 1}</span></small>
        <div class="review-actions">
          <button class="known" data-review-index="${item._index}" data-result="known" type="button">알았어요</button>
          <button class="again" data-review-index="${item._index}" data-result="again" type="button">다시</button>
        </div>
      </div>
    `).join("")
    : '<p class="empty-state">오늘 복습할 문장이 없습니다. 좋은 페이스를 유지하고 있어요.</p>';
  const upcomingMarkup = items.length
    ? items.map((item) => `
      <div class="review-item">
        <strong>${escapeHtml(item.text)}</strong>
        <small>${escapeHtml(item.mission)} · ${escapeHtml(item.level)} · <span class="box-badge">Box ${item.box || 1}</span> · 다음 ${escapeHtml(item.dueDate || todayKey())}</small>
      </div>
    `).join("")
    : '<p class="empty-state">아직 저장된 복습 문장이 없습니다. 피드백을 받은 뒤 Review Queue에 저장하면 다음 학습 때 다시 나옵니다.</p>';
  const logMarkup = logs.length
    ? logs.slice(0, 10).map((log) => `
      <div class="review-item">
        <strong>${escapeHtml(log.mission)} 완료</strong>
        <small>${escapeHtml(log.level)} · ${escapeHtml(log.date)}</small>
      </div>
    `).join("")
    : '<p class="empty-state">아직 완료한 미션이 없습니다. 홈에서 미션 완료를 눌러 기록을 쌓아보세요.</p>';
  $("#reviewList").innerHTML = `
    <h3 class="history-title">오늘 복습할 문장 ${due.length}개</h3>
    ${dueMarkup}
    <h3 class="history-title">완료한 미션</h3>
    ${logMarkup}
    <h3 class="history-title">복습 Queue 전체</h3>
    ${upcomingMarkup}
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
  state.aiEnabled = Boolean(saved.aiEnabled);
  state.aiKey = localStorage.getItem("fieldspeak-ai-key") || "";
  state.ttsEnabled = Boolean(saved.ttsEnabled);
  if (typeof saved.ttsVoice === "string" && saved.ttsVoice) state.ttsVoice = saved.ttsVoice;
  $("#level").value = state.level;
  $("#duration").value = String(state.duration);
  $("#aiEnabled").checked = state.aiEnabled;
  $("#aiKey").value = state.aiKey;
  $("#ttsEnabled").checked = state.ttsEnabled;
  $("#ttsVoice").value = state.ttsVoice;
  document.querySelector(".brand-row h1").textContent = `오늘 ${state.duration}분`;
}

function saveSettings() {
  localStorage.setItem("fieldspeak-settings", JSON.stringify({
    level: state.level,
    duration: state.duration,
    dark: document.body.classList.contains("dark"),
    aiEnabled: state.aiEnabled,
    ttsEnabled: state.ttsEnabled,
    ttsVoice: state.ttsVoice
  }));
}

const EXPORT_KEYS = [
  "fieldspeak-review",
  "fieldspeak-study-logs",
  "fieldspeak-streak",
  "fieldspeak-last-study",
  "fieldspeak-settings"
];

function setDataStatus(message, isError) {
  const el = $("#dataStatus");
  if (!el) return;
  el.textContent = message || "";
  el.style.color = isError ? "var(--danger)" : "var(--muted)";
}

function buildExportPayload() {
  const data = {};
  for (const key of EXPORT_KEYS) {
    const value = localStorage.getItem(key);
    if (value !== null) data[key] = value;
  }
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith("fieldspeak-completed-")) {
      data[key] = localStorage.getItem(key);
    }
  }
  return {
    app: "FieldSpeak",
    version: 1,
    exportedAt: new Date().toISOString(),
    data
  };
}

function exportLearningHistory() {
  const payload = buildExportPayload();
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  const stamp = todayKey();
  a.href = url;
  a.download = `fieldspeak-backup-${stamp}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  const total = Object.keys(payload.data).length;
  setDataStatus(`${total}개 항목을 ${a.download} 으로 저장했습니다.`);
}

function importLearningHistory(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(String(reader.result || ""));
      if (parsed.app !== "FieldSpeak" || !parsed.data || typeof parsed.data !== "object") {
        throw new Error("FieldSpeak 백업 파일이 아닙니다.");
      }
      let count = 0;
      for (const [key, value] of Object.entries(parsed.data)) {
        if (typeof value !== "string") continue;
        if (!key.startsWith("fieldspeak-")) continue;
        localStorage.setItem(key, value);
        count += 1;
      }
      loadSettings();
      migrateReviewItems();
      renderScenario();
      renderReview();
      setDataStatus(`${count}개 항목을 불러왔습니다.`);
    } catch (err) {
      setDataStatus(`불러오기 실패: ${err.message}`, true);
    }
  };
  reader.onerror = () => setDataStatus("파일을 읽을 수 없습니다.", true);
  reader.readAsText(file);
}

function saveAiKey() {
  if (state.aiKey) {
    localStorage.setItem("fieldspeak-ai-key", state.aiKey);
  } else {
    localStorage.removeItem("fieldspeak-ai-key");
  }
}

function saveForReview() {
  if (!state.lastCorrection) renderFeedback();
  const items = getReviewItems();
  items.unshift({
    text: state.lastCorrection,
    mission: activeMission().label,
    level: levelLabels[state.level],
    date: new Date().toLocaleDateString("ko-KR"),
    box: 1,
    dueDate: todayKey(),
    lastResult: null
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

$("#submitAnswer").addEventListener("click", () => { renderFeedback(); });

$("#aiEnabled").addEventListener("change", (event) => {
  state.aiEnabled = event.target.checked;
  saveSettings();
});

$("#ttsEnabled").addEventListener("change", (event) => {
  state.ttsEnabled = event.target.checked;
  saveSettings();
});

$("#ttsVoice").addEventListener("change", (event) => {
  state.ttsVoice = event.target.value;
  saveSettings();
});

$("#aiKey").addEventListener("change", (event) => {
  state.aiKey = event.target.value.trim();
  saveAiKey();
});

$("#exportData").addEventListener("click", exportLearningHistory);

$("#importData").addEventListener("click", () => $("#importFile").click());

$("#importFile").addEventListener("change", (event) => {
  const file = event.target.files && event.target.files[0];
  importLearningHistory(file);
  event.target.value = "";
});
$("#saveReview").addEventListener("click", saveForReview);
$("#micButton").addEventListener("click", startSpeechInput);
$("#clearReview").addEventListener("click", () => {
  setReviewItems([]);
  setStudyLogs([]);
  renderReview();
});

$("#reviewList").addEventListener("click", (event) => {
  const button = event.target.closest("[data-review-index]");
  if (!button) return;
  markReviewResult(Number(button.dataset.reviewIndex), button.dataset.result);
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
migrateReviewItems();
renderScenario();
renderReview();
