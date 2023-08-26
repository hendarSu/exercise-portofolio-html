const penjuals = [];
const products = [];

class Product {
    constructor(id, namaProduct, stock) {
        this.id = id;
        this.namaProduct = namaProduct;
        this.stock = stock;
    }

    tambahProduct(idPenjual, product) {
        return new Promise((resolve, reject) => {
            if (typeof idPenjual !== "string") {
                reject("idPenjual Must be string!");
            }

            const productNew = {
                ...product,
                idPenjual
            }
            setTimeout(() => {
                products.push(productNew);
                resolve("product berhasil ditambahkan");
            }, 10)
        })
    }

    // NOTE: Phase Producing Code promise
    // 1. kita buatakn method yang return promise, contoh baris 31
    listProduct() {
        console.log("Ini List Product : ");

        // 2. di promise ada 2 parameter relove untuk proses yg berjalan baik, dan reject untuk proses yang gagal atau error.
        return new Promise((resolve, reject) => {
            if (products.length > 0) {

                // 3. kita perlu buatkan return data yang dimasukan ke callback relove. yang dimasukan kedaalam resolve hasil dari argument atau fungsi list product.

                resolve(products);

            } else {

                // 4. memberikan keterangan error atau gagal ke callback reject
                reject('Maaf Product Kosong!')
            }
        });
    }
}

class Penjual {
    constructor(id, name, jenisUsaha, penghasilan) {
        this.id = id;
        this.name = name;
        this.jenisUsaha = jenisUsaha;
        this.penghasilan = penghasilan;
    }

    registrasi(penjual) {
        return new Promise((resolve) => {
            setTimeout(() => {
                penjuals.push(penjual);
                resolve("penjual berhasil registrasi");
            }, 10)
        })
    }

    listPenjual() {
        return new Promise((resolve) => {
            console.log("Ini List Penjual : ");
            resolve(penjuals);
        })
    }
}

const main = () => {
    const idPenjual = "1";
    const penjual = new Penjual(idPenjual, "James Alibaba", "Jual Ayam", 0);
    // Phase Consuming Code Promise
    // 1. kita panggil fungsi atau indetifikasi yg retun nya promise. contoh disini pejual registtrasi
    penjual.registrasi(penjual)
    .then((resolve) => { // 2. di belakang fungsi promise nya kita panggil yang then, nge get result dari value yang dihasilakn dari method registrasi.
        console.log(resolve);
        penjual.listPenjual().then(resolve => console.log(resolve));
    }).catch(errr => { // 3. setelah fungsi then panggil fungsi catch, for show error message.
        console.error(errr);
    });

    const product = new Product("1", "Ayam Fressh", 100);
    const saveProduct = product.tambahProduct(idPenjual, product);
    saveProduct.then((resolve) => {
        console.log(resolve);
        product.listProduct()
        .then(resolve => console.log(resolve))
        .catch(reject=> console.log(reject));
    }).catch((reject) => {
        console.log(reject);
    })
}

main();