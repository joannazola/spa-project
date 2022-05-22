import { MainMenu } from "../views/MainMenu";
import { Rooms } from "../views/Rooms";
import { Spa } from "../views/Spa";
import { Cart } from "../cart/Cart";
import { Button } from "../common/Button";
import { Login } from "../views/Login";
import { Registration } from "../views/Registration";

const navigateTo = (component) => {
  const navigateEvent = new CustomEvent("navigate", {
    detail: component,
  });

  document.body.dispatchEvent(navigateEvent);
};

const navItems = [
  { text: "Strona główna", component: MainMenu },
  { text: "Pokoje", component: Rooms },
  { text: "SPA&Wellness", component: Spa },
  { text: "Rezerwacje", component: Cart },
  { text: "Logowanie", component: Login },
  { text: "Rejestracja", component: Registration },
];

export function Navigation() {
  const nav = document.createElement("nav");
  nav.classList.add("navigation-component");

  const buttons = navItems.map((navItem) => {
    return Button({
      text: navItem.text,
      callback: () => {
        navigateTo(navItem.component);
      },
    });
  });

  nav.append(...buttons);

  return nav;
}
