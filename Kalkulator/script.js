function hitungLuasPersegi() {
    var sisi = document.getElementById("sisi").value;

    var luas = sisi * sisi;

    document.getElementById("hasilLuasPersegi").innerHTML = "Luas Persegi: " + luas + " cm";
  }

function hitungKelilingPersegi() {
    var sisi = document.getElementById("sisi2").value;
    let jumlahSisi = 4;

    var keliling = jumlahSisi * sisi;

    document.getElementById("hasilKelilingPersegi").innerHTML = "Keliling Persegi: " + keliling + " cm";
  }

function hitungLuasPp() {
    var panjang = document.getElementById("panjang").value;
    var lebar = document.getElementById("lebar").value;

    var luas = panjang * lebar;

    document.getElementById("hasilLuasPp").innerHTML = "Luas Persegi Panjang: " + luas + " cm";
}

function hitungKelilingPp() {
    var panjang = document.getElementById("panjang2").value;
    var lebar = document.getElementById("lebar2").value;

    var keliling = 2 * (parseInt(panjang) + parseInt(lebar));

    document.getElementById("hasilKelilingPp").innerHTML = "Keliling Persegi Panjang: " + keliling + " cm";
}
