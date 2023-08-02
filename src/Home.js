import BlogList from './BlogList';

 const Home = ({blogs, isPending, error}) => {

    return (
            <div className="home">
                {error && <div>
                    {error}    
                </div>}
                {!error && isPending && <div>
                    Loading...
                </div> } 
                {blogs && <BlogList blogs={blogs} title={"All Blogs!"} />}
                {blogs && <BlogList blogs={blogs.filter((blogs)=>{
                    if(blogs.author==="Faizan"){
                        return true;
                    }
                    return false;
                })} title={"Faizan's Blogs!"} />}
            </div>
     );
}
 export default Home;