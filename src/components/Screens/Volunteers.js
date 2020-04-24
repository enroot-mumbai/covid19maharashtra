import React from 'react'
import {selectedLanguage} from './../../utils/setLanguage'
export default function Services() {
    return (
        <div className="volunteersContainer">
            <h1> {selectedLanguage.helpNeededMsg} </h1>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfyQYBnEYGnF30_GB6VZ44QV5j26g1K3vqdphu1pWRCYuFy7g/viewform?embedded=true" width="300" height="1508" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            
        </div>
    )
}
