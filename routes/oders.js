const router = require("express").Router();
const { PrismaClient } = require('@prisma/client')

const { orders } = new PrismaClient()

router.post('/delete/:id', async (req, res) => {

    const deleteUser = await orders.delete({
        where: {
            id: Number(req.params.id),
        },
    })
    res.json(deleteUser)

})

router.get('/:slug', async (req, res) => {
    const users = await orders.findMany({
        select: {
            id: true,
            authorId: true,
            img: true,
            price: true,
            SoLuong: true,
            TrangThai: true,
            TenHang: true
        },
        where: {
            customer_name: req.params.slug
        }
    })
    res.json(users)
})


router.get('/Author_email/:slug', async (req, res) => {
    const users = await orders.findMany({
        select: {
            id: true,
            authorId: true,
            img: true,
            price: true,
            SoLuong: true,
            TrangThai: true,
            TenHang: true
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
            authorId: true,
            img: true,
            price: true,
            SoLuong: true,
            TrangThai: true,
            TenHang: true
        },
    })
    res.json(users)
})



router.post('/create', async (req, res) => {

    const users = await orders.create({
        data: {
            authorId: req.body.id,
            product_id: req.body.id,
            authorId: req.body.id,
            img: req.body.img,
            price: req.body.price,
            SoLuong: 1,
            TrangThai: '',
            TenHang: req.body.tenhang,
            published: true,
            customer_name: req.body.name,
            thongTinThanhToanId: req.body.id,
        },
    })
    res.json(users)
})


router.post('/', async (req, res) => {
    const { email } = req.body;

    const userExists = await orders.findUnique({
        where: {
            email
        },
        select: {
            id: true,
            product_id: true,
            customer_name: true,
            customer_email: true,
            order_date: true,
            authorId: true
        }
    })

    if (userExists) {
        return res.status(400).json({
            msg: "Thất Bại!!"
        })
    }

    const newUser = await user.create({
        data: {
            email
        }
    })
    res.json(newUser)

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
    const { email, name, id } = req.body;

    const deleteUser = await orders.update({
        data: {
            SoLuong: req.body.soluong
        },
        where: {
            id: Number(req.params.id)
        }
    })
    res.json(deleteUser)

})

// router.post('/update/:slug', async (req, res) => {
//     const { email, name, id } = req.body;

//     const deleteUser = await orders.update({
//         data: {
//             token: "Bearer " + req.body.Token,
//             refreshToken: "Bearer " + req.body.refreshToken
//         },
//         where: {
//             email: req.params.slug
//         }
//     })
//     res.json(deleteUser)

// })


module.exports = router