const router = require("express").Router();
const { PrismaClient } = require('@prisma/client')

const { products } = new PrismaClient()


router.get('/:slug', async (req, res) => {
    const users = await products.findMany({
        select: {
            id: true,
            name: true,
            description: true,
            img: true,
            price: true
        },
        where: {
            email: req.params.slug
        }
    })
    res.json(users)
})


router.get('/', async (req, res) => {
    const users = await products.findMany({
        select: {
            id: true,
            name: true,
            description: true,
            img: true,
            properties: true,
            price: true
        },
    })
    res.json(users)
})



router.post('/', async (req, res) => {
    const { email } = req.body;

    const userExists = await products.findUnique({
        where: {
            email
        },
        select: {
            id: true,
            email: true,
            name: true
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
    const deleteUser = await products.update({
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

    const deleteUser = await products.update({
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