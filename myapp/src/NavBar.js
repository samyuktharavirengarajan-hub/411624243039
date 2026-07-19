import {Link} from "react-router-dom"
export default function NavBar(){
    return(
        <nav>
            <ul>
                <li>
                    <Link to = '/add'> Add</Link>
                </li>
                <li><Link to = '/subtract'>Subtract</Link></li>
                <li><Link to = '/multiply'>Multiply</Link></li>
                <li><Link to = '/divide'>Divide</Link></li>
            </ul>
        </nav>
    )
}