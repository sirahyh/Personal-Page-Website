const url = 'http://localhost:3000/api/rahma/sertifikat/'
const cobaInput = "isi input program"


// GET Method
var settings = {
    "url": url,
    "method": "GET",
    "timeout": 0,
    "headers": {
        "Content-Type": "application/json"
    },
};

$.ajax(settings)
.fail(function(response){
console.log(response)

if(response.status == 404) {
    console.log("API gagal diakses")
}
})
.done(function (response) {
    console.log("isi dari API: ", response)
let tableContent = ""; 
let id;
    response.map(item => {
        tableContent += `
            <tr id="data-row">
                <td class="program">${item.penghargaan}</td>
                <td class="tahun">${item.tahun}</td>
                <td class="penyelenggara">${item.penyelenggara}</td>
                <td class="kredensial">${item.kredensial}</td>
                <td class="aksi">
                    <div class="lihat">
                        <button>Lihat
                        </button>
                    </div>
                    <div class="edit">
                        <button  data-toggle="modal" data-target="#editModalCenter" onclick="updateClick(${item.id})">Edit</button>
                    </div>
                    <div class="hapus">
                        <button data-toggle="modal" data-target="#deleteModal" onclick="deleteClick(${item.id})">Hapus</button>
                    </div>
                </td>
            </tr>`;
    })

    // Setelah looping selesai, sisipkan seluruh isi tabel ke dalam tbody dengan id "table-body"
    $('#table-body').html(tableContent);
});

// POST Method
let programAdd, tahunAdd, penyelenggaraAdd, kredensialAdd;
$('#addBtn').on('click', function(){
    programAdd = $('#programAdd').val()
    tahunAdd = $('#tahunAdd').val()
    penyelenggaraAdd = $('#penyelenggaraAdd').val()
    kredensialAdd = $('#kredensialAdd').val()

    console.log(programAdd, tahunAdd, penyelenggaraAdd, kredensialAdd)

    let dataAdd = {
        penghargaan : programAdd,
        tahun : tahunAdd,
        penyelenggara : penyelenggaraAdd,
        kredensial : kredensialAdd
    }

    var postData = {
        "url": url,
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify(dataAdd)
    };

    $.ajax(postData).done(function (response) {
        console.log(response);
    })
})


// PUT METHOD BY ID
// get datanya dulu
function updateClick(id){
    console.log('data ini memiliki id: ', id)
    var settings = {
        "url": `${url}/${id}`,
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
    };
    
    $.ajax(settings)
    .fail(function(response){
    console.log(response)
    
    if(response.status == 404) {
        console.log("API gagal diakses")
    }
    })
    .done(function (response) {
        $('#programEdit').val(response[0].penghargaan)
        $('#tahunEdit').val(response[0].tahun)
        $('#penyelenggaraEdit').val(response[0].penyelenggara)
        $('#kredensialEdit').val(response[0].kredensial)
    });

    // Edit value input
$('#editBtn').on('click', function(){
    programAdd = $('#programEdit').val()
    tahunAdd = $('#tahunEdit').val()
    penyelenggaraAdd = $('#penyelenggaraEdit').val()
    kredensialAdd = $('#kredensialEdit').val()

    console.log(programAdd, tahunAdd, penyelenggaraAdd, kredensialAdd)

    let dataEdit = {
        penghargaan : programAdd,
        tahun : tahunAdd,
        penyelenggara : penyelenggaraAdd,
        kredensial : kredensialAdd
    }

    var putData = {
        "url": `${url}/${id}`,
        "method": "PUT",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify(dataEdit)
    }

    $.ajax(putData).done(function (response) {
        console.log(response);
    });
})
}


// DELETE METHOD
function deleteClick(id){
    $('#fixDelete').on('click', function(){
        var deleteData = {
            "url": `${url}/${id}`,
            "method": "DELETE",
            "timeout": 0,
            "headers": {
                "Content-Type": "application/json"
            }
        }
        $.ajax(deleteData).done(function (response) {
            console.log(response);
        })
    })
}

// Close Popup
function closeAddPopup() {
  $("#addModalCenter").modal('hide');
}

function closeEditPopup() {
    $("#editModalCenter").modal('hide');
}

function closeDeletePopup() {
    $("#deleteModal").modal('hide');

}