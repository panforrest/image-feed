import React, { Component } from 'react'
import Dropzone from 'react-dropzone'

class Feed extends Component {

	render(){
		return(
			<div>
                <h2>Current Feed</h2>


                <div>
                    <h4>Upload</h4>

                    <Dropzone />

                </div>
			</div>


		)
	}
}

export default Feed