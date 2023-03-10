const router = require("express").Router();
const { PrismaClient } = require('@prisma/client')

const { products } = new PrismaClient()


router.get('/userID/:id', async (req, res) => {
    const users = await products.findMany({
        select: {
            id: true,
            name: true,
            description: true,
            img: true,
            properties: true,
            price: true,
        },
        where: {
            inventory: {
                every: {
                    usersId: Number(req.params.id)
                }
            },
        },
    })
    res.json(users)
})

router.get('/name/:name', async (req, res) => {
    const users = await products.findMany({
        select: {
            id: true,
            name: true,
            description: true,
            img: true,
            properties: true,
            price: true,
        },
        where: {
            name:
            {
                contains: req.params.name
            }
        },
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
            price: true,
            inventory: true
        },
    })
    res.json(users)
})



module.exports = router