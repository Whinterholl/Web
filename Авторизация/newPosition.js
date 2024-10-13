let logIn = document.getElementById("login");
let register = document.getElementById("register");
let button = document.getElementById("btn");
let container = document.getElementById("cont");

let registration = () => {
  logIn.style.left = "-420px";
  register.style.left = "70px";
  button.style.left = "100px";
  button.style.width = "200px";
  container.style.height = "420px"

  document.getElementById("login").reset();
}

let login = () => {
  logIn.style.left = "70px";
  register.style.left = "470px";
  button.style.left = "0";
  button.style.width = "110px";
  container.style.height = "400px"

  document.getElementById("register").reset();
}