const { Router } = require("express");
const controller = require("./controller");

const router = Router();

router.get("/", controller.getSertif);
router.get("/:id", controller.getSertifById);
router.post("/", controller.addSertif);
router.put("/:id", controller.putSertif);
router.delete("/:id", controller.removeSertif);

module.exports = router;