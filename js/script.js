function hitungLuas() {
    var sisi = document.getElementById("sisi").value;
    sisi = parseInt(sisi);
    var luas = sisi * sisi;
    document.getElementById("hasil").innerHTML = "Luas persegi adalah " + luas;
    console.log("Luas persegi adalah " + luas);
  }