const penjuals = [];
const products = [];

class Product {
    constructor(id, namaProduct, stock) {
        this.id = id;
        this.namaProduct = namaProduct;
        this.stock = stock;
    }

    async tambahProduct(idPenjual, product) {
        if (typeof idPenjual !== "string") {
            throw new Error("idPenjual Must be string!");
        }

        const productNew = {
            ...product,
            idPenjual
        }

        setTimeout(async () => {
            products.push(productNew);
            console.log("product berhasil ditambahkan");

            // proses yg terakhir yang di eksekusi
            await this.listProduct();
        }, 10)
    }


    async listProduct() {
        console.log("Ini List Product : ");
        console.log(products);
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
        });
    }

    async notif(message) {
        console.log("Notif : " + message);
    }
}

const main = async () => {
    const idPenjual = 0;
    const penjual = new Penjual(idPenjual, "James Alibaba", "Jual Ayam", 0);

    try {
        const penjualReg = await penjual.registrasi(penjual); // 1 proses yg pertama di eksekusi.
        console.log(penjualReg);

        const penjualList = await penjual.listPenjual(); // proses ke 2 yg di eksekusi
        console.log(penjualList);

        const product = new Product("1", "Ayam Fressh", 100);
        await product.tambahProduct(idPenjual, product); // proses yang ketiga yg di eksekusi
    } catch (error) {
        // await penjual.notif(error.message);
        console.error(error);
    };
}

main();