const router = require("express").Router();
const { PrismaClient } = require('@prisma/client')

const { customer } = new PrismaClient()

router.post('/delete/:id', async (req, res) => {

    const deleteUser = await customer.delete({
        where: {
            id: Number(req.params.id),
        },
    })
    res.json(deleteUser)

})

router.get('/:slug', async (req, res) => {
    const users = await customer.findMany({
        select: {
            id: true,
            product_id: true,
            customer_name: true,
            customer_email: true,
            order_date: true,
            authorId: true
        },
        where: {
            customer_email: req.params.slug
        }
    })
    res.json(users)
})


router.get('/', async (req, res) => {
    const users = await customer.findMany({
        select: {
            id: true,
            customer_name: true,
            Phone_Number: true,
            Address: true,
            Note: true,
        },
    })
    res.json(users)
})



router.post('/create', async (req, res) => {

    const users = await customer.create({
        data: {
            id: true,
            customer_name: true,
            Phone_Number: true,
            Address: true,
            Note: true,

        },
    })
    res.json(users)
})





router.post('/', async (req, res) => {
    const { email } = req.body;

    const userExists = await customer.findUnique({
        where: {
            email
        },
        select: {
            id: true,
            customer_name: true,
            Phone_Number: true,
            Address: true,
            Note: true,
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
    const deleteUser = await customer.update({
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

    const deleteUser = await customer.update({
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