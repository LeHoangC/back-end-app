const router = require("express").Router();
const { PrismaClient } = require('@prisma/client')

const { customer_nhap } = new PrismaClient()

router.post('/delete/:id', async (req, res) => {

    const deleteUser = await customer_nhap.delete({
        where: {
            id: Number(req.params.id),
        },
    })
    res.json(deleteUser)

})

router.get('/:slug', async (req, res) => {
    const users = await customer_nhap.findMany({
        select: {
            id: true,
            name: true,
            Number: true,
            Address: true,
            Note: true,
            Author_email: true

        },
        where: {
            Author_email: req.params.slug
        }
    })
    res.json(users)
})


router.get('/', async (req, res) => {
    const users = await customer_nhap.findMany({
        select: {
            id: true,
            // customer_code: true,
            name: true,
            Number: true,
            Address: true,
            Note: true,
            Author_email: true,
            orders: true

        },
    })
    res.json(users)
})



router.post('/create', async (req, res) => {

    const users = await customer_nhap.create({
        data: {
            name: req.body.name,
            Number: req.body.number,
            Address: req.body.address,
            Note: req.body.note,
            Author_email: req.body.taikhoan
        },
    })
    res.json(users)
})





router.post('/', async (req, res) => {
    const { email } = req.body;

    const userExists = await customer_nhap.findUnique({
        where: {
            email
        },
        select: {
            id: true,
            name: true,
            Number: true,
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
    const deleteUser = await customer_nhap.update({
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

    const deleteUser = await customer_nhap.update({
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