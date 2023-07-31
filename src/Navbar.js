import { useContext} from "react";
import BlogContext from "./context/BlogContext";

const Navbar = () => {

   
    const blogs = useContext(BlogContext);

    if (blogs === undefined || blogs === null) {
        return <p>Loading...</p>;
    }

    return ( 
        <nav className="navbar">
            <h1> The React Blog</h1>
            <div className="links">
                <a href="#">Number of Blogs: {blogs.length}</a>
                <a href="/">Home</a>
                <a href="/create" >New Blog</a>
            </div>
        </nav>
     );
}
 
export default Navbar;