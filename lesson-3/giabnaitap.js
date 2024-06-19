const { Console } = require("console")

const classA = [
    { ten: "Trinh", stt: 1 },
    { ten: "Chau", stt: 22 },
    { ten: "Huy", stt: 24 },
    { ten: "Vong", stt: 31 },
    { ten: "Trung", stt: 51 },]
//console.log(classA[3]);
for (let i = 0; i <= 4; i++)
    if (classA[i].stt %2==0) {
    console.log((classA[i].ten) + classA[i].stt+ "@gmail.com")
}
// tháng


function bt5 () {
    let doanhthu = [
        {"month" : 1, "total": 100},
        {"month" : 2, "total": 2100},
        {"month" : 3, "total": 1300},
        {"month" : 4, "total": 1030},
        {"month" : 5, "total": 1003},
        {"month" : 6, "total": 1003},
        {"month" : 7, "total": 100},
        {"month" : 8, "total": 100},
        {"month" : 9, "total": 100},
        {"month" : 10, "total": 100},
        {"month" : 11, "total": 100},
        {"month" : 12, "total": 100},
    ]

    let tongdoanhthu = 0;
    for (let i =0; i<=11; i++)
    tongdoanhthu = tongdoanhthu + doanhthu[i].total;
}
bt5()
