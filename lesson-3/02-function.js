// Tính BMI
function tinhBMI(cannang, chieucao) {
    const BMI = cannang / (cannang * chieucao)
    if (BMI < 18.5) {
        console.log("BMI của bạn là thiếu cân");
    }
    else if (BMI < 25) {
        console.log("BMI của bạn là Bình thường");
    } else if (BMI < 30) {
        console.log("BMI của bạn là thừa cân");
    } else { console.log("BMI của bạn là béo phì"); }
}
tinhBMI(1.63, 52);



// Tính nhiệt độ
function chuyentuCsangF(nhietdoC) {
    const nhietdoF = (nhietdoC * 9 / 5) + 32;
    console.log('nhietdoF', nhietdoF);
}
chuyentuCsangF(35)

function chuyentuFsangC(nhietdoF) {
    const nhietdoC = (nhietdoF - 32) * 5 / 9;
    console.log('nhiet do C', nhietdoC);
}
chuyentuFsangC(95)

// tính tổng mảng
function tong(arr) {
    let tong = 0;
    for (let i = 0; i < arr.length; i++) {
        tong += arr[i];
    }
    {
        return (tong);
    }

}
let mangSo = [1, 2, 3, 4, 5, 6];
let ketqua = tong(mangSo);
console.log(ketqua)
//
// cập nhật email
let users = [
    { name: "Trinh", email: "tt@gmail.com" },
    { name: "Huy", email: "hhh@gmail.com" },
    { name: "Tien", email: "tien@gmail.com" }
];
function updateEmail(name, newEmail) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].name === name) {
            users[i].email = newEmail;
            break;
        }
    }
}
updateEmail("Huy", "truynh@gmail.com");

console.log(users);

// //khai báo student
// let student = [
//     { "name": "Trinh", score: "10" }
//     { "name": "Huy", score: "9" }
//     { "name": "Tien", score: "8" }
// 

//giỏ hàng
let gioHang = [
    { name: "Dien thoai", price: 100 },
    { name: "Gio Xach", price: 50 },
    { name: "product 5", price: 10 },
];
function sanpham(gioHang) {
    for (let i = 0; i < gioHang.length; i++) {
        if (gioHang[i].price <= 0) {
            return ('không');
        }
    }
    return ("có");
}
let ketQua = sanpham(gioHang);
console.log("Tất cả sản phẩm có giá lớn hơn 0:", ketQua);

//cửa hàng
function cuahang(gio) {
    if (gio >= 9 && gio <= 21) {
        console.log("Open");
    } else {
        console.log("Closed")
    }
}
cuahang(24)

//gia ve
function giave(tuoi) {
    if (tuoi <= 5) {
        console.log("Miễn phí")
    } else if (tuoi >= 6 && tuoi <= 17) {
        console.log("Giá vé 50k")
    } else {
        console.log("Giá vé 100k")
    }
}
giave(50)
giave(4)
giave(14)


// in tháng

function tenThang(soThang) {
    switch (soThang) {
        case 1:
            console.log("Tháng 1");
            break;
        case 2:
            console.log("Tháng 2");
            break;
        case 3:
            console.log("Tháng 3");
            break;
        default:
            console.log("Số tháng không hợp lệ");
            break;
    }
}
tenThang(1);
tenThang(6);

// học lực
function student(diem) {
    if (diem >= 8) {
        console.log("Học sinh giỏi");
    } else if (diem >= 6.5 && diem < 8) {
        console.log("Học sinh khá");
    } else if (diem >= 5 && diem < 6.5) {
        console.log("Học sinh TB");
    } else {
        console.log("Học sinh yếu");
    }
}
student(8);
student(5);

// thời tiết
function thoitiet(nhietdo) {
    if (nhietdo >=30) {
        console.log ("nóng");
    } else if (nhietdo < 30 && nhietdo >=20) {
        console.log("mát");
    } else {console.log("lạnh")}
    }
thoitiet(16)
thoitiet(50)