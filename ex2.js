function swapPictures() {
  var img = document.getElementById("pandaPicture");
  console.log(img.src);
  console.log(img.alt);

  if (img.src.match("panda.jpg")) {
    img.src = "pandacon.jpg";
    img.alt = "Image of a baby panda";
  }
  else {
    img.src = "panda.jpg";
    img.alt = "Image of a panda";
  }

}
