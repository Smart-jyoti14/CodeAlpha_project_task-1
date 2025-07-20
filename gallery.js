let currentIndex = 0;
let galleryImages = [];

function openLightbox(src) {
  galleryImages = Array.from(document.querySelectorAll('.gallery-img'))
    .filter(img => img.style.display !== "none");

  currentIndex = galleryImages.findIndex(img => img.src === src);
  document.getElementById("lightbox-img").src = src;
  document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function prevImage(event) {
  event.stopPropagation();
  currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  document.getElementById("lightbox-img").src = galleryImages[currentIndex].src;
}

function nextImage(event) {
  event.stopPropagation();
  currentIndex = (currentIndex + 1) % galleryImages.length;
  document.getElementById("lightbox-img").src = galleryImages[currentIndex].src;
}

function filterGallery(category) {
  const images = document.querySelectorAll('.gallery-img');
  images.forEach(img => {
    if (category === 'all' || img.classList.contains(category)) {
      img.style.display = 'block';
    } else {
      img.style.display = 'none';
    }
  });
}


