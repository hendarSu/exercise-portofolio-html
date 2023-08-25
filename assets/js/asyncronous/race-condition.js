class Hewan {
    constructor(jenis, name) {
        this.jenis = jenis;
        this.name = name;
    }

    suara() {
        console.log("Meraung");
        return this;
    }

    memakan(param) {
        this.makanan = param;
        return this;
    }

    memakanWithProsessLama(param) {
        setTimeout(() => {
            this.makanan = param;
        })
        return this;
    }

    memakanWithProsessLamaCallback(param, callback) {
        setTimeout(() => {
            this.makanan = param;
            callback();
        }, 100); // Penundaan selama 1 detik
    }

    tampilkanMakanannya() {
        console.log(`${this.name} memakan ${this.makanan} `);
        return this;
    }
}


function main() {
    console.log("Sycnronous");
    // sycronous
    const ayam = new Hewan("Unggas", "Ayam")
        .memakan("Gabah")
        .tampilkanMakanannya();

    // race condition
    console.log("Race Codition");
    const sapi = new Hewan("Mamalia", "Sapi");
    sapi.memakanWithProsessLama("Rumput");
    sapi.tampilkanMakanannya();

    // Fix race condition with Callback
    console.log("Fix Race Condition");
    const singa = new Hewan("Mamalia", "Singa");

    // singa.memakanWithProsessLamaCallback("Daging",
    //     singa.tampilkanMakanannya()); contoh yg kurang tepat untuk set parameter callback
    
    singa.memakanWithProsessLamaCallback("Daging", () => {
        singa.tampilkanMakanannya();
    });
}

main();