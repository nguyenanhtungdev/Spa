const {addData,findAllData} = require('../model/crud')

module.exports = {
    page_contact: (req,res)=>{
        res.render('html/contact')
    },
    post_create: (req, res) => {
        // Loại bỏ trường 'done' khỏi kiểm tra
        const { done, ...dataa } = req.body;
        // Kiểm tra nếu có ít nhất một thuộc tính của data có giá trị không rỗng
        const check = Object.values(dataa).some(value => value.trim() !== '')

        if (check) {  // Kiểm tra nếu req.body có ít nhất một thuộc tính
           addData(req.body)
            console.log(req.body)
            res.redirect('/contact'); 
        } else {
            res.status(400).send('No data submitted'); 
        }
    },
    message: (req,res) =>{
        const mess = req.query.message || '';
        res.render('html/contact', { mess }); // Render view contact.ejs với thông báo
    } 
}