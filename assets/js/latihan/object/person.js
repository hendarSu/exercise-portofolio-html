const persons = [];

class Person {
    constructor(
        name,
        gender
    ) {
        this.name = name;
        // 1. Tambahkan di constructor untuk set value genger
    }

    setTitle() {
        // 2. tambahkan argument untuk set title, jika gender L = "Tuan " apabila P = "Nyonya", maka nilai 
            // name nya menjadi contoh, 
            // name = Tuan Jhon
    }

    static find(name) {
        // 6. tambahkan argument untuk pungsi pencarian dari array persons berdasarkan nama.
    } 
}

// 3. buat kan 2 object person
    // 1 person laki laki
    // panggil funsi setTittle dari object person 
    // 1 person perempuan
    // panggil funsi setTittle dari object person 

// 4. setiap object person nya ditambahkan ke array object persons

// 5. tampilkan object persons.

// 7. panggil fungsi Person.find(name) dan muncul kan object person berdasarkan nama yang di input.