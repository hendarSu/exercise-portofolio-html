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

    setName(name) {
        this.name = name;
        return this;
    }

    setGender(gender) {
        const genders = ["L", "P"];
        if (genders.includes(gender)) {
            this.gender = gender;
        } else {
            console.error("Maaf gender yg di input hanya L atau P");
        }

        this.#setTitle();
        return this;
    }

    #setTitle() {
        // 2. tambahkan argument untuk set title, jika gender L = "Tuan " apabila P = "Nyonya", maka nilai 
            // name nya menjadi contoh, 
            // name = Tuan Jhon
            (this.gender === "L") ? this.name = `Tuan ${this.name}` : this.name =`Nyonya ${this.name}`;
            return this;
    }

    static find(name) {
        // 6. tambahkan argument untuk pungsi pencarian dari array persons berdasarkan nama.
        return persons.find(item => item.name = name)
    } 
}

// 3. buat kan 2 object person
    // 1 person laki laki
    // panggil funsi setTittle dari object person 
    const person1 = new Person("Hendar", "L");
    // 1 person perempuan
    // panggil funsi setTittle dari object person 
    const person2 = new Person("Nurul", "P");
    const person3 = new Person();
    person3.name = "Agung";
    person3.gender = "L";

    // Builder Pattern
    const person4 = new Person();
    person4.setName("Fajar").setGender("L")

// 4. setiap object person nya ditambahkan ke array object persons
    persons.push(person1);
    persons.push(person2);
    persons.push(person3);
    persons.push(person4);

// 5. tampilkan object persons.
    console.log("List Array Person : ");
    console.log(persons);

// 7. panggil fungsi Person.find(name) dan muncul kan object person berdasarkan nama yang di input.
    const personFind = Person.find("Hendar");

    console.log("Hasil Pencarian dengan inputan name : ");
    console.log(personFind);

    // Latihan OOP
    class Student extends Person {
        setKelas(param) {
            //1. argumant set nilai kelas
            this.kelas = param;
            return this;
        }

        setSekolah(param) {
            this.sekolah = param;
            return this;
        }
    }
    
    // 2. Set class dengan bentuk builder pattern
    const student = 
    new Student("Rudini")
    .setGender("L")
    .setKelas("Kelas 4")
    .setSekolah("SDN 2 Bandung");

    // Rekomendasi pembuatan object dengan pola builder pattern.
    const student2 = 
    new Student()
    .setName("Deni")
    .setGender("L")
    .setKelas("Kelas 4")
    .setSekolah("SDN 2 Bandung");

    console.log("Tampil Student");
    console.log(student);
    console.log(student2);


