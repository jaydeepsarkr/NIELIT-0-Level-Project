document.addEventListener("DOMContentLoaded", function () {
  const imageGallery = document.getElementById("imageGallery");

  // Replace 'image1.jpg' and 'image2.jpg' with your actual image URLs
  const imageUrls = ["image1.jpg", "image2.jpg"];

  imageUrls.forEach((url) => {
    const img = document.createElement("img");
    img.src = url;
    imageGallery.appendChild(img);
  });
});
