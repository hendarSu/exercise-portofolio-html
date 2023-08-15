class Mobil {
    constructor(ban, color, type) {
        this.ban = ban;
        this.color = color;
        this.type = type;
    }
}

const mobil1 = new Mobil("ukuran normal", "putih")
const mobil4 = new Mobil("ukuran normal", "putih", "SUV")

const mobil2 = {
    ban : "ukuran normal",
    color : "hitam",
    type : "SUV"
}


const mobil3 = {
    ban : "ukuran normal",
    color : "hitam",
}

console.log(mobil1);
console.log(mobil2);
console.log(mobil3);
console.log(mobil4);



// Data Dari API
const studentsProfile = [
    { name : "Student1", age: "20", isLulus: true },
    { name : "Student2", age: "20", isLulus: false },
    { age: "20", isLulus: true}
];

class TableView {
    constructor(name, age, isLulus) {
        this.name = name;
        this.age = age;
        this.isLulus = isLulus;
    }
}

const table = [];
studentsProfile.forEach((item) => {
    const tableItem = new TableView(item.name, item.age, item.isLulus);
    table.push(tableItem);
});

console.log(table);