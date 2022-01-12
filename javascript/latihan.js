//mendeklarasikan array object
let databarang = [
    { kode: "0001", nama: "Gula", harga: 20000 },
    { kode: "0002", nama: "Minyak 1ltr", harga: 25000 },
    { kode: "0003", nama: "Telur 1kg", harga: 18000 },
    { kode: "0004", nama: "Beras 1kg", harga: 25000 },
  ];
  
  let combo_barang = document.getElementById("namabarang");
  let listcombo = "";
  //menginputkan data array object  ke combobox
  databarang.forEach((item) => {
    //deklarasi variabel 	listcombo yang menampung option list untuk comboxbox
    listcombo += "<option value='" + item.harga + "' >" + item.nama + "</option>";
    //menyisipkan hasil variabel ke html combobox
    combo_barang.innerHTML = listcombo;
  });
  //deklarasi variabel dari id form harga pada html
  let harga = document.getElementById("hargabrg");
  combo_barang.onchange = function () {
    //ketika element combobarang di pilih valuenya, maka form harga diisi sesuai value combobox barang
    harga.value = combo_barang.value;
  };
  
  let qty = document.getElementById("qty");
  let total = document.getElementById("total");
  let diskon = document.getElementById("diskon");
  //ketika qty diinput maka, otomatis menghitung diskon
  qty.onchange = function () {
    total.value = qty.value * harga.value;
    if (total.value > 100000) {
      diskon.value = 0.05 * total.value;
    } else {
      diskon.value = 0;
    }
  };
  
  let jmlbayar = document.getElementById("bayar");
  //ketika form bayar, maka otomatis akan menghitung kembalian
  jmlbayar.onkeyup = function () {
    document.getElementById("kembalian").value = jmlbayar.value - total.value - diskon.value;
  };