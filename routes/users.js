const router = require('express').Router()
const { PrismaClient } = require('@prisma/client')

const { user } = new PrismaClient()



router.get('/:slug', async (req, res) => {
    const users = await user.findMany({
        select: {
            id: true,
            email: true,
            pass: true,
            img: true,
            token: true,
            refreshToken: true,
            chamcong: true,
            khohangcanhan: true
        },
        where: {
            email: req.params.slug,
        },
    })
    res.json(users)
})

router.get('/', async (req, res) => {
    const users = await user.findMany({
        select: {
            id: true,
            email: true,
            pass: true,
            token: true,
            refreshToken: true,
            chamcong: true,
            khohangcanhan: true
        },
    })
    res.json(users)
})

router.post('/', async (req, res) => {
    const { email } = req.body

    const userExists = await user.findUnique({
        where: {
            email,
        },
        select: {
            id: true,
            email: true,
            name: true,
        },
    })

    if (userExists) {
        return res.status(400).json({
            msg: 'Thất Bại!!',
        })
    }

    const newUser = await user.create({
        data: {
            email,
        },
    })
    res.json(newUser)
})

router.post('/update/token/:slug', async (req, res) => {
    const deleteUser = await user.update({
        data: {
            token: '',
            refreshToken: '',
        },
        where: {
            email: req.params.slug,
        },
    })
    res.json(deleteUser)
})

router.post('/update/img/:slug', async (req, res) => {
    const deleteUser = await user.update({
        data: {
            img: req.body.img
        },
        where: {
            email: req.params.slug,
        },
    })
    res.json(deleteUser)
})

router.post('/update/:slug', async (req, res) => {
    const { email, name, id } = req.body

    const deleteUser = await user.update({
        data: {
            token: 'Bearer ' + req.body.Token,
            refreshToken: 'Bearer ' + req.body.refreshToken,
        },
        where: {
            email: req.params.slug,
        },
    })
    res.json(deleteUser)
})



module.exports = router
