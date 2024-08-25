var theme = "light";
var button = document.querySelector(".theme");
var body = document.querySelector("body");

function changeTheme() {
  if (theme == "light") {
    body.setAttribute("class", "dark");
    theme = "dark";
  } else {
    body.setAttribute("class", "light");
    theme = "light";
  }
}
button.onclick = changeTheme;
