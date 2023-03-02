const router = require('express').Router()
const { PrismaClient } = require('@prisma/client')

const { khoHangCaNhan } = new PrismaClient()




router.post('/update/:id/:tenhang', async (req, res) => {
    const deleteUser = await khoHangCaNhan.updateMany({
        data: {
            SoLuong: req.body.soluong
        },
        where: {
            TenHang: req.params.tenhang,
            user_id: Number(req.params.id)
        },
    })
    res.json(deleteUser)
})


router.get('/sanpham/:id/:tenhang', async (req, res) => {
    const users = await khoHangCaNhan.findMany({
        select: {
            id: true,
            TenHang: true,
            SoLuong: true,
            TrangThai: true,
            user_id: true,
            TieuChuan: true

        },
        where: {
            user_id: Number(req.params.id),
            TenHang:
            {
                contains: req.params.tenhang
            }
        }
    })
    res.json(users)

})


router.get('/user_id/:user_id', async (req, res) => {
    const users = await khoHangCaNhan.findMany({
        select: {
            id: true,
            TenHang: true,
            SoLuong: true,
            TrangThai: true,
            user_id: true,
            img: true,
            price: true,
            properties: true,
            khohang: true,
            description: true,
            TieuChuan: true
        },

        where: {
            user_id: Number(req.params.user_id),
        }

    })
    res.json(users)
})

router.get('/name/:name', async (req, res) => {
    const users = await khoHangCaNhan.findMany({
        select: {
            id: true,
            TenHang: true,
            SoLuong: true,
            TrangThai: true,
            user_id: true,
            img: true,
            price: true,
            properties: true,
            khohang: true,
            description: true,
            TieuChuan: true
        },

        where: {
            khohang: req.params.name,
        }

    })
    res.json(users)
})

router.get('/', async (req, res) => {
    const users = await khoHangCaNhan.findMany({
        select: {
            id: true,
            TenHang: true,
            SoLuong: true,
            TrangThai: true,
            user_id: true,
            img: true,
            price: true,
            properties: true,
            description: true,
            TieuChuan: true
        },

    })
    res.json(users)
})




module.exports = router
