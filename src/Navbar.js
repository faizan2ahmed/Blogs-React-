import { useContext } from "react";
import BlogContext from "./context/BlogContext";

const Navbar = () => {

   
    const blogs = useContext(BlogContext);
    // console.log("here", blogs);

    
    if (blogs === undefined || blogs === null) {
        return <p>Loading...</p>;
    }

    return ( 
        <nav className="navbar">
            
            <h1> The React Blog</h1>
            <div className="links">
                <p>Number of Blogs: {blogs.length}</p>
                <a href="/">Home</a>
                <a href="/create" >New Blog</a>
            </div>
        </nav>
     );
}
 
export default Navbar;