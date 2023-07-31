/* CATATAN
- untuk POST, Url bermasalah karena ketika diganti url lain, berhasil melakukan post ke API
- untuk delete, terdelete tapi keterangan yang muncul di konsol iitu adalah blok else nya

*/

const baseUrl = "http://localhost:3000/api/rahma/sertifikat/";

//  GET
const req = new XMLHttpRequest();
req.open('GET', baseUrl);

req.addEventListener('load', function() {
    if (req.status === 200 && req.readyState === 4) {
        const res = JSON.parse(req.responseText);
        const tableBody = document.getElementById("table-body");

        for (let i = 0; i < res.length; i++) {
          const program = res[i].penghargaan;
          const tahun = res[i].tahun;
          const penyelenggara = res[i].penyelenggara;
          const kredensial = res[i].kredensial;

          const newRow = document.createElement("tr");

                // Membuat elemen <td> untuk setiap kolom data
                const programCell = document.createElement("td");
                programCell.classList.add("program");
                programCell.textContent = program;

                const tahunCell = document.createElement("td");
                tahunCell.classList.add("tahun")
                tahunCell.textContent = tahun;

                const penyelenggaraCell = document.createElement("td");
                penyelenggaraCell.classList.add("penyelenggara")
                penyelenggaraCell.textContent = penyelenggara;

                const kredensialCell = document.createElement("td");
                kredensialCell.classList.add("kredensial")
                kredensialCell.textContent = kredensial;

                // Membuat elemen <td> untuk kolom aksi
                const aksiCell = document.createElement("td");
                aksiCell.classList.add("aksi");

                // Membuat elemen <div> dan <a> untuk tautan "Lihat"
                const lihatDiv = document.createElement("div");
                lihatDiv.classList.add("lihat")
                const lihatLink = document.createElement("a");
                lihatLink.href = "#";
                lihatLink.textContent = "Lihat";
                lihatDiv.appendChild(lihatLink);

                // Membuat elemen <div> dan <a> untuk tautan "Edit"
                const editDiv = document.createElement("div");
                editDiv.classList.add("edit")
                const editLink = document.createElement("a");
                editLink.href = "#";
                editLink.textContent = "Edit";
                editDiv.appendChild(editLink);

                // Membuat elemen <div> dan <a> untuk tautan "Hapus"
                const hapusDiv = document.createElement("div");
                hapusDiv.classList.add("hapus")
                const hapusLink = document.createElement("a");
                hapusLink.href = "#";
                hapusLink.textContent = "Hapus";
                hapusDiv.appendChild(hapusLink);

                // Menggabungkan elemen <div> ke dalam elemen <td> untuk kolom aksi
                aksiCell.appendChild(lihatDiv);
                aksiCell.appendChild(editDiv);
                aksiCell.appendChild(hapusDiv)

                // Menggabungkan elemen <td> ke dalam elemen <tr>
                newRow.appendChild(programCell);
                newRow.appendChild(tahunCell);
                newRow.appendChild(penyelenggaraCell);
                newRow.appendChild(kredensialCell);
                newRow.appendChild(aksiCell);

                // Menambahkan baris data ke dalam tbody tabel
                tableBody.appendChild(newRow);
      }
    } else {
        console.error("Bad Request (Endpoint bermasalah)")
    }

})

req.send();

// POST

// const newData = {
//     panghargaan : "Data Science Pemula",
//     tahun : 2022,
//     penyelenggara : "DQLab",
//     kredensial : "",
//     kategori : "Pelatihan",
// }

// const req = new XMLHttpRequest();

// req.open('POST', 'https://reqres.in/api/users/');

// req.setRequestHeader('Content-Type', 'application/json');

// req.addEventListener('load', function() {
//         if (req.status === 200 && req.readyState === 4) {
//             const res = JSON.parse(req.responseText);
//             console.log(res);
//         } else {
//             console.error("Bad Request (Endpoint bermasalah)")
//         }

//     })

// req.send(JSON.stringify(newData))

// PUT
// const newData = {
//     panghargaan : "Data Science Expert",
//     tahun : 2022,
//     penyelenggara : "DQLab",
//     kredensial : "",
//     kategori : "Pelatihan",
// }

// const req = new XMLHttpRequest();

// req.open('PUT', 'https://reqres.in/api/users/2');

// req.setRequestHeader('Content-Type', 'application/json');

// req.addEventListener('load', function() {
//         if (req.status === 200 && req.readyState === 4) {
//             const res = JSON.parse(req.responseText);
//             console.log(res);
//         } else {
//             console.error("Bad Request (Endpoint bermasalah)")
//         }

//     })

// req.send(JSON.stringify(newData))

// DELETE
// const req = new XMLHttpRequest();

// req.open("DELETE", 'http://localhost:3000/api/rahma/sertifikat/10');

// req.addEventListener("load", function () {
//   if (req.status === 204) {  
//     console.log("Request sukses");
//   } else {
//     console.error("Bad Request (Endpoint bermasalah)");
//   }
// });

// req.send();
