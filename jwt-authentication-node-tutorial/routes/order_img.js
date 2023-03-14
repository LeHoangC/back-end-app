const router = require('express').Router()
const { PrismaClient } = require('@prisma/client')

const { order_img } = new PrismaClient()

function getFormattedDate(date) {
    let year = date.getFullYear();
    let month = (1 + date.getMonth()).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');

    return day + '/' + month + '/' + year;
}

router.get('/id/:id', async (req, res) => {
    const users = await order_img.findMany({
        select: {
            id: true,
            email: true,
            img: true,
            date: true,
            time: true,
            transactionsId: true

        },
        where: {
            transactionsId: Number(req.params.id),
        },
    })
    res.json(users)
})


router.post('/create', async (req, res) => {
    const a = new Date();
    var time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();

    const users = await order_img.create({
        data: {
            date: getFormattedDate(new Date()),
            time: time,
            img: req.body.img,
            email: req.body.email,
            transactionsId: Number(req.body.id)
        },
    })
    res.json(users)
})

router.get('/', async (req, res) => {
    const users = await order_img.findMany({
        select: {
            id: true,
            email: true,
            img: true,
            date: true,
            time: true,
            transactionsId: true
        },
    })
    res.json(users)
})






module.exports = router
