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
      alt="${description}"
    />
  </a>
</li>`;
const markup = galleryItems.map((element) => makeGalleryItem(element)).join("");

gallery.insertAdjacentHTML("afterbegin", markup);

let galleryItem = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
