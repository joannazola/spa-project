import { ButtonRemove } from "../common/ButtonRmv";

export function Cart() {
  const cart = document.createElement("section");

  cart.innerHTML = `
  <div class="menu-component__container menu-component__container__very-small">
  <div class="menu-component__border menu-component__border__very-small">
  <div class="menu-component__text menu-component__text__very-small">Rezerwacje</div>
  <div class="menu-component__description menu-component__description__very-small" >Tutaj znajdziesz wszystkie swoje rezerwacje</div>
  <div></div>
  </div>
  </div>`;

  const cartHotel = document.createElement("div");
  cartHotel.innerHTML = `
  <div class = "cart-hotel"> Rezerwacje - Hotel </div>`;
  const cartSpa = document.createElement("div");
  cartSpa.innerHTML = `
  <div class = "cart-hotel">Rezerwacje - SPA</div>`;

  const hotelCartSPA = JSON.parse(localStorage.getItem("SPA_CART"));

  if (localStorage.getItem("HOTEL_CART") !== null) {
    const hotelCart = JSON.parse(localStorage.getItem("HOTEL_CART"));
    const hotelCartObejct = hotelCart.flat(2);
    const cartList = hotelCartObejct.map(function (data) {
      const cart = document.createElement("div");
      cart.innerHTML = `
      <div class = "order-container">
        <div class = "value-and-descritpion"> 
          <div class = "cart-object">
            <div class = "description">
              Nazwa:
            </div>
            <div class = "value">   
               ${data.room.name}
            </div>        
          </div>
          <div class = "cart-object">
            <div class = "description">
              Cena/dzień:
            </div>
            <div class = "value">   
              ${data.room.price.toFixed(2)} PLN
            </div>        
          </div>
          <div class = "cart-object">
          <div class = "description">
            Data przyjazdu:
          </div>
          <div class = "value">   
            ${data.arrival.arrival}
          </div>        
        </div>
        <div class = "cart-object">
        <div class = "description">
          Data wyjazdu:
        </div>
        <div class = "value">   
          ${data.departure.departure}
        </div>        
      </div>
      <div class = "cart-object">
      <div class = "description">
        Liczba dni:
      </div>
      <div class = "value">   
        ${data.daysNumber.days}
      </div>        
    </div>
    <div class = "cart-object">
    <div class = "description">
      Cena/całość:
    </div>
    <div class = "value">   
      ${(data.room.price * data.daysNumber.days).toFixed(2)} PLN
    </div>        
  </div>
        </div> 
      </div>
      `;
      return cart;
    });
    cart.append(cartHotel);
    cart.append(...cartList);
  }
  if (localStorage.getItem("SPA_CART") !== null) {
    const cartListSPA = hotelCartSPA.map(function (data) {
      const cartSPA = document.createElement("div");
      cartSPA.innerHTML = `
    <div class = "order-container">
      <div class = "value-and-descritpion"> 
        <div class = "cart-object">
          <div class = "description">
            Nazwa:
          </div>
          <div class = "value">   
            ${data.treat.name}
          </div>        
        </div>
        <div class = "cart-object">
          <div class = "description">
            Czas zabiegu:
          </div>
          <div class = "value">   
            ${data.treat.time}
          </div>        
        </div>
        <div class = "cart-object">
        <div class = "description">
          Cena:
        </div>
        <div class = "value">   
          ${data.treat.price.toFixed(2)} PLN
        </div>        
      </div>
      </div> 
    </div>
    `;
      return cartSPA;
    });

    cart.append(cartSpa);
    cart.append(...cartListSPA);
  }

  const Button = ButtonRemove({
    text: "Wyczyść koszyk ze wszystkich rezerwacji",
    callback: () => {
      localStorage.removeItem("HOTEL_CART");
      localStorage.removeItem("SPA_CART");
      window.location.reload();
    },
  });

  cart.append(Button);

  return cart;
}
