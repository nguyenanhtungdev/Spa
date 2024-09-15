// Nạp file header.html và footer.html vào trang
document.getElementById("header").innerHTML = fetch('header.ejs') //Tải nguyên file 
    .then(response => response.text())//để lấy dữ liệu dưới dạng chuỗi (thường dùng khi bạn tải về file HTML, text, hoặc bất kỳ nội dung nào ở định dạng text).
    .then(data => {
        document.getElementById("header").innerHTML = data;//cho phép bạn đọc hoặc ghi nội dung HTML bên trong một phần tử

            // Sau khi header được nạp xong, thêm sự kiện cho nút menu-toggle
            // const menuToggle = document.getElementById('menu-toggle');
            // const menu = document.getElementById('header-ul');

            // if (menuToggle && menu) {
            //     console.log('Menu toggle and menu found');
            //     menuToggle.addEventListener('click', function() {
            //         menu.classList.toggle('active'); //được sử dụng để thêm hoặc xóa lớp CSS 'active' từ phần tử có ID là menu
            //     });
            // } else {
            //     console.error('Menu toggle or menu not found');
            // }

            //Xử lý sự kiện nút bấm menu khi thu nhỏ
            const burgerBtn = document.querySelector('.js-burger-btn');
            const headerUl = document.querySelector('#header-ul');

            burgerBtn.addEventListener('click', () => {
            burgerBtn.classList.toggle('active1');
            headerUl.classList.toggle('active');  // Thêm class active để hiện menu
});

            
    });
document.getElementById("footer").innerHTML = fetch('footer.ejs')
    .then(response => response.text())
    .then(data => {
        document.getElementById("footer").innerHTML = data;
    });

//Xử lý sự kiện thanh cuộn menu
window.addEventListener('scroll',()=>{
    const menu = document.getElementById('header-wrapper')
    if(window.scrollY > 50){
        menu.classList.add("scrolledd")
    }
    else{
        menu.classList.remove('scrolledd')
    }
})
