require('dotenv').config()

const app = require('./app')

const port = process.env.PORT || 7000

app.listen(port, () => {
	console.log(`App listening on port ${port}`)
})

process.on('unhandledRejection', err => {
	console.log(err.name, err.message)
	console.log('UNHANDLED REJECTION! 💥 Shutting down...')
	//close server, then end application
	server.close(() => {
		process.exit(1)
	})
})
