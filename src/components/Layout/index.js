import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar'
import './index.scss';

const Layout = () => {
    return (
    <div className="App">
        <Sidebar />
        <div className='page'>
            <span className='tags top-tags'>Project Portfolio Website</span>

            <Outlet />

            <span className='tags bottom-tags'>
            Designed October 2023
            <br />

            </span>
        </div>
    </div>
    )
}

export default Layout
