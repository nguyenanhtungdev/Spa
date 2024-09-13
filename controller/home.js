// Nạp file header.html và footer.html vào trang
document.getElementById("header").innerHTML = fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById("header").innerHTML = data;
    });
document.getElementById("footer").innerHTML = fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById("footer").innerHTML = data;
    });