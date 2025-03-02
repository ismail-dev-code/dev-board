const todayDate = document.getElementById("date-today");
const currentDate = new Date();
todayDate.innerText = currentDate.toDateString();

const buttons = document.querySelectorAll(".btn-primary");
const cardTitle = document.querySelectorAll(".card-title");
const historyLog = document.getElementById("history");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    const taskAssigned = document.getElementById("task-assign");
    const taskComplete = document.getElementById("task-complete");

    if (parseInt(taskAssigned.innerText) <= 0) {
      alert("No tasks remaining!");
    } else {
      alert("Board Updated Successfully!");
      if (parseInt(taskAssigned.innerText) <= 1) {
        alert("Congrats!! you have successfully completed the current task");
      }
      taskAssigned.innerText = parseInt(taskAssigned.innerText) - 1;
      taskComplete.innerText = parseInt(taskComplete.innerText) + 1;

      buttons[i].disabled = true;
      buttons[i].classList.add(
        "bg-gray-400",
        "font-medium",
        "text-white",
        "rounded-xl",
        "py-1.5",
        "px-4",
        "text-[16px]",
        "cursor-not-allowed"
      );
      buttons[i].classList.remove("btn-primary");
    }

    const newElement = document.createElement("div");

    newElement.innerHTML = `
    <div class="bg-slate-100 p-3 mb-7 rounded-xl"> 
        <p> You have completed the task ${
          cardTitle[i].innerText
        } at ${format12HourTime()} </p>
    </div>
`;

    function format12HourTime() {
      const nowTime = new Date();
      let hours = nowTime.getHours();
      let minutes = nowTime.getMinutes();
      let seconds = nowTime.getSeconds();
      const amPm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12 || 12;
      return `${hours}:${minutes}:${seconds} ${amPm}`;
    }

    historyLog.appendChild(newElement);
  });
}

document.getElementById("clear-btn").addEventListener("click", function () {
  historyLog.innerText = "";
});

const bodyId = document.getElementById("body");

const colors = [
  "bg-green-500",
  "bg-yellow-500",
  "bg-yellow-500",
  "bg-slate-100",
  "bg-purple-500",
  "bg-pink-500",
  "bg-orange-500",
  "bg-teal-500",
  "bg-cyan-500",
  "bg-indigo-500",
  "bg-lime-500",
  "bg-violet-500",
  "bg-teal-200",
  "bg-cyan-200",
];
let currentIndex = 0;
document.getElementById("theme").addEventListener("click", function () {
  bodyId.classList.remove(...colors);
  currentIndex = (currentIndex + 1) % colors.length;

  bodyId.classList.add(colors[currentIndex]);
});
