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
            customer_code: true,
            customer_name: true,
            phone_number: true,
            Address: true,
            Note: true,
        },
        where: {
            customer_name: req.params.slug
        }
    })
    res.json(users)
})


router.get('/', async (req, res) => {
    const users = await customer.findMany({
        select: {
            id: true,
            customer_code: true,
            customer_name: true,
            phone_number: true,
            Address: true,
            Note: true,
        },
    })
    res.json(users)
})





module.exports = router