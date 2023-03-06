const router = require("express").Router();
const { PrismaClient } = require('@prisma/client')

const { customer_history } = new PrismaClient()

router.post('/delete/:id', async (req, res) => {

    const deleteUser = await customer_history.delete({
        where: {
            id: Number(req.params.id),
        },
    })
    res.json(deleteUser)

})

router.get('/:slug', async (req, res) => {
    const users = await customer_history.findMany({
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
    const users = await customer_history.findMany({
        select: {
            id: true,
            // customer_code: true,
            name: true,
            Number: true,
            Address: true,
            Note: true,
            Author_email: true,
        },
    })
    res.json(users)
})



router.post('/create', async (req, res) => {

    const users = await customer_history.create({
        data: {
            name: req.body.name,
            Number: req.body.number,
            Address: req.body.address,
            Note: req.body.note,
            Author_email: req.body.taikhoan,
            transactionsId: req.body.id
        },
    })
    res.json(users)
})





module.exports = router