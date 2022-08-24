export default function onErrorImg(e: any) {
  e.target.src =
    "https://stc-id.nixcdn.com/v12/static/media/default_artist.0be095c8.png";
  e.target.style.objectFit = "contain";
  //e.target.style.transform = "scale(0.5)";
}
