const penjuals = [];
const products = [];

class Product {
    constructor(id, namaProduct, stock) {
        this.id = id;
        this.namaProduct = namaProduct;
        this.stock = stock;
    }

    tambahProduct(idPenjual, product) {
        const productNew = {
            ...product,
            idPenjual
        }
        setTimeout(() => {
            products.push(productNew);
        }, 10)

        console.log("product berhasil ditambahkan");
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

    registrasi(penjual) {
        setTimeout(() => {
            penjuals.push(penjual);
        }, 10)

        console.log("penjual berhasil registrasi");
        return this;
    }
}

function main() {
    const idPenjual = "1";
    const penjual = new Penjual(idPenjual, "James Alibaba", "Jual Ayam", 0);
    penjual.registrasi(penjual);

    // tampilkan array penjuals
    console.log("Ini List Penjual : ");
    console.log(penjuals);

    const product = new Product("1", "Ayam Fressh", 100);
    product.tambahProduct(idPenjual, product);

    // tampilkan array penjuals
    console.log("Ini List Product : ");
    console.log(products);
}

main();