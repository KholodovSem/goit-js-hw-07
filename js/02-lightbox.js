import { galleryItems } from "./gallery-items.js";
// Change code below this line

// Переменные
const galleryRef = document.querySelector(".gallery");
const galleryItemsMarkup = itemsMarkup(galleryItems);

// Рендеринг разметки
galleryRef.insertAdjacentHTML("afterbegin", galleryItemsMarkup);

// Функции колл-бэки
function itemsMarkup(object) {
  return object
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join("");
}

const modalWindow = new SimpleLightbox(".gallery a", {
  captionType: "attr",
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: "250",
});
console.log(modalWindow);
