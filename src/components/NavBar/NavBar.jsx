import { Link } from 'react-router-dom';
import style from './NavBar.module.css';


const NavBar = () => {
    const handleLogout = () => {
        dispatch(logout());
        history.push("/");
      };
return (
    <div className={style.mainContainer}>
    <nav className={style.NavBar}>
        <div>
        <div className={style.divLink}>
            <Link className={style.container} to="/home">
                Products
            </Link>
            <div className={style.divLink}>
            <Link className={style.container} to="/product">
                Create
            </Link>
            </div>
            <div className={style.divLink}>
            <Link className={style.container} to="/custom">
                Create User
            </Link>
            </div>
            <div className={style.divLink}>
            <Link className={style.container} to="/orders">
                Orders
            </Link>
            </div>
            <div className={style.divLink} >
            <Link className={style.container} to="/" onClick={handleLogout}>
                Logout
            </Link>
            </div>
            
        </div>
        </div>
    </nav>
    </div>
);
};

export default NavBar;
