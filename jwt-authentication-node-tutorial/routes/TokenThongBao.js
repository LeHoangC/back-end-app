const router = require('express').Router()
const { PrismaClient } = require('@prisma/client')

const { TokenThongBao } = new PrismaClient()



router.get('/:slug', async (req, res) => {
    const users = await TokenThongBao.findMany({
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
    const deleteUser = await TokenThongBao.updateMany({
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

    const users = await TokenThongBao.create({
        data: {
            Name: req.body.taikhoan,
            Token: req.body.token,
        },
    })
    res.json(users)
})

router.get('/', async (req, res) => {
    const users = await TokenThongBao.findMany({
        select: {
            id: true,
            Name: true,
            Token: true
        },
    })
    res.json(users)
})

router.post('/', async (req, res) => {
    const { email } = req.body

    const TokenThongBaoExists = await TokenThongBao.findUnique({
        where: {
            email,
        },
        select: {
            id: true,
            email: true,
            name: true,
        },
    })

    if (TokenThongBaoExists) {
        return res.status(400).json({
            msg: 'Thất Bại!!',
        })
    }

    const newTokenThongBao = await TokenThongBao.create({
        data: {
            email,
        },
    })
    res.json(newTokenThongBao)
})






module.exports = router
