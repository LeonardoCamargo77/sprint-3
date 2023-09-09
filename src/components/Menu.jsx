import { Link } from "react-router-dom"

export default function Menu(){


    return(
        <nav className="menu">
            <Link to='/'>Home</Link>
            <span> | </span>
            <Link to='/Agricultura'>Agricultura Sustentável</Link>
            <span> | </span>
            <Link to='/Cultivos'>Cultivos Eficientes</Link>
            <span> | </span>
            <Link to='/Ia'>IA's</Link>
            <span> | </span>
            <Link to='/Contato'>Contato</Link>
         
                       



        </nav>
    )

}