const router = require('express').Router()
const { PrismaClient } = require('@prisma/client')

const { ChamCong } = new PrismaClient()




router.get('/:email', async (req, res) => {
    const users = await ChamCong.findMany({
        select: {
            id: true,
            MaQR: true,
            Email: true,
            GioVao: true,
            GioRa: true,
            date: true,
        },
        where: {
            Email: req.params.email
        }
    })
    res.json(users)
})

router.get('/', async (req, res) => {
    const users = await ChamCong.findMany({
        select: {
            id: true,
            MaQR: true,
            Email: true,
            GioVao: true,
            GioRa: true,
            date: true,
        },
    })
    res.json(users)
})



router.post('/', async (req, res) => {
    const { email } = req.body

    const userExists = await chamcong.findUnique({
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

function getFormattedDate(date) {
    let year = date.getFullYear();
    let month = (1 + date.getMonth()).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');

    return day + '/' + month + '/' + year;
}
router.post('/create', async (req, res) => {
    const deleteUser = await ChamCong.create({
        data: {
            MaQR: req.body.maqr,
            Email: req.body.email,
            GioVao: req.body.giovao,
            GioRa: '',
            date: getFormattedDate(new Date()),
            user_id: Number(req.body.id)
        },
    })
    res.json(deleteUser)
})

router.post('/update/:id', async (req, res) => {
    const a = new Date();
    var time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();

    const deleteUser = await ChamCong.update({
        data: {
            GioRa: time
        },
        where: {
            id: Number(req.params.id),
        },
    })
    res.json(deleteUser)
})

router.post('/update/:slug', async (req, res) => {
    const { email, name, id } = chamcong.body

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
