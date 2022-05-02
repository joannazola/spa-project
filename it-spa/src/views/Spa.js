import { ButtonAdd } from "../common/ButtonAdd";
import { cartManagerSPA } from "../cart/Cart-manager";

export function Spa() {
  const spa = document.createElement("section");
  spa.innerHTML = `
  <div class="menu-component__container menu-component__container__small">
  <div class="menu-component__border menu-component__border__small">
  <div class="menu-component__text menu-component__text__small">Zabiegi SPA&Wellness</div>
  <div class="menu-component__description menu-component__description__small" >Przyjemność zmysłom podczas pobytu w Dream Connect zapewni nasza strefa Wellness&Spa. Pozwoli zrelaksować się i rozluźnić, uwalnia od stresu i natłoku myśli. Z dala od codziennych obowiązków można pokusić się o rozmaite zabiegi Spa, odpowiadające potrzebom zarówno ciała, jak i ducha. W subtelnie zaprojektowanych wnętrzach nasi Goście poczują się intymnie i swobodnie. Wykwalifikowany personel przeprowadzi natomiast zabiegi na twarz i ciało wykorzystując sprawdzony sprzęt kosmetyczny oraz profesjonalne preparaty.</div>
  <div class="loading" id="loading">Wczytywanie..</div>
  <div></div>
  </div>
  </div>`;

  fetch("http://localhost:3000/treatments")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const treatmentsList = data.map((treat) => {
        const tr = document.createElement("div");
        tr.innerHTML = `
        <div class= "room">
        <img src="${
          treat.image
        }" alt="Room image" width="400" height="280" class = "room-image">
        <div class="room-flex">
        <div class = "menu-component__description_M">${treat.name}</div>
        <div class ="area-box treatment-description">
        <div>${treat.description} </div>
        </div>
        <div class="people-number">
        <img src ="https://img.myloview.pl/fototapety/clock-icon-or-logo-isolated-sign-symbol-vector-illustration-high-quality-black-style-vector-icons-400-265263981.jpg" alt="Guests icon" width="24" height="24" class = "area-img">
        <div class="number ">${treat.time} min</div>
        </div>
        <div class ="price-box">
        <img src ="http://cdn.onlinewebfonts.com/svg/img_568452.png" alt="Price icon" width="24" height="24" class = "price-img">
        <div >${treat.price.toFixed(2)} PLN </div>
        </div>

        </div>`;

        const addToCartButton = ButtonAdd({
          text: "Zarezerwuj",
          callback: () => {
            console.log(treat);

            cartManagerSPA.addItem({ treat });
          },
        });
        tr.lastChild.append(addToCartButton);
        return tr;
      });
      spa.querySelector(".loading").remove();
      spa.append(...treatmentsList);
    });
  return spa;
}
