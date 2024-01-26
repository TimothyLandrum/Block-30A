import { Link } from "react-router-dom";

/* TODO - add your code to create a functional React component that renders a navigation bar for the different views in your single page application. You may consider conditionally rendering some options - for example 'Login' should be available if someone has not logged in yet. */

const Navigations = ({ token }) => {
    return (
        <nav>
            <Link to='/Books'>Books</Link> |
            {token ? (
                //link to pages for users who are logged in (between the <> ... </>)
                <>
                
                
                </>
            ) : ( 
                //link to pages for users who are not logged in below (between the <> ... </>)
                <>
                    <Link to='/register'>Register</Link> |
                    <Link to='/login'>Login</Link>  
               </>
            )}
        </nav>
    );
};

export default Navigations;