import { Link } from "react-router-dom"

const Navigation = () => {

    return (
        <div style={{backgroundColor: 'blue', padding: '2rem', }}>
            <ul className='menu-ul'>
                <li ><Link to='/'  style={{color: 'white', fontWeight: '700'}} >Home</Link></li>
                <li><Link  style={{color: 'white', fontWeight: '700'}}  to='/proposals'>Proposals</Link></li>
            </ul>
        </div>
    )
}

export default Navigation