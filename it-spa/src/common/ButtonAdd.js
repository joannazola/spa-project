export function ButtonAdd(options) {
  const button = document.createElement("button");
  button.setAttribute("type", "button");
  button.classList.add("button-add");
  button.innerText = options.text;
  button.addEventListener("click", options.callback);

  return button;
}
