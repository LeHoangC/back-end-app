const router = require("express").Router();
const { PrismaClient } = require('@prisma/client')

const { orders } = new PrismaClient()

router.post('/delete/:id', async (req, res) => {

    const deleteUser = await orders.deleteMany({
        where: {
            id: Number(req.params.id),
        },
    })
    res.json(deleteUser)

})


router.get('/NguoiLam/:slug', async (req, res) => {
    const users = await orders.findMany({
        select: {
            id: true,
            authorId: true,
            img: true,
            price: true,
            SoLuong: true,
            TrangThai: true,
            TenHang: true,
            NguoiLam: true
        },
        where: {
            NguoiLam: req.params.slug
        }
    })
    res.json(users)
})

router.get('/transactions_id/:slug', async (req, res) => {
    const users = await orders.findMany({
        select: {
            id: true,
            product_id: true,
            status: true,

            published: true,
            transactions: true,
            customer_history: true
            // customerId: true,
        },
        where: {
            transactions_id: Number(req.params.slug)
        }
    })
    res.json(users)
})



router.get('/Author_email/:slug', async (req, res) => {
    const users = await orders.findMany({
        select: {
            id: true,
            product_id: true,
            status: true,
            published: true,
            transactions_id: true,
        },
        where: {
            Author_email: req.params.slug
        }
    })
    res.json(users)
})


router.get('/', async (req, res) => {
    const users = await orders.findMany({
        select: {
            id: true,
            product_id: true,
            status: true,
            published: true,
            transactions: true,
        },
    })
    res.json(users)
})



router.post('/create', async (req, res) => {

    const users = await orders.create({
        data: {
            product_id: req.body.idDonHang,
            status: '',
            published: true,
            transactions_id: Number(req.body.id),
            customer_nhapId: Number(req.body.id)
        },
    })
    res.json(users)
})



router.post('/update/:id', async (req, res) => {
    const deleteUser = await orders.update({
        data: {
            TrangThai: "Đã Thanh Toán Bằng " + req.body.trangthai
        },
        where: {
            id: Number(req.params.id)
        }
    })
    res.json(deleteUser)

})

router.post('/update/soluong/:id', async (req, res) => {

    const deleteUser = await orders.update({
        data: {
            quantity: req.body.soluong
        },
        where: {
            id: Number(req.params.id)
        }
    })
    res.json(deleteUser)

})




module.exports = router