import {Link} from "react-router-dom";
import BlogContext from './context/BlogContext';

//sfc == state-less functional component

const BlogList = ({blogs,title, handleDelete}) => {
    // const blogs = props.blogs;
    // const title = props.title;

    // console.log(props,blogs)
    

 
    return ( 
        <BlogContext.Provider value={blogs}>
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <Link to = {`/blogs/${blogs.id}`}>
                        <h2>
                            {blog.title}
                        </h2>
                        <p>
                            Written by {blog.author}
                        </p>
                    </Link>
                    
                </div>
            ))}
        </div>
        </BlogContext.Provider>
     );
}
 
export default BlogList;