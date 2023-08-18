/**
 * Class dan format penulisan camelcase dan huruf awalnya selalu besar.
 */
class MakananRingan {
    constructor(name, rasa, jenis) {
        this.name = name;
        this.rasa = rasa;
        this.jenis = jenis;
    }

    setJenis(jenis) {
        this.jenis = (jenis === 1) ? "Kering" : "Basah";
        return this;
    }

    getJenis() {
        return this.jenis;
    }

    detailProduct() {
        const detail = `Ini adalah makanan ringan ${this.name}, termasuk jenis makanan ringan ${this.getJenis()}, dan untuk rasanya ${this.rasa}`;
        return detail;
    }

    showProduct() {
        console.log(`Ini adalah makanan ringan ${this.name}, termasuk jenis makanan ringan ${this.jenis}, dan untuk rasanya ${this.rasa}`);
    }
}

function detailProductFunction() {
    const detail = `Ini adalah makanan ringan ${this.name}, termasuk jenis makanan ringan ${this.jenis}, dan untuk rasanya ${this.rasa}`;
    return detail;
}

function showProduct() {
    console.log(`Ini adalah makanan ringan ${this.name}, termasuk jenis makanan ringan ${this.jenis}, dan untuk rasanya ${this.rasa}`);
}

// Section Kelas Turunan
class MakananRinganKering extends MakananRingan {
    constructor(name, rasa, jenis) {
        super(name, rasa, jenis);
    }

    setExpireDate(date) {
        if (typeof date === "string") {
            this.expireDate = date + " Kedepan";   
        } else {
            console.error("waktu expire tidak dapat di input!");
        }
        return this;
    }

    getExpireDate() {
        return this.expireDate;
    }
}

const makananRingang = new MakananRinganKering("Ranginang", "gurih", "Kering Basah").setExpireDate("1 Tahun");
const detailProduct = makananRingang.detailProduct() + " " + makananRingang.getExpireDate();
console.log(detailProduct);