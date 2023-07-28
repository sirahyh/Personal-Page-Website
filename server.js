const express = require("express");
const app = express();
const multer = require("multer");
const path = require("path");
const sertifRoutes = require('./src/sertif/routes');

var cors = require('cors')
const port = 3000;

const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({
    storage: storage,
    limits: {fileSize:1000000}
})

app.use("/profile", express.static("upload/images"));
app.post("/upload", upload.single('profile'), (req, res) => {
    res.json({
        succes: 1,
        profile_url: `http://localhost:3000/profile/${req.file.filename}`
    })
})

app.use(express.json());
app.use(cors())
app.use("/api/rahma/sertifikat", sertifRoutes);

function errHandler(err, req, res, next){
    if(err instanceof multer.MulterError){
        res.json({
            succes: 0,
            message: err.message
        })
    }
}

app.use(errHandler)
app.listen(port, () => console.log(`app listening on port ${port}`))