const router = require('express').Router()
const { PrismaClient } = require('@prisma/client')

const { order_comment } = new PrismaClient()

function getFormattedDate(date) {
    let year = date.getFullYear();
    let month = (1 + date.getMonth()).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');

    return day + '/' + month + '/' + year;
}

router.get('/id/:id', async (req, res) => {
    const users = await order_comment.findMany({
        select: {
            id: true,
            email: true,
            conten: true,
            date: true,
            conten: true,
            transactionsId: true,
            time: true

        },
        where: {
            transactionsId: Number(req.params.id),
        },
    })
    res.json(users)
})

router.post('/update/token/:slug', async (req, res) => {
    const deleteUser = await order_comment.updateMany({
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

    const a = new Date();
    var time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();

    const users = await order_comment.create({
        data: {
            date: getFormattedDate(new Date()),
            time: time,
            email: req.body.email,
            conten: req.body.conten,
            transactionsId: req.body.id
        },
    })
    res.json(users)
})

router.get('/', async (req, res) => {
    const users = await order_comment.findMany({
        select: {
            id: true,
            email: true,
            conten: true,
            date: true,
            conten: true,
            transactionsId: true,
            time: true
        },
    })
    res.json(users)
})






module.exports = router
