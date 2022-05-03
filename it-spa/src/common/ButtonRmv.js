export function ButtonRemove(options) {
  const button = document.createElement("div");
  button.setAttribute("type", "button");
  button.classList.add("button-remove");
  button.innerText = options.text;
  button.addEventListener("click", options.callback);

  return button;
}
