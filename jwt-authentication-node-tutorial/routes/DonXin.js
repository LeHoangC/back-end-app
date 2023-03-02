const router = require('express').Router()
const { PrismaClient } = require('@prisma/client')

const { DonXin } = new PrismaClient()

router.get('/', async (req, res) => {
    try {
        const data = await DonXin.findMany()
        res.status(200).json(data)
    } catch (error) {
        throw error
    }
})

router.post('/', async (req, res) => {
    try {
        const phieumoi = await DonXin.create({
            data: req.body,
        })
        res.json({
            msg: phieumoi,
        })
    } catch (error) {
        console.log(error)
    }
})

router.put('/:id', async (req, res) => {
    try {
        const donxin = await DonXin.update({
            where: {
                id: Number(req.params.id),
            },
            data: { status: req.body.status },
        })
        res.json(donxin)
    } catch (error) {
        console.log(error)
    }
})

router.get('/:name', async (req, res) => {
    try {
        const donxin = await DonXin.findMany({
            where: {
                name: req.params.name,
            },
        })
        res.json(donxin)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router
