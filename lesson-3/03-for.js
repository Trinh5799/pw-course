// Tổng từ 1 đến 100

function tinhTongTuMotDenHaiTram() {
    let tong = 0;
    for (let i = 1; i <= 100; i++) {
        tong += i;
    }
    console.log("Tổng từ 1 đến 100 là:", tong);
}

tinhTongTuMotDenHaiTram();

// in bảng cửu chương từ 2 đến 9
function inBangCuuChuong() {
    for (let i = 2; i <= 9; i++) {
        console.log(`Bảng cửu chương ${i}:`);
        for (let j = 1; j <= 10; j++) {
            console.log(`${i} x ${j} = ${i * j}`);
        }
        console.log("");
    }
}
inBangCuuChuong();

// Tạo ra 1 mảng số lẻ từ 1 đến 99

function mangSole() {
    const arr = [];
    for (let i = 1; i <= 100; i += 2) {
        arr.push(i)
    }
    
    console.log(arr)
}

mangSole()

//in ra email
for (let i = 1; i <= 10; i++) {
    let email = `user-${i}@example.com`;
    console.log(email);
}

//tính tổng dt
let revenues = [
    { "month": 1, "total": 200 },
    { "month": 2, "total": 250 },
    { "month": 3, "total": 300 },
    { "month": 4, "total": 350 },
    { "month": 5, "total": 400 },
    { "month": 6, "total": 450 },
    { "month": 7, "total": 500 },
    { "month": 8, "total": 550 },
    { "month": 9, "total": 600 },
    { "month": 10, "total": 650 },
    { "month": 11, "total": 700 },
    { "month": 12, "total": 800 }
];
let totalRevenue = 0;

for (let i = 0; i < revenues.length; i++) {
    totalRevenue += revenues[i].total;
}

console.log(`Tổng doanh thu của 12 tháng là: ${totalRevenue}`)