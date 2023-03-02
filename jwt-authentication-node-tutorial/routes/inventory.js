const router = require("express").Router();
const { PrismaClient } = require('@prisma/client')

const { inventory } = new PrismaClient()


// router.get('/userID/:id', async (req, res) => {
//     const users = await inventory.findMany({
//         select: {
//             id: true,
//             name: true,
//             description: true,
//             img: true,
//             properties: true,
//             price: true,
//         },
//         where: {
//             inventory: {
//                 every: {
//                     usersId: Number(req.params.id)
//                 }
//             },
//         },
//     })
//     res.json(users)
// })

// router.post('/update/:id/:id_sanpham', async (req, res) => {
//     const deleteUser = await inventory.updateMany({
//         data: {
//             exist: req.body.soluong
//         },
//         where: {
//             usersId: Number(req.params.id),
//             productsId: Number(req.params.id_sanpham)
//         }
//     })
//     res.json(deleteUser)

// })

router.post('/update/:id/:id_sanpham', async (req, res) => {
    try {
        const deleteUser = await inventory.updateMany(
            {
                data: {
                    exist: req.body.soluong
                },
                where: {
                    usersId: Number(req.params.id),
                    productsId: Number(req.params.id_sanpham)
                }
            }
        )
        res.send('Inventory updated successfully')
    } catch (error) {
        if (error.code === 'P2025') {
            // Handle PrismaClientKnownRequestError here
            res.status(500).send('Failed to update inventory due to a write conflict or a deadlock.')
        } else {
            // Handle other errors here
            res.status(500).send('Failed to update inventory.')
        }
    }
})


router.get('/', async (req, res) => {
    const users = await inventory.findMany({
        select: {
            id: true,
            exist: true,
            usersId: true,
            productsId: true,

        },
    })
    res.json(users)
})



module.exports = router