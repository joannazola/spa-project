import "bootstrap/dist/css/bootstrap.css";
import "./it-spa.scss";

import { Hero } from "./views/Hero";
import { MainMenu } from "./views/MainMenu";
import { Navigation } from "./navigation/Navigation";

const main = document.querySelector("main");

main.before(Hero());
main.before(Navigation());
main.append(MainMenu());

document.body.addEventListener("navigate", (event) => {
  const component = event.detail;

  main.innerHTML = "";
  main.append(component());
});
