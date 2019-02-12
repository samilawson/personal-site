import React from 'react'
import {Redirect} from 'react-router-dom'

import Auth from '../components/Auth'

const AuthPage = ({authType, isAuthenticated}) => {
    if(isAuthenticated) return <Redirect to="/" />

    return (
        <div>
            <Auth authType={authType} />
        </div>
    )
}

export default AuthPage;