const goals = [
  {
    title: "Learn React",
    description: "Study Modern Frontend Development with React",
  },
  {
    title: "Learn React",
    description: "Study Modern Frontend Development with React",
  },
  {
    title: "Learn React",
    description: "Study Modern Frontend Development with React",
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

const Goal = ({
  id,
  title,
  description,
}) => `<div class="flex justify-between items-center flex-col gap-2 border border-solid">
              <p
                class="rounded-full p-2 border border-solid border-primary w+8 h+8 text-center"
              >
                ${id}
              </p>
              <h3>${title}</h3>
              <p>${description}</p>
            </div>`;

function InjectGoals(goals) {
  const goalsRef = document.getElementById("goals");
  goals.map((goal, id) => {
    goalsRef.innerHTML = goalsRef.innerHTML + Goal({ ...goal, id: id + 1 });
  });
}

InjectGoals(goals);
