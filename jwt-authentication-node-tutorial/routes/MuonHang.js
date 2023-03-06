const router = require('express').Router()
const { PrismaClient } = require('@prisma/client')

const { MuonHang } = new PrismaClient()

router.post('/update/soluong/:id', async (req, res) => {
    const deleteUser = await MuonHang.update({
        data: {
            SoLuong: req.body.soluong
        },
        where: {
            id: Number(req.params.id)
        }
    })
    res.json(deleteUser)

})

router.post('/update/lichsumuonhangId/:id', async (req, res) => {
    const update = await MuonHang.updateMany({
        data: {
            lichSuMuonHangId: Number(req.body.id)
        },
        where: {
            produce: Number(req.params.id)
        },
    })
    res.json(update)

})

router.post('/delete/:slug', async (req, res) => {

    const deleteUser = await MuonHang.deleteMany({
        where: {
            NguoiMuon: req.params.slug

        },
    })
    res.json(deleteUser)

})

router.post('/delete/id/:id', async (req, res) => {

    const deleteUser = await MuonHang.delete({
        where: {
            id: Number(req.params.id)

        },
    })
    res.json(deleteUser)

})

router.get('/id/:id', async (req, res) => {
    const users = await MuonHang.findMany({
        select: {
            id: true,
            TenHang: true,
            produce: true,
            SoLuong: true,
            TrangThai: true,
            date: true,
            NguoiMuon: true,
            user_id: true,
            lichSuMuonHangId: true
        },
        where: {
            lichSuMuonHangId: Number(req.params.id),
        },
    })
    res.json(users)
})

router.get('/:slug', async (req, res) => {
    const users = await MuonHang.findMany({
        select: {
            id: true,
            TenHang: true,
            produce: true,
            SoLuong: true,
            TrangThai: true,
            date: true,
            NguoiMuon: true,
            user_id: true
        },
        where: {
            NguoiMuon: req.params.slug,
        },
    })
    res.json(users)
})

router.get('/trangthai/:slug', async (req, res) => {
    const users = await MuonHang.findMany({
        select: {
            id: true,
            TenHang: true,
            SoLuong: true,
            TrangThai: true,
            date: true,
            NguoiMuon: true
        },
        where: {
            TrangThai:
            {
                contains: req.params.slug
            }
        }
    })
    res.json(users)
})


router.post('/create', async (req, res) => {

    const users = await MuonHang.create({
        data: {
            TenHang: req.body.name,
            SoLuong: req.body.soluong,
            TrangThai: "Chưa Xác Nhận",
            date: new Date(),
            user_id: Number(req.body.id),
            produce: req.body.produce_id,
            NguoiMuon: req.body.nguoimuon,
            lichSuMuonHangId: req.body.lichsu_id
        },
    })
    res.json(users)
})

router.get('/', async (req, res) => {
    const users = await MuonHang.findMany({
        select: {
            id: true,
            TenHang: true,
            SoLuong: true,
            TrangThai: true,
            produce: true,
            date: true,
            NguoiMuon: true,
            user_id: true,
            lichSuMuonHangId: true
        },
    })
    res.json(users)
})



router.post('/update/trangthai/:slug', async (req, res) => {
    const update = await MuonHang.updateMany({
        data: {
            TrangThai: "Đã Xác Nhận"
        },
        where: {
            NguoiMuon: req.params.slug
        },
    })
    res.json(update)

})







module.exports = router
