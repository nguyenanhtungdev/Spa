// Nạp file header.html và footer.html vào trang
document.getElementById("header").innerHTML = fetch('header.html') //Tải nguyên file 
    .then(response => response.text())//để lấy dữ liệu dưới dạng chuỗi (thường dùng khi bạn tải về file HTML, text, hoặc bất kỳ nội dung nào ở định dạng text).
    .then(data => {
        document.getElementById("header").innerHTML = data;//cho phép bạn đọc hoặc ghi nội dung HTML bên trong một phần tử
    });
document.getElementById("footer").innerHTML = fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById("footer").innerHTML = data;
    });

//Menu
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('header-ul');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
});
