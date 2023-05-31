import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar'
import './index.scss';

const Layout = () => {
    return (
    <div className="App">
        <Sidebar />
        <div className='page'>
            <span className='tags top-tags'>My Portfolio Project Website</span>

            <Outlet />

            <span className='tags bottom-tags'>
            designed by Cesar Gutierrez
            <br />
            <span className='bottom-tag-html'>Copyright 2023</span>

            </span>
        </div>
    </div>
    )
}

export default Layout
