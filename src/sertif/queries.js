const getSertifikat = "SELECT * FROM data_sertifikat";
const getSertifikatById = "SELECT * FROM data_sertifikat WHERE id = $1";
const checkKredensial = "SELECT s FROM data_sertifikat s WHERE s.kredensial = $1";
const addSertifikat = "INSERT INTO data_sertifikat (penghargaan, tahun, penyelenggara, kredensial, kategori) VALUES ($1, $2, $3, $4, $5)";
const editSertif = "UPDATE data_sertifikat SET penghargaan = $1, tahun = $2, penyelenggara = $3, kredensial = $4, kategori = $5"
const checkIdSertifikat = "SELECT s FROM data_sertifikat s WHERE s.id = $1";
const deleteSertifikatById = "DELETE FROM data_sertifikat WHERE id = $1";

module.exports = {
    getSertifikat, getSertifikatById, checkIdSertifikat, checkKredensial,
    addSertifikat, deleteSertifikatById, editSertif
}