function cekBilangan() {
  var bil1 = parseFloat(prompt("Bilangan pertama :"));
  var bil2 = parseFloat(prompt("Bilangan kedua :"));
  var predikat;

  if (bil1 > bil2) {
    predikat = "lebih besar dari";
  } else if (bil1 < bil2) {
    predikat = "lebih kecil dari";
  } else {
    predikat = "sama dengan";
  }
  var hasil = document.getElementById("hasil");
  hasil.innerHTML = `Bilangan 1 = ${bil1}<br>Bilangan 2 = ${bil2}<br> Hasil : Bilangan ke-1 ${predikat} bilangan ke-2`;
}

function data() {
  var isPraktikan = confirm(
    "Apakah anda praktikan mata kuliah Praktikum Pemrograman Web 1?"
  );
  if (isPraktikan) {
    nama = prompt("Nama : ");
    nim = prompt("NIM : ");
    angkatan = Number(prompt("Angkatan : "));
  }
}
