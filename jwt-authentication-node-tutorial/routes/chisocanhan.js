const router = require('express').Router()
const { PrismaClient } = require('@prisma/client')

const { ChiSoCaNhan } = new PrismaClient()

router.post('/update/ngaycong/:slug', async (req, res) => {
    const deleteUser = await ChiSoCaNhan.updateMany({
        data: {
            ngay_cong: Number(req.body.chamcong)
        },
        where: {
            email: req.params.slug
        }
    })
    res.json(deleteUser)

})

router.post('/update/giatritb/:slug', async (req, res) => {
    const deleteUser = await ChiSoCaNhan.updateMany({
        data: {
            gia_tri_TB_hien_tai: Number(req.body.giatrittb)
        },
        where: {
            email: req.params.slug
        }
    })
    res.json(deleteUser)

})

router.post('/update/luong/:slug', async (req, res) => {
    const deleteUser = await ChiSoCaNhan.updateMany({
        data: {
            luong_tam_tinh: Number(req.body.luong)
        },
        where: {
            email: req.params.slug
        }
    })
    res.json(deleteUser)

})

router.get('/email/:email', async (req, res) => {
    const users = await ChiSoCaNhan.findMany({
        select: {
            id: true,
            luong_tam_tinh: true,
            email: true,
            ngay_cong: true,
            chiet_khau_thay_loi: true,
            chiet_khau_don_them: true,
            so_don_phat_sinh: true,
            gia_tri_TB_hien_tai: true,
            gia_tri_TB_yeu_cau: true,
            gia_tri_TB_con_thieu: true,
            tong_so_tien_Con_thieu: true,
            so_don_ve_sinh: true,
            ti_le_ve_sinh_TT: true,
            OLE: true,
            so_KM_TB_don: true,
            time_TB: true,
        },
        where: {
            email: req.params.email
        }
    })
    res.json(users)
})

router.get('/', async (req, res) => {
    const users = await ChiSoCaNhan.findMany({
        select: {
            id: true,
            luong_tam_tinh: true,
            ngay_cong: true,
            chiet_khau_thay_loi: true,
            chiet_khau_don_them: true,
            so_don_phat_sinh: true,
            gia_tri_TB_hien_tai: true,
            gia_tri_TB_yeu_cau: true,
            gia_tri_TB_con_thieu: true,
            tong_so_tien_Con_thieu: true,
            so_don_ve_sinh: true,
            ti_le_ve_sinh_TT: true,
            OLE: true,
            so_KM_TB_don: true,
            time_TB: true,
        },
    })
    res.json(users)
})




module.exports = router
