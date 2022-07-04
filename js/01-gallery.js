import { galleryItems } from "./gallery-items.js";
// Переменные
const galleryRef = document.querySelector(".gallery");
const galleryItemsMarkup = itemsMarkup(galleryItems);

// Рендеринг разметки
galleryRef.insertAdjacentHTML("afterbegin", galleryItemsMarkup);

// Слушатели событий
galleryRef.addEventListener("click", onClickTakeLargeImg);

galleryRef.addEventListener("click", openModalWindow);

// Функции колл-бэки
function itemsMarkup(object) {
  return object
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

let largeImgUrl = "";

function onClickTakeLargeImg(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  largeImgUrl = event.target.dataset.source;
  console.log(event.target.dataset.source);
}

let modalWindow = "";

function openModalWindow() {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  modalWindow = basicLightbox.create(`<img  src="${largeImgUrl}">`);
  modalWindow.show();
}

document.addEventListener("keydown", closeModalWindowOnKey);
function closeModalWindowOnKey(event) {
  if (event.code === "Escape") {
    modalWindow.close();
    modalWindow = "";
  }
  console.log(event.code);
}

document.addEventListener("keydown", removeEventKeyUp);
function removeEventKeyUp() {
  if (modalWindow === "") {
    document.removeEventListener("keydown", closeModalWindowOnKey);
  } else {
    document.addEventListener("keydown", closeModalWindowOnKey);
  }
}
