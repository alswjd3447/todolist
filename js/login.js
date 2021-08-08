const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#loginForm input");
const greeting = document.getElementById("greeting");
const todoForm = document.getElementById("toDoForm");

function login(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem("username", username);
  greeting.innerText = `${username}'s Todo List`;
  loginForm.classList.add("hidden");
  greeting.classList.remove("hidden");
  todoForm.classList.remove("hidden");
}

const checkUsername = localStorage.getItem("username");
if (checkUsername === null) {
  todoForm.classList.add("hidden");
  loginForm.addEventListener("submit", login);
} else {
  greeting.innerText = `${checkUsername}'s Todo List`;
  loginForm.classList.add("hidden");
  greeting.classList.remove("hidden");
  todoForm.classList.remove("hidden");
}
