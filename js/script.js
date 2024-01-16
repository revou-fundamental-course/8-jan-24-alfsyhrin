// Membuat fungsi hitungLuas untuk menghitung luas persegi
function hitungLuas() {
    // Mendapatkan nilai sisi persegi dari form
    var sisi = document.getElementById("sisi").value;
    // Menghitung luas persegi dengan rumus sisi x sisi
    var luas = sisi * sisi;
    // Menampilkan hasil perhitungan ke elemen dengan id "hasil"
    document.getElementById("hasil").innerHTML = "Luas persegi adalah " + luas + " cm<sup>2</sup>";
}