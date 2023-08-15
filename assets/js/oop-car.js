class Mobil {
    constructor(name, color, type) {
        this.name = name;
        this.color = color;
        this.type = type;
    }

    nyalakanMesin() {
        console.log(`Mobil ${this.name}, Mesinnya Menyala! ${this.#remdong()}`);
    }

    matikanMesin() {
        console.log(`Mobil ${this.name}, Mesinnya Mati!`);
    }

    /**
     * function private
     * @returns string
     */
    #remdong() {
        return "Siap Boss!!"
    }

    /**
     * function protected 
     */
    _nyalakanLampu() {
        console.log("Siap Mobil Lampunya nyala!");    
    }

    static gasMesing(kecepatan) {
        console.log(`Hati-hati kecepatan anda mencapat ${kecepatan}`);
    }
}

class Bengkel {
    showAddressBengkel(address) {
        console.log(`Alamat bengkel mobil anda adalah ${address}`);
    }
}

class MobilSport extends Mobil {
    constructor(name, color, type) {
        super(name, color, type);
        this.bengkel = new Bengkel();
    }

    showAddressBengkel(address) {
        this.bengkel.showAddressBengkel(address);
    }
}

// .....
const laborgini = new MobilSport("Laborgini", "merah", "sport");
console.log(laborgini);
laborgini.showAddressBengkel("Buah Batu");


// laborgini.nyalakanMesin();
// laborgini.matikanMesin();
// laborgini._nyalakanLampu();
// MobilSport.gasMesing("130 KM");
