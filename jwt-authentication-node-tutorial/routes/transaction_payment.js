const router = require('express').Router()
const { PrismaClient } = require('@prisma/client')

const { transaction_payment } = new PrismaClient()



router.get('/:slug', async (req, res) => {
    const users = await transaction_payment.findMany({
        select: {
            id: true,
            Name: true,
            Token: true

        },
        where: {
            Name: req.params.slug,
        },
    })
    res.json(users)
})

router.post('/update/token/:slug', async (req, res) => {
    const deleteUser = await transaction_payment.updateMany({
        data: {
            Token: req.body.token,
        },
        where: {
            Name: req.params.slug,
        },
    })
    res.json(deleteUser)
})

router.post('/create', async (req, res) => {

    const users = await transaction_payment.create({
        data: {
            oderhistory_id: req.body.id,
            payment_methods: req.body.payment_methods,
            account_name: req.body.account_name,
            bank_name: req.body.bank_name,
            total_sale: req.body.total_sale,
            account_number: req.body.account_number,
        },
    })
    res.json(users)
})

router.get('/', async (req, res) => {
    const users = await transaction_payment.findMany({
        select: {
            id: true,
            oderhistory_id: true,
            payment_methods: true,
            account_name: true,
            bank_name: true,
            total_sale: true,
            account_number: true,

        },
    })
    res.json(users)
})



module.exports = router
