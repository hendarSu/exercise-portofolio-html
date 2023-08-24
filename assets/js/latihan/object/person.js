const persons = [];

class Person {
    constructor(
        name,
        gender
    ) {
        this.name = name;
        // 1. Tambahkan di constructor untuk set value genger
        this.gender = gender;
    }

    setTitle() {
        // 2. tambahkan argument untuk set title, jika gender L = "Tuan " apabila P = "Nyonya", maka nilai 
            // name nya menjadi contoh, 
            // name = Tuan Jhon
            (this.gender === "L") ? this.name = `Tuan ${this.name}` : this.name =`Nyonya ${this.name}`;
    }

    static find(name) {
        // 6. tambahkan argument untuk pungsi pencarian dari array persons berdasarkan nama.
        return persons.find((item) => {
            return item.name = name;
        })
    } 
}

// 3. buat kan 2 object person
    // 1 person laki laki
    // panggil funsi setTittle dari object person 
    const person1 = new Person("Hendar", "L");
    person1.setTitle();
    
    // 1 person perempuan
    // panggil funsi setTittle dari object person 
    const person2 = new Person("Nurul", "P");
    person2.setTitle();

// 4. setiap object person nya ditambahkan ke array object persons
    persons.push(person1);
    persons.push(person2);

// 5. tampilkan object persons.
    console.log("List Array Person : ");
    console.log(persons);

// 7. panggil fungsi Person.find(name) dan muncul kan object person berdasarkan nama yang di input.
    const personFind = Person.find("Hendar");
    console.log("Hasil Pencarian dengan inputan name : ");
    console.log(personFind);