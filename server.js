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
app.use('/api/customer_re/', require('./routes/customer_re'))





app.get('/posts', verifyToken, (req, res) => {
	res.json(posts.filter(post => post.email === req.email))
})


const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
