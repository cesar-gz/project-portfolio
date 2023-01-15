import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar'
import './index.scss';

// In the <span className='bottom-tag-html' > x </span>
// x is the actual text you want to edit later so that the layout makes sense
// x = &lt;body&gt; y = &lt;html&gt;
//from tutortial before I changed it

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