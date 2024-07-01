const goals = [
  {
    title: "Master React",
    description: "Deep dive into advanced React patterns and hooks.",
  },
  {
    title: "Explore AWS",
    description:
      "Gain proficiency in deploying and managing cloud infrastructure with AWS.",
  },
  {
    title: "Contribute to Open Source",
    description:
      "Participate in and contribute to popular open source projects.",
  },
  {
    title: "Learn TypeScript",
    description:
      "Integrate TypeScript for better type safety in JavaScript projects.",
  },
  {
    title: "Build a Personal Portfolio",
    description:
      "Create a stunning and interactive portfolio website using modern web technologies.",
  },
  {
    title: "Enhance CSS Skills",
    description:
      "Master advanced CSS techniques including Flexbox, Grid, and animations.",
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
}) => `<div class="flex justify-center items-center flex-col gap-2 w-20 shadow-md p-2   rounded-md bg-tertiary">
              
              <h3 class="text-orange text-center">${title}</h3>
              <p class="text-center text-primary">${description}</p>
            </div>`;

function InjectGoals(goals) {
  const goalsRef = document.getElementById("goals");
  goals.map((goal, id) => {
    goalsRef.innerHTML = goalsRef.innerHTML + Goal({ ...goal, id: id + 1 });
  });
}

InjectGoals(goals);
