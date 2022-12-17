import * as Notifications from "expo-notifications";

async function createNotification(
  habitInput,
  frequencyInput,
  dayNotification,
  timeNotification
) {
  const habitHour = Number(timeNotification.slice(0, 2));
  const habitMinutes = Number(timeNotification.slice(3, 5));
  let weekDay;
  if (dayNotification === "Domingo") {
    weekDay = 1;
  } else if (dayNotification === "Segunda") {
    weekDay = 2;
  } else if (dayNotification === "Terça") {
    weekDay = 3;
  } else if (dayNotification === "Quarta") {
    weekDay = 4;
  } else if (dayNotification === "Quinta") {
    weekDay = 5;
  } else if (dayNotification === "Sexta") {
    weekDay = 6;
  } else if (dayNotification === "Sábado") {
    weekDay = 7;
  }
}

let triggerNotiofication;

if (frequency === "Diário") {
  triggerNotiofication = {
    hour: habitHour,
    minute: habitMinutes,
    repeats: true,
  };
} else if (frequency === "Semanal") {
  triggerNotification = {
    hour: habitHour,
    minute: habitMinutes,
    repeats: true,
    weekday: weekDay,
  };
}

await Notification.scheduleNotificationAsync({
  content: {
    title: "Lembrete de hábito",
    body: triggerNotiofication,
  },
  identifier: `$habitInput`,
  trigger: triggerNotification,
}).then((id) => {
  console.log(id);
});

export default { createNotification };
