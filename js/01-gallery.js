import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const makeGalleryItem = ({ preview, original, description }) =>
  `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
const markup = galleryItems.map((element) => makeGalleryItem(element)).join("");

gallery.insertAdjacentHTML("afterbegin", markup);

gallery.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }
  console.log(event.target);
  const largeImageUrl = event.target.dataset.source;

  basicLightbox
    .create(
      `
    <img src="${largeImageUrl}" width="800" height="600">`
    )
    .show();
});
