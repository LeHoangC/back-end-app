const router = require('express').Router()
const { PrismaClient } = require('@prisma/client')

const { MuonHang } = new PrismaClient()


router.post('/update/lichsumuonhangId/:slug', async (req, res) => {
    const update = await MuonHang.updateMany({
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
            TenHang: req.body.tenhang,
            SoLuong: req.body.soluong,
            TrangThai: "Chưa Xác Nhận",
            date: new Date(),
            user_id: req.body.id,
            produce: req.body.id,
            NguoiMuon: req.body.nguoimuon
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
            date: true,
            NguoiMuon: true,
            user_id: true,
            lichSuMuonHangId: true
        },
    })
    res.json(users)
})

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






router.post('/update/token/:slug', async (req, res) => {
    const deleteUser = await MuonHang.update({
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
    const deleteUser = await MuonHang.update({
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

    const deleteUser = await MuonHang.update({
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
