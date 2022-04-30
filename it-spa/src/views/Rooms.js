import "./../it-spa.scss";

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

  // pobieramy pokoje z json-server
  fetch("http://localhost:3000/rooms")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const roomList = data.map((room) => {
        const rum = document.createElement("div");
        rum.innerHTML = `
        <div class= "room">
        <img src="${room.image}" alt="Room image" width="400" height="280">
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
        <div class ="area-box">
        <img src ="https://static.thenounproject.com/png/2931144-200.png" alt="Area icon" width="24" height="24" class = "area-img">
        <div>${room.area} ㎡ </div>
        </div>
        </div>`;
        return rum;
      });
      rooms.querySelector(".loading").remove();
      rooms.append(...roomList);
    });
  return rooms;
}
