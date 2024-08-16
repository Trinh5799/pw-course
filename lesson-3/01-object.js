
// Khai báo object car
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021,
}
console.log(car.year);

// Khai báo person
const person = {
    name: "Trinh",
    address: {
        street: "99 Ho Tung Mau",
        city: "Da Nang",
        country: "Viet Nam"
    }

}
console.log(person.address.street);

//Khai báo student
const student = {
    name: "Trinh",
    grades: {
        math: 9,
        english: 5,
    },
};
console.log(student["grades"]["math"]);

// vòng lắp product
const product = {
    "Chuoi": 12,
    "Xoai": 8,
    "Man": 5,
};

for (let property in product) {
    let price = product[property];
    console.log(property + price);
}

//volume
const settings = {
    volume: 600,
    brightness: 80
}
settings.volume = 700;
console.log(settings.volume);

//Bike
const bike = {
    banhxe: 50,
    loaixe: "Dapdien",
};
bike.color = "green";
console.log(bike);
// employee
const employee = {
    name: "Trinh",
    age: 26
};
delete employee.age;
console.log(employee);

//school
const schoolName = "Trần Quốc Tuấn";
const school = {
    classA: ["An", "Bình", "Châu"],
    ClassB: ["Đào", "Hương", "Giang"],
};
for (let tenlop in school) {
    console.log(tenlop);
    for (let tenhocsinh of school[tenlop]) {
        console.log(tenhocsinh);
    }
}

