const express = require('express');
const router = express.Router()

const classRoomRouter = require('./classRoom');
const pinjamKelasRouter = require('./pinjamKelas');
const StudentRouter = require('./StudentController');
const authRouter = require('./auth');
const verifyToken = require('../middleware/authorization');
const { route } = require('./auth');

router.use("/auth", authRouter)

router.use("/class", classRoomRouter);
router.use("/pinjam", verifyToken, pinjamKelasRouter);
router.use("/student", StudentRouter);

module.exports = router