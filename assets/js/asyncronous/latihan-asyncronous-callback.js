const penjuals = [];
const products = [];

class Product {
    constructor(id, namaProduct, stock) {
        this.id = id;
        this.namaProduct = namaProduct;
        this.stock = stock;
    }

    // 1. Tambahak parameter callback di method yang mau kita gunakan 
    // 2. callback selalu ditambahkan di akhir parameter, misal asal 2 maka parameter callback disimpan di parameter ke 3.
    tambahProduct(idPenjual, product, callback) {
        const productNew = {
            ...product,
            idPenjual
        }
        setTimeout(() => {
            products.push(productNew);
            console.log("product berhasil ditambahkan");

            // 3. Panggil Callback didalam argument method nya, dengan tujuan untuk menambahkan dan menjalankan proses tambahan sesuai callback yang di input.

            // 4. mewakili atau sebagai proses tambah atau proses selanjutnya.
            callback()
        }, 10)

        return this;
    }
}

class Penjual {
    constructor(id, name, jenisUsaha, penghasilan) {
        this.id = id;
        this.name = name;
        this.jenisUsaha = jenisUsaha;
        this.penghasilan = penghasilan;
    }

    registrasi(penjual, callback) {
        setTimeout(() => {
            penjuals.push(penjual);
            console.log("penjual berhasil registrasi");
            callback();
        }, 10)

        return this;
    }
}

function main() {
    const idPenjual = "1";
    const penjual = new Penjual(idPenjual, "James Alibaba", "Jual Ayam", 0);
    penjual.registrasi(penjual, () => {
        // tampilkan array penjuals
        console.log("Ini List Penjual : ");
        console.log(penjuals);
    });

    const product = new Product("1", "Ayam Fressh", 100);

    /**
     * This is callback for tampilproduct
     */
    const tampilProduct = () => {
        // 6. didalam sini merupakan proses yang dipanggil di callback dan akan dijalankan didalam method tambahProduct

        // 7. Tambahkan proses yang akan dijalankan
        // tampilkan array penjuals
        console.log("Ini List Product : ");
        console.log(products);
    }

    // 5. buatkan function kosong untuk menampung proses.
    product.tambahProduct(
        idPenjual,
        product,
        tampilProduct
    );
}

main();