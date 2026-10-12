let tasks = [];

function addTask() {
  let name = document.getElementById("task").value;
  if (!name.trim()) return;
  tasks.push({ name, done: false });
  document.getElementById("task").value = "";
  showTasks();
}

function showTasks() {
  document.getElementById("list").innerHTML = tasks.map((t, i) =>
    `<li>${t.done ? "✓" : ""} ${t.name}
    <button onclick="tasks[${i}].done=!tasks[${i}].done;showTasks()">✓</button>
    <button onclick="tasks.splice(${i},1);showTasks()">X</button></li>`
  ).join("");

  document.getElementById("count").innerText =
    "Pending: " + tasks.filter(t => !t.done).length;
}

async function loadTasks() {
  let res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
  let data = await res.json();
  document.getElementById("sample").innerHTML =
    data.map(t => `<li>${t.title}</li>`).join("");
}












