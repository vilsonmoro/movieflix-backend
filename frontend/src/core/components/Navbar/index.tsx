import { getAccessTokenDecoted, logout } from 'core/utils/auth';
import React, { useEffect, useState } from 'react';
import { NavLink,  useHistory,  useLocation } from 'react-router-dom';
import './styles.scss';


const Navbar = () => {
     const history = useHistory();
     const [currentUser, setCurrentUser] = useState('');
     const location = useLocation();

     useEffect(() => {
          const currentUserData = getAccessTokenDecoted();
          setCurrentUser(currentUserData.user_name);
     }, [location]);

     const handleLogout = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
          event.preventDefault();
          logout();
          history.push("/");
     }

     return (
          <>
               <nav className="main-nav">
                    <NavLink to="/" exact className="logo">
                         <span>Movieflix</span>
                    </NavLink>
                    { currentUser && (    
                         <>                     
                              <a href="#logout"
                                   className="btnLogout"
                                   onClick={handleLogout}
                              >
                                   SAIR
                            </a>
                            <span  className="user-logado">{ currentUser }</span> 
                        </>
                    )}
               </nav>
          </>
     );
}

export default Navbar;