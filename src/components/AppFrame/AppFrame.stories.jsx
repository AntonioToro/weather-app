import React from 'react'
import AppFrame from './AppFrame'
import { BrowserRouter as Router } from 'react-router-dom'

export default {
    title: "AppFrame",
    component: AppFrame
}

export const AppFrameExample = () => (
    <Router>
        <AppFrame>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates soluta et adipisci quia eos quasi iste odio earum tenetur error odit eius perferendis a dolorem similique reprehenderit, iure exercitationem voluptate!
        </AppFrame>
    </Router>
)