import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import { APIClient } from '../utils'

class Feed extends Component {

	uploadFile(file){
		console.log('uploadFiles: ')
        APIClient.uploadFile(file[0])
        .then(response => {
        	console.log('response: '+JSON.stringify(response))
        })
        .catch(err => {
        	console.log('err: '+JSON.stringify(err))
        })
	}

	render(){
		return(
			<div>
                <h2>Current Feed</h2>


                <div>
                    <h4>Upload</h4>

                    <Dropzone onDrop={this.uploadFile.bind(this)} />

                </div>
			</div>


		)
	}
}

export default Feed