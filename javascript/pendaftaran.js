let today=new Date();
let tahun=today.getFullYear();

document.getElementById("daftar").disabled=true;

document.getElementById("nama").onkeydown=function () {
let nama = document.getElementById("nama").value;
let kode = nama.substring(0,3);
document.getElementById("kodeDaftar").value=kode+tahun;
}
document.getElementById("nama").onkeyup=function () {
    let up=document.getElementById("nama");
    up.value=up.value.toUpperCase(); 
}
document.getElementById("tglLahir").onchange=function()
{
    let input=document.getElementById("tglLahir").value;
    let d=new Date(input);

    year=d.getFullYear();
    let umur=(tahun-year);
    document.getElementById("umrSkrg").innerHTML="<b>"+umur+"Tahun</b>";
    if(umur<=18){
        alert("Umur Harus diatas 18 Tahun");
    }else{
        document.getElementById("daftar").disabled=false;
    }
}
document.getElementById("alamat").onchange=function () {
    let cekalamat=document.getElementById("alamat").value;
    let panjang=cekalamat.length;

    if(panjang<=30){
        document.getElementById("alertalamat").style.display="inline-block";
    }else{
        document.getElementById("alertalamat").style.display="none";
    }
}

function pendaftaran(){
        let table = document.getElementById("table");
        let row = table.insertRow();
        let kdaftar1 = row.insertCell(0);
        let nama = row.insertCell(1);
        let ttl = row.insertCell(2);
        let email = row.insertCell(3);
        let JKelamin = row.insertCell(4);
        let alamat = row.insertCell(5);

        kdaftar1.innerHTML=document.getElementById("kodeDaftar").value;
        nama.innerHTML=document.getElementById("nama").value;
        ttl.innerHTML=document.getElementById("tmptLahir").value + ", " + document.getElementById("tglLahir").value;
        email.innerHTML=document.getElementById("email").value
        JKelamin.innerHTML=document.getElementById("JKelamin").value;
        alamat.innerHTML=document.getElementById("alamat").value;
}