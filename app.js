const express = require('express'); 
const app = express();
const port = 3000; 
const path = require('path')

// Cấu hình để phục vụ file tĩnh từ thư mục "public"
app.use(express.static(path.join(__dirname, 'public')));//Cấu hình trong thư mục punlic chứa các file image và css
// Require user route
const homeRoute = require('./router/home_router');
const contactRouter = require('./router/contact_router')
const introduce = require('./router/introduce')

app.set('views', './view');
app.set('view engine', 'ejs');

// Xử lý dữ liệu JSON và form POST
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Sử dụng homeRoute khi truy cập vào /home
app.use('/home', homeRoute);
app.use('/contact',contactRouter)
app.use('/introduce',introduce)

app.listen(port, function() {
    console.log('Your app running on port ' + port);
});
