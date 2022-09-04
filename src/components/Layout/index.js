import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar'
import './index.scss';

// In the <span className='bottom-tag-html' > x </span>
// x is the actual text you want to edit later so that the layout makes sense

const Layout = () => {
    return (
    <div className="App">
        <Sidebar />
        <div className='page'>
            <span className='tags top-tags'>&lt;body&gt;</span>

            <Outlet />

            <span className='tags bottom-tags'>
            &lt;body&gt;
            <br />
            <span className='bottom-tag-html'>&lt;html&gt;</span>

            </span>
        </div>
    </div>
    )
}

export default Layout