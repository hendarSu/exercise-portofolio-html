
const studentsProfile = [
    { name : "Student1", age: "20", isLulus: true },
    { name : "Student2", age: "20", isLulus: false },
    { name : "Student3", age: "20", isLulus: true }
];
console.log("Sebelum Mapping : ");
console.log(studentsProfile);

const studentsGelar = studentsProfile.map(item => {
     (item.isLulus)? item['gales'] = " ST" : "";
    return item;
});

console.log("Bentuk Mapping : ");
console.log(studentsGelar);

// List Kotak
const contact = [
    {name: "bebas", phone: "08133xxxxxx"},
    {name: "bebas1", phone: "08133xxxxxx"}
]

// tampil websitenya : table
// 3. tambah contact
const reqContact = {
    fullname: "dio", 
    telp: "081xxxxxxxx"
}

// Design data sebuah entitas, seller atau object sistem
class Contact {
    constructor(name, phone) {
        this.name = name;
        this.phone = phone;
    }
}

// 4. simpan ke db
const newContact = new Contact(
    reqContact.fullname, reqContact.telp
);

// 5. atau mas dio push ke array list kotak sebelumnya
contact.push(newContact);
console.log(contact);


class Seller {
    constructor(name, address, phone, email) {
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.email = email;
    }
};

const sellerProfile = new Seller(
    "Mas ERsan", 
    "Jln Trinojoyo no 1", 
    "+6282xxxxxxx", 
    "ersan@mail.com"
);

console.log(sellerProfile);

const seller = {
    name : "hendar",
    toko : "toko makmur jaaya",
    orders : [{
        no_order: "001",
        amount : 100000
    },
    {
        no_order: "002",
        amount : 200000
    },
    ]
}

const { name } = seller;
console.log("Nama Seller " + name);
const { orders } = seller;
console.log(orders);

const nameSeller = seller.name;
const orderSeller = seller.orders;


const sandal = ["sandal1", "sandal2"];
const sandalArrayString = sandal.toString();
console.log('["sandal1", "sandal2"]');
console.log(sandalArrayString);