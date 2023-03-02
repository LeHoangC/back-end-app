const router = require("express").Router();
const { PrismaClient } = require('@prisma/client')

const { transactions } = new PrismaClient()
const prisma = new PrismaClient();

router.post('/delete/:id', async (req, res) => {

    const deleteUser = await transactions.delete({
        where: {
            id: Number(req.params.id),
        },
    })
    res.json(deleteUser)

})

router.get('/:slug', async (req, res) => {
    const users = await transactions.findMany({
        select: {
            id: true,
            order_date: true,
            TrangThai: true,
            TongTienChuaGiamGia: true,
            GiamGiaCombo: true,
            TongTienSauGiam: true,
            orders: true,
            transaction_payment: true,
            transaction_lines: true,
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

router.get('/code_bill/:slug', async (req, res) => {
    const users = await transactions.findMany({
        select: {
            id: true,
            order_date: true,
            code_bill: true,
            nguoithuchien: true,
            status: true,
            total_amount_after_discount: true,
            VAT: true,
            combo_discount: true,
            total_amount_without_discount: true,
            discount: true,
            orders: true,
            users: true,
            transaction_payment: true,
            transaction_lines: true
        },
        where: {
            code_bill: req.params.slug
        }
    })
    res.json(users)

})


router.get('/NguoiLam/:slug/:TrangThai', async (req, res) => {
    const users = await transactions.findMany({
        select: {
            id: true,
            order_date: true,
            code_bill: true,
            nguoithuchien: true,
            status: true,
            total_amount_after_discount: true,
            VAT: true,
            combo_discount: true,
            total_amount_without_discount: true,
            discount: true,
            orders: true,
            users: true,
            transaction_payment: true,
            transaction_lines: true

        },
        where: {
            nguoithuchien: req.params.slug,
            status:
            {
                contains: req.params.TrangThai
            }
        }
    })
    res.json(users)

})

router.get('/NguoiLam/:slug', async (req, res) => {
    const users = await transactions.findMany({
        select: {
            id: true,
            order_date: true,
            code_bill: true,
            nguoithuchien: true,
            status: true,
            total_amount_after_discount: true,
            VAT: true,
            combo_discount: true,
            total_amount_without_discount: true,
            discount: true,
            orders: true,
            users: true,
            transaction_payment: true,
            transaction_lines: true

        },
        where: {
            nguoithuchien: req.params.slug
        }
    })
    res.json(users)

})



router.get('/NguoiLam/:slug/sdt/:number', async (req, res) => {
    const users = await transactions.findMany({
        select: {
            id: true,
            order_date: true,
            code_bill: true,
            nguoithuchien: true,
            status: true,
            total_amount_after_discount: true,
            VAT: true,
            combo_discount: true,
            total_amount_without_discount: true,
            discount: true,
            orders: true,
            users: true,
            transaction_payment: true,
            transaction_lines: true
        },
        where: {
            nguoithuchien: req.params.slug,
            Phone_Number:
            {
                contains: req.params.number
            }
        }
    })
    res.json(users)

})


router.get('/id/:id', async (req, res) => {
    const users = await transactions.findMany({
        select: {
            id: true,
            order_date: true,
            code_bill: true,
            nguoithuchien: true,
            status: true,
            total_amount_after_discount: true,
            VAT: true,
            combo_discount: true,
            total_amount_without_discount: true,
            discount: true,
            orders: true,
            users: true,
            transaction_payment: true,
            transaction_lines: true
        },
        where: {
            id: Number(req.params.id)
        }
    })
    res.json(users)
})


router.get('/', async (req, res) => {
    const usersWithPosts = await transactions.findMany({
        select: {
            id: true,
            order_date: true,
            code_bill: true,
            nguoithuchien: true,
            status: true,
            total_amount_after_discount: true,
            VAT: true,
            combo_discount: true,
            total_amount_without_discount: true,
            discount: true,
            orders: true,
            users: true,
            transaction_payment: true,
            transaction_lines: true
        },
    })
    res.json(usersWithPosts)
})



router.post('/create', async (req, res) => {

    const users = await transactions.create({
        data: {
            id: Number(req.body.id),
            code_bill: 'HD' + req.body.id,
            nguoithuchien: req.body.taikhoan,
            order_date: new Date(),
            status: 'Chưa Thanh Toán!!!',
            total_amount_after_discount: 0,
            VAT: 0,
            combo_discount: 0,
            total_amount_without_discount: 0,
            discount: 0
        },
    })
    res.json(users)
})


router.post('/', async (req, res) => {
    const { email } = req.body;

    const userExists = await transactions.findUnique({
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


router.post('/update/soluong/:id', async (req, res) => {
    const { email, name, id } = req.body;

    const deleteUser = await transactions.update({
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
    const deleteUser = await transactions.updateMany({
        data: {
            status: "Đã Thanh Toán Bằng " + req.body.trangthai,
            total_amount_after_discount: req.body.tongtien,
            discount: (req.body.tongtien / 100) * 10,
            total_amount_without_discount: req.body.tongtien / 100,
            combo_discount: 0,
            VAT: 0

        },
        where: {
            id: Number(req.params.id)
        }
    })
    res.json(deleteUser)

})


module.exports = router