import {Link} from "react-router-dom";

//sfc == state-less functional component

const BlogList = ({blogs,title, handleDelete}) => {
    // const blogs = props.blogs;
    // const title = props.title;

    // console.log(props,blogs)
    console.log("BlogList.js");
    
 
    return ( 
        
        
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>
                            {blog.id}. {blog.title}
                        </h2>
                        <p>
                            Written by {blog.author}
                        </p>
                    </Link>
                    
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;