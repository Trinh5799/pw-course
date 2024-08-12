//Khởi động tàu vũ trụ K8
const departurePlanet = "Trái Đất";
const mission = "Khám phá vũ trụ K8";
const crew = ["Ngọc Hạnh", "Tú", "Nam", "Ruby", "Trinh"];
function launchShip(crew) {
    const list = crew.join(",");
    return `Chuẩn bị khởi động! Phi hành đoàn gồm: ${list} sẽ đồng hành cùng bạn trong chuyến phiêu lưu khám phá Vũ trụ K8!`
}
console.log(launchShip(crew));

// Du hành đến hành tinh bí ẩn
function calculateDistance(speed, time) {
    return speed * time;
}
const distance = calculateDistance(1000, 24);
console.log(`Khoảng cách đến hành tinh bí ẩn: ${distance} km`);

// Hành tinh kỳ lạ
function convertTimeToHex(time) {
    return time.toString(16).toUpperCase();
}

const hexTime = convertTimeToHex(120);
console.log(`Thời gian theo hệ thập lục phân: ${hexTime}`);

//Khám phá kho báu
function decryptCode(code) {
    return code.split('').map(char => {
        if (char === char.toUpperCase()) {
            return char.toLowerCase();
        } else {
            return char.toUpperCase();
        }
    }).join('');
}

const decryptedCode = decryptCode("K8 Challenge");
console.log(`Mật mã đã giải mã: ${decryptedCode}`);

//Trở về trái đất
function returnToEarth() {
    console.log("Chuẩn bị trở về Trái Đất!");
}

returnToEarth();