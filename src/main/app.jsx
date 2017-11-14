import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import Routes from './routes'
import Menu from '../template/menu'


export default props =>(
    <div className='container'>
        <Menu />
        <Routes />
    </div>
)