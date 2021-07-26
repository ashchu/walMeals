import React from 'react';
import Heading from './Heading.js';

function TextSection() {

	return (
		<div id="textSection">

                {/* I hide this in desktop view but i added it because im bad at css */}
                <div id="mobilePictureHolder">
                    <img id="pictureMobile" src={require('./Constants/images/sample.png')} />
                </div>

		        <div id="textHolder">
					Inertia is a non-profit organization working to reimagine the STEM space by revealing the creativity and sparks of color STEM offers.
		        </div>
		        <img id="PictureHolder" src={require('./Constants/images/sample.png')} />

		</div>
	)

}


export default TextSection;
