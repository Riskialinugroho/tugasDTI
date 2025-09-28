const parent = document.getElementById('kolom_komentar')

document.getElementById('comment').addEventListener("submit", function(event) {
	event.preventDefault();

	let nama = document.getElementById("nama").value;
    let isi_komentar = document.getElementById("isi_komentar").value;

    if (nama == "") {
    nama = "Anonim";
    }
    
})