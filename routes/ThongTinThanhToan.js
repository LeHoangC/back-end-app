const router = require("express").Router();
const { PrismaClient } = require('@prisma/client')

const { thongTinThanhToan } = new PrismaClient()
const prisma = new PrismaClient();

router.post('/delete/:id', async (req, res) => {

    const deleteUser = await thongTinThanhToan.delete({
        where: {
            id: Number(req.params.id),
        },
    })
    res.json(deleteUser)

})

router.get('/:slug', async (req, res) => {
    const users = await thongTinThanhToan.findMany({
        select: {
            id: true,
            product_id: true,
            NguoiLam: true,
            KhachHang: true,
            order_date: true,
            authorId: true,
            order_date: true,
            Phone_Number: true,
            Address: true,
            TrangThai: true,
        },
        where: {
            TrangThai: req.params.slug
        }
    })
    res.json(users)



})


router.get('/Author_email/:slug', async (req, res) => {
    const users = await thongTinThanhToan.findMany({
        select: {
            id: true,
            product_id: true,
            NguoiLam: true,
            KhachHang: true,
            order_date: true,
            authorId: true,
            order_date: true,
            Phone_Number: true,
            Address: true,
            img: true,
            price: true,
            SoLuong: true,
            TrangThai: true,
            GiamGia: true,
            Thue: true,
            ChuaGiamGia: true,
            GiamGiaCombo: true,
            TongTienSauGiamGia: true
        },
        where: {
            Author_email: req.params.slug
        }
    })
    res.json(users)
})


router.get('/', async (req, res) => {
    const usersWithPosts = await thongTinThanhToan.findMany({
        include: {
            orders: true,
        },
    })
    res.json(usersWithPosts)
})



router.post('/create', async (req, res) => {

    const users = await thongTinThanhToan.create({
        data: {
            id: req.body.id,
            product_id: req.body.id,
            NguoiLam: req.body.taikhoan,
            KhachHang: req.body.name,
            order_date: new Date(),
            Phone_Number: req.body.number,
            Address: req.body.address,
            authorId: req.body.id,
            TrangThai: 'Chưa Thanh Toán!!!',
            TongTienChuaGiamGia: 0,
            Thue: 0,
            GiamGiaCombo: 0,
            TongTienSauGiam: 0
        },
    })
    res.json(users)
})


router.post('/', async (req, res) => {
    const { email } = req.body;

    const userExists = await thongTinThanhToan.findUnique({
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
    const deleteUser = await thongTinThanhToan.update({
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

    const deleteUser = await thongTinThanhToan.update({
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
    const deleteUser = await thongTinThanhToan.update({
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