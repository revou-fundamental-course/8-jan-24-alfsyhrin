// File luas-persegi.js
function hitung() {
    // Mendapatkan nilai sisi dari input
    var sisi = document.getElementById("sisi").value;
    // Menghitung luas persegi dengan rumus sisi * sisi
    var luas = sisi * sisi;
    // Menampilkan hasil luas pada input lain
    document.getElementById("luas").value = luas;
  }
  