const router = require('express').Router()

const { PrismaClient } = require('@prisma/client')

const { NgayDangKy } = new PrismaClient()

router.get('/:id', async (req, res) => {
    const list = await NgayDangKy.findMany({
        where: {
            dangky_id: Number(req.params.id),
        },
    })

    res.json(list)
})

router.put('/', async (req, res) => {
    const dates = req.body.dates

    dates.map(async function (item) {
        await NgayDangKy.updateMany({
            data: {
                sang: item.sang,
                chieu: item.chieu,
                toi: item.toi,
            },
            where: {
                date: item.date,
                dangky_id: req.body.dangky_id,
            },
        })
    })
    res.json('Success')
})

module.exports = router
