// Import module mysql
const mysql = require('mysql');

// Tạo kết nối đến cơ sở dữ liệu
const connection = mysql.createConnection({
    host: '127.0.0.1', // thay 'localhost' bằng địa chỉ host của MySQL server nếu cần
    user: 'root', // thay 'username' bằng tên người dùng của MySQL
    password: '', // thay 'password' bằng mật khẩu của người dùng MySQL
    database: 'webnh' // thay 'ten_database' bằng tên database bạn muốn kết nối
});

// Kết nối đến MySQL
connection.connect((err) => {
    if (err) {
        console.error('Lỗi kết nối:', err);
    } else {
        console.log('Kết nối thành công!');
        // Thực hiện các truy vấn SQL tại đây nếu cần
    }
});

// Đóng kết nối sau khi hoàn thành công việc
connection.end();
