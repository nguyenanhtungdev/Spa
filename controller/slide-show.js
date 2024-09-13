let slideIndex = 1;

autoSlide()
showSlides(); // Gọi hàm để khởi động slideshow

// Điều khiển chuyển slide
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Hiển thị slide hiện tại
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  
  if (n > slides.length) {slideIndex = 1} // Quay lại slide đầu tiên
  if (n < 1) {slideIndex = slides.length} // Quay lại slide cuối cùng
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // Ẩn tất cả các slide
  }
  
  slides[slideIndex - 1].style.display = "block"; // Hiển thị slide hiện tại
}

// Hàm để tự động chuyển đổi slide
function autoSlide() {
  slideIndex++;
  let slides = document.getElementsByClassName("mySlides");
  
  if (slideIndex > slides.length) {slideIndex = 1} // Quay lại slide đầu tiên
  if (slideIndex < 1) {slideIndex = slides.length} // Quay lại slide cuối cùng
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // Ẩn tất cả các slide
  }
  
  slides[slideIndex - 1].style.display = "block"; // Hiển thị slide hiện tại
  setTimeout(autoSlide, 3000); // Thay đổi slide mỗi 5 giây
}
