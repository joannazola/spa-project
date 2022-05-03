export function ButtonLogin(options) {
  const button = document.createElement("div");
  button.setAttribute("type", "button");
  button.classList.add("button-login");
  button.innerText = options.text;
  button.addEventListener("click", options.callback);

  return button;
}
