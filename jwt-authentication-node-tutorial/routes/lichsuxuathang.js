const router = require('express').Router()
const { PrismaClient } = require('@prisma/client')

const { LichSuXuatHang } = new PrismaClient()


router.post('/update/lichsumuonhangId/:slug', async (req, res) => {
    const update = await LichSuXuatHang.updateMany({
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

    const deleteUser = await LichSuXuatHang.deleteMany({
        where: {
            NguoiMuon: req.params.slug

        },
    })
    res.json(deleteUser)

})

router.post('/delete/id/:id', async (req, res) => {

    const deleteUser = await LichSuXuatHang.delete({
        where: {
            id: Number(req.params.id)

        },
    })
    res.json(deleteUser)

})


router.get('/trangthai/:slug', async (req, res) => {
    const users = await LichSuXuatHang.findMany({
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

router.get('/email/:email', async (req, res) => {
    const users = await LichSuXuatHang.findMany({
        select: {
            id: true,
            Name: true,
            date: true,
            TrangThai: true,
            SoLuong: true,
            xuathang: true

        },
        where: {
            Name: req.params.email
        }
    })
    res.json(users)
})


function getFormattedDate(date) {
    let year = date.getFullYear();
    let month = (1 + date.getMonth()).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');

    return day + '/' + month + '/' + year;
}

router.post('/create', async (req, res) => {

    const users = await LichSuXuatHang.create({
        data: {
            Name: req.body.name,
            TrangThai: "Chưa Xác Nhận",
            date: getFormattedDate(new Date()),
            SoLuong: 1
        },
    })
    res.json(users)
})

router.get('/', async (req, res) => {
    const users = await LichSuXuatHang.findMany({
        select: {
            id: true,
            Name: true,
            date: true,
            TrangThai: true,
            SoLuong: true,
            xuathang: true

        },
    })
    res.json(users)
})

router.post('/update/soluong/:id', async (req, res) => {
    const deleteUser = await LichSuXuatHang.update({
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
    const update = await LichSuXuatHang.updateMany({
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
