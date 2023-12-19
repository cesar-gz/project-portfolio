import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar'
import './index.scss';

const Layout = () => {
    return (
      <div className="App">
        <Sidebar />
        <div className='page'>
            <span className='tags top-tags'>My Portfolio</span>
            <Outlet />
            <span className='tags bottom-tags'>Updated January 2024</span>
        </div>
    </div>
    )
}

export default Layout
