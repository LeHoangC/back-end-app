const router = require('express').Router()
const { PrismaClient } = require('@prisma/client')

const { MuonHangNhap } = new PrismaClient()


router.post('/update/lichsumuonhangId/:slug', async (req, res) => {
    const update = await MuonHangNhap.updateMany({
        data: {
            lichSuMuonHangId: req.body.id
        },
        where: {
            NguoiMuon: req.params.slug
        },
    })
    res.json(update)

})

router.post('/delete/:slug', async (req, res) => {

    const deleteUser = await MuonHangNhap.deleteMany({
        where: {
            NguoiMuon: req.params.slug

        },
    })
    res.json(deleteUser)

})

router.post('/delete/id/:id', async (req, res) => {

    const deleteUser = await MuonHangNhap.delete({
        where: {
            id: Number(req.params.id)

        },
    })
    res.json(deleteUser)

})

router.get('/:slug', async (req, res) => {
    const users = await MuonHangNhap.findMany({
        select: {
            id: true,
            TenHang: true,
            SoLuong: true,
            TrangThai: true,
            date: true,
            NguoiMuon: true,
        },
        where: {
            NguoiMuon: req.params.slug,
        },
    })
    res.json(users)
})

router.get('/trangthai/:slug', async (req, res) => {
    const users = await MuonHangNhap.findMany({
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

    const users = await MuonHangNhap.create({
        data: {
            TenHang: req.body.name,
            SoLuong: req.body.soluong,
            TrangThai: "Chưa Xác Nhận",
            date: new Date(),
            NguoiMuon: req.body.nguoimuon

        },
    })
    res.json(users)
})

router.get('/', async (req, res) => {
    const users = await MuonHangNhap.findMany({
        select: {
            id: true,
            TenHang: true,
            SoLuong: true,
            TrangThai: true,
            date: true,
            NguoiMuon: true,

        },
    })
    res.json(users)
})

router.post('/update/soluong/:id', async (req, res) => {
    const deleteUser = await MuonHangNhap.update({
        data: {
            SoLuong: req.body.soluong
        },
        where: {
            id: Number(req.params.id)
        }
    })
    res.json(deleteUser)

})

router.post('/update/trangthai/:slug', async (req, res) => {
    const update = await MuonHangNhap.updateMany({
        data: {
            TrangThai: "Đã Xác Nhận"
        },
        where: {
            NguoiMuon: req.params.slug
        },
    })
    res.json(update)

})






router.post('/update/token/:slug', async (req, res) => {
    const deleteUser = await MuonHangNhap.update({
        data: {
            token: '',
            refreshToken: '',
        },
        where: {
            email: req.params.slug,
        },
    })
    res.json(deleteUser)
})

router.post('/update/img/:slug', async (req, res) => {
    const deleteUser = await MuonHangNhap.update({
        data: {
            img: req.body.img
        },
        where: {
            email: req.params.slug,
        },
    })
    res.json(deleteUser)
})

router.post('/update/:slug', async (req, res) => {
    const { email, name, id } = req.body

    const deleteUser = await MuonHangNhap.update({
        data: {
            token: 'Bearer ' + req.body.Token,
            refreshToken: 'Bearer ' + req.body.refreshToken,
        },
        where: {
            email: req.params.slug,
        },
    })
    res.json(deleteUser)
})



module.exports = router
