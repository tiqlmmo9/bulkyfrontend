var imgProduct = [
  "facemask2.jpg",
  "facemask3.jpg",
  "facemask4.jpg",
  "facemask5.jpg",
  "home1.jpg",
  "home2.jpg",
  "home3.jpg",
  "home4.jpg",
  "home5.jpg",
  "home6.jpg"
];

imgProduct.forEach(function insertProduct(prod) {
  // debugger;
  document.querySelector(".product-detail__item").innerHTML +=
    '<div class="product-detail__thumb"><img src="img/' +
    prod +
    '" alt=""></div>';
});

document
  .querySelector(".product-detail__thumb")
  .classList.add("selected-product");
myimage.src = document.querySelector(".selected-product img").src;
for (const listImage of document.querySelectorAll(".product-detail__thumb")) {
  listImage.addEventListener("click", function() {
    if (!this.classList.contains("selected-product")) {
      this.parentNode
        .querySelector(".selected-product")
        .classList.remove("selected-product");
      this.classList.add("selected-product");

      myimage.src = document.querySelector(".selected-product img").src;
    }
  });
}

imgProduct.forEach(function changeSlide(sli) {
  // console.log(images = sli);
  var index = 0;
  // console.log(arr[index].imageProduct.length);
  document
    .querySelector(".product-detail__swipe-btn--left")
    .addEventListener("click", function() {
      // debugger;
      if (index <= 0) index = imgProduct.length;
      index--;
      // console.log(i);
      setThumb(index);
      // return setImg();
    });
  document
    .querySelector(".product-detail__swipe-btn--right")
    .addEventListener("click", function() {
      if (index >= imgProduct.length-1) index = -1;
      index++;
      setThumb(index);
      // return setImg();
    });
  // function setImg() {
  //   return myimage.setAttribute("src", sli);
  // }
  function setThumb(index) {
    document
      .querySelector(".product-detail__item")
      .querySelector(".selected-product")
      .classList.remove("selected-product");
    document
      .querySelectorAll(".product-detail__thumb")
      [index].classList.add("selected-product");
    myimage.src = document.querySelector(".selected-product img").src;
  }
});


