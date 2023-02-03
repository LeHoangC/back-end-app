const router = require("express").Router();
const { PrismaClient } = require('@prisma/client')

const { orders } = new PrismaClient()



router.get('/:slug', async (req, res) => {
    const users = await orders.findMany({
        select: {
            id: true,
            product_id: true,
            customer_name: true,
            customer_email: true,
            order_date: true,
            authorId: true
        },
        where: {
            email: req.params.slug
        }
    })
    res.json(users)
})


router.get('/', async (req, res) => {
    const users = await orders.findMany({
        select: {
            id: true,
            product_id: true,
            customer_name: true,
            customer_email: true,
            order_date: true,
            authorId: true
        },
    })
    res.json(users)
})



router.post('/create', async (req, res) => {

    const users = await orders.create({
        data: {
            product_id: req.body.id,
            customer_name: req.body.name,
            customer_email: req.body.taikhoan,
            order_date: req.body.date,
            authorId: req.body.id
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

router.post('/update/token/:slug', async (req, res) => {
    const deleteUser = await orders.update({
        data: {
            token: "",
            refreshToken: ""
        },
        where: {
            email: req.params.slug
        }
    })
    res.json(deleteUser)

})

router.post('/update/:slug', async (req, res) => {
    const { email, name, id } = req.body;

    const deleteUser = await orders.update({
        data: {
            token: "Bearer " + req.body.Token,
            refreshToken: "Bearer " + req.body.refreshToken
        },
        where: {
            email: req.params.slug
        }
    })
    res.json(deleteUser)

})


module.exports = router