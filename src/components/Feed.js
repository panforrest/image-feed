import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import { APIClient } from '../utils'

class Feed extends Component {

	uploadFile(file){
		console.log('uploadFiles: ')
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