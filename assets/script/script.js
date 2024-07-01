const goals = [
  {
    title: "",
    icon: "",
    description: "",
  },
];

// JavaScript to dynamically update current time and day
function updateTime() {
  const now = new Date();
  let hours = now.getUTCHours();
  const minutes = now.getUTCMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  const strTime =
    hours +
    ":" +
    (minutes < 10 ? "0" + minutes : minutes) +
    " " +
    ampm +
    " UTC";

  const utcTimeElement = document.querySelector(
    '[data-testid="currentTimeUTC"]'
  );
  utcTimeElement.innerText = strTime;

  const day = now.toLocaleDateString("en-US", { weekday: "long" });
  const currentDayElement = document.querySelector(
    '[data-testid="currentDay"]'
  );
  currentDayElement.innerText = day;
}

// Update time every second
setInterval(updateTime, 1000);
updateTime();
