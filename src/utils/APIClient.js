import superagent from 'superagent'
import Promise from 'bluebird'

export default {
	get: (url, params) => {
		return new Promise((resolve, reject) => {

		})

	},

	uploadFile: (file) => {
		return new Promise((resolve, reject) => {
			// console.log
			superagent
			.get('https://media-service.appspot.com/api/upload')
			.query(null)
			.set('Accept', 'application/json')
			.end((err, response) => {

				const payload = response.body
				console.log(JSON.stringify(payload))

				const upload = payload.upload

				var uploadRequest = superagent.post(upload)
				uploadRequest.attach('file', file)

				uploadRequest.end((err, resp) => {
					if (err){
						console.log('UPLOAD ERROR: '+JSON.stringify(err))
						reject(err)
						return
					}
					resolve(resp.body)
				})
			})			
		})

	}
}