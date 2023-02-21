const router = require("express").Router();
const { PrismaClient } = require('@prisma/client')

const { lichSuMuonHang } = new PrismaClient()
const prisma = new PrismaClient();

router.post('/delete/:id', async (req, res) => {

    const deleteUser = await lichSuMuonHang.delete({
        where: {
            id: Number(req.params.id),
        },
    })
    res.json(deleteUser)

})

router.get('/:slug', async (req, res) => {
    const users = await lichSuMuonHang.findMany({
        select: {
            id: true,
            TrangThai: true,
            date: true,
            NguoiMuon: true,
            email: true,
            muonhang_id: true,

        },
        where: {
            TrangThai:
            {
                contains: req.params.slug
            }
        }
    })
    res.json(users)

})

router.get('/khachhang/:slug', async (req, res) => {
    const users = await lichSuMuonHang.findMany({
        select: {
            id: true,
            TrangThai: true,
            date: true,
            NguoiMuon: true,
            email: true,
            muonhang_id: true,
        },
        where: {
            KhachHang: req.params.slug
        }
    })
    res.json(users)

})


router.get('/NguoiLam/:slug/:TrangThai', async (req, res) => {
    const users = await lichSuMuonHang.findMany({
        select: {
            id: true,
            TrangThai: true,
            date: true,
            NguoiMuon: true,
            email: true,
            muonhang_id: true,

        },
        where: {
            NguoiLam: req.params.slug,
            TrangThai:
            {
                contains: req.params.TrangThai
            }
        }
    })
    res.json(users)

})

router.get('/NguoiLam/:slug', async (req, res) => {
    const users = await lichSuMuonHang.findMany({
        select: {
            id: true,
            TrangThai: true,
            date: true,
            NguoiMuon: true,
            email: true,
            muonhang_id: true,

        },
        where: {
            NguoiLam: req.params.slug
        }
    })
    res.json(users)

})



router.get('/NguoiLam/:slug/sdt/:number', async (req, res) => {
    const users = await lichSuMuonHang.findMany({
        select: {
            id: true,
            TrangThai: true,
            date: true,
            NguoiMuon: true,
            email: true,
            muonhang_id: true,
        },
        where: {
            NguoiLam: req.params.slug,
            Phone_Number:
            {
                contains: req.params.number
            }
        }
    })
    res.json(users)

})


router.get('/id/:id', async (req, res) => {
    const users = await lichSuMuonHang.findMany({
        select: {
            id: true,
            TrangThai: true,
            date: true,
            NguoiMuon: true,
            email: true,
            muonhang_id: true,
        },
        where: {
            id: Number(req.params.id)
        }
    })
    res.json(users)
})


router.get('/', async (req, res) => {
    const usersWithPosts = await lichSuMuonHang.findMany({
        select: {
            id: true,
            TrangThai: true,
            date: true,
            NguoiMuon: true,
            email: true,
            MuonHang: true,
        },
    })
    res.json(usersWithPosts)
})



router.post('/create', async (req, res) => {

    const users = await lichSuMuonHang.create({
        data: {
            TrangThai: req.body.trangthai,
            date: new Date(),
            email: req.body.nguoimuon,
            NguoiMuon: req.body.taikhoan
        },
    })
    res.json(users)
})


router.post('/', async (req, res) => {
    const { email } = req.body;

    const userExists = await lichSuMuonHang.findUnique({
        where: {
            email
        },
        select: {
            id: true,
            product_id: true,
            customer_name: true,
            customer_email: true,
            order_date: true,
            authorId: true
        }
    })

    if (userExists) {
        return res.status(400).json({
            msg: "Thất Bại!!"
        })
    }

    const newUser = await user.create({
        data: {
            email
        }
    })
    res.json(newUser)

})

router.post('/update/token/:slug', async (req, res) => {
    const deleteUser = await lichSuMuonHang.update({
        data: {
            token: "",
            refreshToken: ""
        },
        where: {
            email: req.params.slug
        }
    })
    res.json(deleteUser)

})

router.post('/update/soluong/:id', async (req, res) => {
    const { email, name, id } = req.body;

    const deleteUser = await lichSuMuonHang.update({
        data: {
            SoLuong: req.body.soluong
        },
        where: {
            id: Number(req.params.id)
        }
    })
    res.json(deleteUser)

})

router.post('/update/:id', async (req, res) => {
    const deleteUser = await lichSuMuonHang.update({
        data: {
            TrangThai: "Đã Thanh Toán Bằng " + req.body.trangthai,
            TongTienSauGiam: req.body.tongtien,
            Thue: (req.body.tongtien / 100) * 10,
            TongTienChuaGiamGia: req.body.tongtien / 100,
            GiamGiaCombo: 0

        },
        where: {
            id: Number(req.params.id)
        }
    })
    res.json(deleteUser)

})


module.exports = router