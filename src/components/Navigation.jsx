import { Link } from "react-router-dom"

const Navigation = () => {

    return (
        <ul className='menu-ul'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/proposals'>Proposals</Link></li>
        </ul>
    )
}

export default Navigation