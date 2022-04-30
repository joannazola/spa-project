export function Hero() {
  const heroComponent = document.createElement("section");
  heroComponent.classList.add("hero", "hero-component");

  heroComponent.innerHTML = `
  <div class="hero-component__image">
  <div class="hero-component__container">
  <div class="hero-component__text">Dream Connect</div>
  <div class="hero-component__description" >Twoje miejsce na wypoczynek</div>
  </div>
  </div>
  `;
  return heroComponent;
}
