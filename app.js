const express = require('express'); 
const app = express();
const port = 3000; 
const path = require('path')

// Cấu hình để phục vụ file tĩnh từ thư mục "public"
app.use(express.static(path.join(__dirname, 'public')));
// Require user route
const homeRoute = require('./router/home');

app.set('views', './view');
app.set('view engine', 'ejs');

// Xử lý dữ liệu JSON và form POST
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Sử dụng homeRoute khi truy cập vào /home
app.use('/home', homeRoute);

app.listen(port, function() {
    console.log('Your app running on port ' + port);
});
