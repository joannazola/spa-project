export function MainMenu() {
  const menuSection = document.createElement("section");
  menuSection.innerHTML = `
  <div class="menu-component__container">
  <div class="menu-component__border">
  <div class="menu-component__text">Hotel w samym sercu natury</div>
  <div class="menu-component__description" >Oddalony od zgiełku miast, kilka kilometrów od pięknych plaż, nad jeziorem i w otoczeniu lasu czeka na Dream Connect, miejsce idealne na odpoczynek z rodziną i przyjaciółmi oraz spotkania firmowe. Oczarują Cię wyjątkowe obiekty wybudowane na wyspach, bliskość natury, 120 ha terenu ze ścieżkami rowerowymi, spacerowymi i wiele innych atrakcji. Do dyspozycji naszych gości  przeznaczone są  tarasy hotelowe z ogródkiem piwnym i stylowa restauracja z międzynarodową kuchnią, zapewniająca intymny nastrój i profesjonalną obsługę.</div>
  </div>
  </div>
    `;

  return menuSection;
}
