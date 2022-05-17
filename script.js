function tampilData(){
    var nama = document.getElementById("nama").value;
    var nik = document.getElementById("nik").value;
    var ttl = document.getElementById("ttl").value;
    var agama = document.getElementById("agama").value;
    var pekerjaan = document.getElementById("pekerjaan").value;
    var jeniskelamin = document.querySelector("input[name=jeniskelamin]:checked").value;
    var statusperkawinan = document.querySelector("input[name=statusperkawinan]:checked").value;
    var pendidikan = document.getElementsByName("pendidikan");
    var alamat = document.getElementById("alamat").value;
    
    var daftarPendidikan = ''
    
    for(var pendidikan2 of pendidikan) {
        if(pendidikan2.checked) {
            daftarPendidikan += ', '+ pendidikan2.value
        }
    } daftarPendidikan = daftarPendidikan.substring(1)

    alert(
        "Nama : " +
        nama +
        "\nNomor KTP : " +
        nik +
        "\nTempat/Tgl. Lahir : " +
        ttl +
        "\nAgama : " +
        agama +
        "\nPekerjaan : " +
        pekerjaan +
        "\nJenis Kelamin : " +
        jeniskelamin +
        "\nStatus Perkawinan : " +
        statusperkawinan +
        "\nPendidikan Terakhir : " +
        daftarPendidikan +
        "\nAlamat : " +
        alamat
    );
}