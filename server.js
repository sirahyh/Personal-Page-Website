const express = require("express");
var cors = require('cors')
const sertifRoutes = require('./src/sertif/routes');

const app = express();
const port = 3000;

app.use(express.json());

app.use(cors())

app.use("/api/rahma/sertifikat", sertifRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`))