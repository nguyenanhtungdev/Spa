// Nạp file header.html và footer.html vào trang
document.getElementById("header").innerHTML = fetch('header.html') //Tải nguyên file 
    .then(response => response.text())//để lấy dữ liệu dưới dạng chuỗi (thường dùng khi bạn tải về file HTML, text, hoặc bất kỳ nội dung nào ở định dạng text).
    .then(data => {
        document.getElementById("header").innerHTML = data;//cho phép bạn đọc hoặc ghi nội dung HTML bên trong một phần tử

            // Sau khi header được nạp xong, thêm sự kiện cho nút menu-toggle
            const menuToggle = document.getElementById('menu-toggle');
            const menu = document.getElementById('header-ul');

            if (menuToggle && menu) {
                console.log('Menu toggle and menu found');
                menuToggle.addEventListener('click', function() {
                    menu.classList.toggle('active'); //được sử dụng để thêm hoặc xóa lớp CSS 'active' từ phần tử có ID là menu
                });
            } else {
                console.error('Menu toggle or menu not found');
            }
            
    });
document.getElementById("footer").innerHTML = fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById("footer").innerHTML = data;
    });

