import superagent from 'superagent'
import Promise from 'bluebird'

export default {
	get: (url, params) => {
		return new Promise((resolve, reject) => {

		})

	},

	uploadFile: (file) => {
		// console.log
		superagent
		.get('https://media-service.appspot.com/api/upload')
		.query(null)
		.set('Accept', 'application/json')
		.end((err, response) => {

			const payload = response.body
			console.log(JSON.stringify(payload))

			const upload = payload.upload
		})
	}
}