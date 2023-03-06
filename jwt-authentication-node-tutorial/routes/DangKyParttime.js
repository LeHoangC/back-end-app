const router = require('express').Router()
const { PrismaClient } = require('@prisma/client')

const { DangKiLichParttime, NgayDangKy } = new PrismaClient()

router.get('/', async (req, res) => {
    const listLich = await DangKiLichParttime.findMany({
        select: {
            id: true,
            user_id: true,
            status: true,
            startDate: true,
            endDate: true,
            NgayDangKy: true,
            NgayDangKy: true,
        },
    })

    res.send(listLich)
})

router.post('/', async (req, res) => {
    const LichLamViecMoi = await DangKiLichParttime.create({
        data: req.body,
    })

    const start = new Date(req.body.startDate)
    const end = new Date(req.body.endDate)

    const dates = []

    for (let date = start; date <= end; date.setDate(date.getDate() + 1)) {
        dates.push(JSON.stringify(new Date(date)).slice(1, 11))
    }

    for (let i = 1; i <= dates.length; i++) {
        await NgayDangKy.create({
            data: {
                dangky_id: LichLamViecMoi.id,
                date: dates[i - 1],
                sang: false,
                chieu: false,
                toi: false,
            },
        })
    }

    res.json(LichLamViecMoi)
})

module.exports = router
