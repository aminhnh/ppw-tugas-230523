function cekBilangan() {
  let bil1 = parseFloat(prompt("Bilangan pertama :"));
  let bil2 = parseFloat(prompt("Bilangan kedua :"));
  let predikat;

  if (bil1 > bil2) {
    predikat = "lebih besar dari";
  } else if (bil1 < bil2) {
    predikat = "lebih kecil dari";
  } else {
    predikat = "sama dengan";
  }
  let hasil = document.getElementById("hasil");
  hasil.innerHTML = `Bilangan 1 = ${bil1}<br>Bilangan 2 = ${bil2}<br> Hasil : Bilangan ke-1 ${predikat} bilangan ke-2`;
}

function isiData() {
  let isPraktikan = confirm(
    "Apakah anda praktikan mata kuliah Praktikum Pemrograman Web 1?"
  );
  let no2 = document.getElementById("no-2");
  if (isPraktikan) {
    let nama = prompt("Nama : ", "Aminah Nurul Huda");
    let nim = prompt("NIM : ", "22/499994/AM/30155");
    let angkatan = Number(prompt("Angkatan : ", "22"));
    //
    no2.innerHTML = ``;
  } else {
    no2.innerHTML = `<p>Anda bukan praktikan PPW1, anda tidak boleh
    masuk!</p>`;
  }
}
function tambahData() {}
