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

      // Disable only the clicked button
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
        <p> You have Complete The Task ${
          cardTitle[i].innerText
        } at ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()} ${
      currentDate.getHours() >= 12 ? "PM" : "AM"
    } </p>
    </div>
    `;

    historyLog.appendChild(newElement);
  });
}

document.getElementById("clear-btn").addEventListener("click", function () {
  historyLog.innerText = "";
});


const bodyId = document.getElementById('body');

const colors = ["green-500", "tomato-300", "black-50", "yellow-500"];
document.getElementById("theme").addEventListener("click", function () {
    const randomIndex = Math.round(Math.random() *4);
  
    
    bodyId.classList.remove(...colors.map(color => `bg-${color}`));
  
   
    bodyId.classList.add(`bg-${colors[randomIndex]}`);
  }
);
