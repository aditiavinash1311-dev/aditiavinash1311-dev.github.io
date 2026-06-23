export function initNatGeoCarousel() {
  const carousel = document.querySelector(".carousel");
  const leftBtn = document.querySelector(".nav.left");
  const rightBtn = document.querySelector(".nav.right");

  if (!carousel || !leftBtn || !rightBtn) return () => {};

  let cards = Array.from(carousel.querySelectorAll(".card"));

  const applyClasses = () => {
    const positions = ["left2", "left1", "active", "right1", "right2"];

    cards.forEach((card) => {
      card.classList.remove("left2", "left1", "active", "right1", "right2");
    });

    cards.forEach((card, index) => {
      if (positions[index]) {
        card.classList.add(positions[index]);
      }
    });
  };

  const nextSlide = () => {
    cards.push(cards.shift());
    applyClasses();
  };

  const prevSlide = () => {
    cards.unshift(cards.pop());
    applyClasses();
  };

  rightBtn.addEventListener("click", nextSlide);
  leftBtn.addEventListener("click", prevSlide);

  applyClasses();

  return () => {
    rightBtn.removeEventListener("click", nextSlide);
    leftBtn.removeEventListener("click", prevSlide);
  };
}