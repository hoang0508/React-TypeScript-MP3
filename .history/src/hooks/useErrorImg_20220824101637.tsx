export default function onErrorImg(e: any) {
  e.target.src = "/img-error.png";
  e.target.style.objectFit = "contain";
  //e.target.style.transform = "scale(0.5)";
}
