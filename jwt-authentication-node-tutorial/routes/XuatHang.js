const router = require('express').Router()
const { PrismaClient } = require('@prisma/client')

const { XuatHang } = new PrismaClient()


router.post('/update/lichsumuonhangId/:slug', async (req, res) => {
    const update = await XuatHang.updateMany({
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

    const deleteUser = await XuatHang.deleteMany({
        where: {
            NguoiMuon: req.params.slug

        },
    })
    res.json(deleteUser)

})

router.post('/delete/id/:id', async (req, res) => {

    const deleteUser = await XuatHang.delete({
        where: {
            id: Number(req.params.id)

        },
    })
    res.json(deleteUser)

})

router.get('/:slug', async (req, res) => {
    const users = await XuatHang.findMany({
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
    const users = await XuatHang.findMany({
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

function getFormattedDate(date) {
    let year = date.getFullYear();
    let month = (1 + date.getMonth()).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');

    return day + '/' + month + '/' + year;
}

router.post('/create', async (req, res) => {

    const users = await XuatHang.create({
        data: {
            name: req.body.name,
            date: getFormattedDate(new Date()),
            TenHang: req.body.tenhang,
            SoLuong: req.body.soluong,
            price: req.body.price,
            lichSuXuatHangId: Number(req.body.id)

        },
    })
    res.json(users)
})

router.get('/', async (req, res) => {
    const users = await XuatHang.findMany({
        select: {
            id: true,
            TenHang: true,
            date: true,
            SoLuong: true,
            price: true,
            name: true,
            lichSuXuatHangId: true

        },
    })
    res.json(users)
})

router.post('/update/soluong/:id', async (req, res) => {
    const deleteUser = await XuatHang.update({
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
    const update = await XuatHang.updateMany({
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
