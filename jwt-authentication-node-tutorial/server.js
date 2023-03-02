require('dotenv').config()

const express = require('express')
const jwt = require('jsonwebtoken')
const verifyToken = require('./middleware/auth')

const app = express()

app.use(express.json())

// database

const posts = [
	{
		userId: 1,
		post: 'post henry',
		email: 'quy'
	},
	{
		userId: 2,
		post: 'post jim',
		email: 'cuong'
	},
	{
		userId: 1,
		post: 'post henry 2',
		email: 'quy'

	}
]

// app
app.use('/api/users', require('./routes/users'))
app.use('/api/products', require('./routes/products'))
app.use('/api/orders/', require('./routes/oders'))
app.use('/api/customer/', require('./routes/customer'))
app.use('/api/customer_re/', require('./routes/customer_history'))
app.use('/api/thanhtoan/', require('./routes/transactions'))
app.use('/api/chamcong/', require('./routes/ChamCong'))
app.use('/api/muonhang/', require('./routes/MuonHang'))
app.use('/api/lichsumuonhang/', require('./routes/LichSuMuonHang'))
app.use('/api/muonhangnhap/', require('./routes/MuonHang_Nhap'))
app.use('/api/khocanhan/', require('./routes/KhoCaNhan'))
app.use('/api/khotong/', require('./routes/KhoTong'))
app.use('/api/tokenthongbao/', require('./routes/TokenThongBao'))
app.use('/api/transaction_payment/', require('./routes/transaction_payment'))
app.use('/api/transaction_lines/', require('./routes/transaction_lines'))
app.use('/api/inventory/', require('./routes/inventory'))




// app.get('/posts', verifyToken, (req, res) => {
// 	res.json(posts.filter(post => post.email === req.email))
// })


const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
