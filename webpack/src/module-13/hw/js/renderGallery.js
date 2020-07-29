// ================== Musyka Marian =================== //
import galleryItems from "../templates/template.hbs";

const gallery = document.querySelector(".gallery");

export default function (picsArr) {
  gallery.insertAdjacentHTML("beforeend", galleryItems(picsArr));
  console.log(galleryItems(picsArr));
}
// ================== Musyka Marian =================== //
