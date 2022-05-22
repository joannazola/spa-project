import "./../it-spa.scss";
import { ButtonAdd } from "../common/ButtonAdd";
import { cartManager } from "../cart/Cart-manager";

export function Rooms() {
  const rooms = document.createElement("section");
  rooms.innerHTML = `
  <div class="menu-component__container menu-component__container__small">
  <div class="menu-component__border menu-component__border__small">
  <div class="menu-component__text menu-component__text__small">Pokoje</div>
  <div class="menu-component__description menu-component__description__small" >Hotel&SPA Dream Connect oferuje 120 pokoi różnych typów, od podstawowej kategorii standard, przez komfort, superior z widokiem na morze, suity idealne dla rodzin z dziećmi, aż po 6 luksusowych apartamentów, z których każdy posiada bezpośredni lub częściowy widok na morze.
  W obiekcie funkcjonują trzy windy hotelowe przystosowane dla osób niepełnosprawnych, oraz wydzielona winda dla personelu i serwisu hotelowego.</div>
  <div class="loading" id="loading">Wczytywanie..</div>
  <div></div>
  </div>
  </div>

  `;

  fetch("http://localhost:3000/rooms")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const roomList = data.map((room) => {
        const rum = document.createElement("div");
        rum.innerHTML = `
        <div class= "room">
        <img src="${
          room.image
        }" alt="Room image" width="400" height="280" class = "room-image">
        <div class="room-flex">
        <div class = "menu-component__description_M">${room.name}</div>
        <div class="people-number">
        <img src ="https://cdn-icons-png.flaticon.com/512/4312/4312464.png" alt="Guests icon" width="48" height="48">
        <div class="number ">${room.guests}</div>
        </div>
        <div class ="price-box">
        <img src ="http://cdn.onlinewebfonts.com/svg/img_568452.png" alt="Price icon" width="24" height="24" class = "price-img">
        <div >${room.price.toFixed(2)} PLN </div>
        </div>
        <div class ="area-box area">
        <img src ="https://static.thenounproject.com/png/2931144-200.png" alt="Area icon" width="24" height="24" class = "area-img">
        <div>${room.area} ㎡ </div>
        </div>
        <div class = "arrival-date">
        <input type="date" name="StartDate" id="userdatea" onchange="TDate()" required />
        <div>Data przyjazdu</div>
        </div>
        <div class = "departure-date">
        <input type="date" name="EndtDate" id="userdated" onchange="TDate()" required />
        <div>Data wyjazdu</div>
        </div>
        </div>
        `;

        const ToDate = new Date();
        const addToCartButton = ButtonAdd({
          text: "Zarezerwuj",
          callback: () => {
            console.log(
              room,
              "jjjk",
              document.getElementById("userdatea").value,
              document.getElementById("userdated").value
            );
            if (
              new Date(document.getElementById("userdatea").value).getTime() <=
                ToDate.getTime() ||
              new Date(document.getElementById("userdated").value).getTime() <=
                new Date(
                  document.getElementById("userdatea").value
                ).getTime() ||
              new Date(document.getElementById("userdated").value).getTime() <=
                ToDate.getTime()
            ) {
              alert(
                "Niepoprawna wartość. Data przyjazdu nie może być wcześniejsza niż dzisiejsza! Data wyjazdu nie może być wcześniejsza niż data przyjazdu!"
              );
            }
            // else if (
            //   !document.getElementById("userdatea").value ||
            //   !document.getElementById("userdated").value
            // ) {
            //   alert(
            //     "Pola dotyczące daty przyjazdu oraz wyjazdu nie mogą pozostać puste!"
            //   );
            // }
            else if (
              new Date(document.getElementById("userdatea").value).getTime() >
              ToDate.getTime()
            ) {
              const numberOfDays =
                (new Date(
                  document.getElementById("userdated").value
                ).getTime() -
                  new Date(
                    document.getElementById("userdatea").value
                  ).getTime()) /
                (1000 * 3600 * 24);
              console.log(numberOfDays / (1000 * 3600 * 24));
              const arrival = {
                arrival: document.getElementById("userdatea").value,
              };
              const departure = {
                departure: document.getElementById("userdated").value,
              };
              const daysNumber = {
                days: numberOfDays,
              };

              cartManager.addItem({ room, arrival, departure, daysNumber });
            }
          },
        });
        rum.lastChild.append(addToCartButton);
        return rum;
      });

      rooms.querySelector(".loading").remove();
      rooms.append(...roomList);
    });
  return rooms;
}
