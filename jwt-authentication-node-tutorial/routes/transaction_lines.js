const router = require('express').Router()
const { PrismaClient } = require('@prisma/client')

const { transaction_lines } = new PrismaClient()

router.post('/delete/:id', async (req, res) => {

    const deleteUser = await transaction_lines.delete({
        where: {
            id: Number(req.params.id),
        },
    })
    res.json(deleteUser)

})

router.get('/oderhistory_id/:id', async (req, res) => {
    const users = await transaction_lines.findMany({
        select: {
            id: true,
            oderhistory_id: true,
            name: true,
            number_of: true,
            price: true,
            img: true,
            total_sale: true,
            product_id: true

        },
        where: {
            oderhistory_id: Number(req.params.id),
        },
    })
    res.json(users)
})



router.post('/create', async (req, res) => {

    const users = await transaction_lines.create({
        data: {
            oderhistory_id: req.body.id,
            name: req.body.name,
            number_of: 1,
            img: req.body.img,
            price: req.body.price,
            total_sale: req.body.total_sale,
            transaction_id: req.body.id,
            product_id: req.body.idDonHang,
        },
    })
    res.json(users)
})

router.get('/', async (req, res) => {
    const users = await transaction_lines.findMany({
        select: {
            id: true,
            oderhistory_id: true,
            number_of: true,
            price: true,
            img: true,
            total_sale: true,
            product_id: true
        },
    })
    res.json(users)
})

router.post('/update/soluong/:id', async (req, res) => {

    const deleteUser = await transaction_lines.update({
        data: {
            number_of: req.body.soluong
        },
        where: {
            id: Number(req.params.id)
        }
    })
    res.json(deleteUser)

})



module.exports = router
