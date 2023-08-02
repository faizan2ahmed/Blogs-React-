import { useState } from "react";
import {useHistory} from 'react-router-dom'


const Create = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('Faizan');
    const [body,setBody] = useState('');
    const [isPending,setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e)=>{
        e.preventDefault();

        const blog = {title,body,author};
        setIsPending(true);
  
        fetch('http://localhost:8000/blogs',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log("new blog added.")
            setIsPending(true);
            history.push('/')
        })
    }
    
    return ( 
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <div className="inputBox">
                    <label>Title: </label>
                    <input type='text' required value={title} onChange={(e)=>setTitle(e.target.value)}></input>
                    <label>Author: </label>
                    <select value={author} onChange={(e)=>setAuthor(e.target.value)}>
                        <option value="Faizan">Faizan</option>
                        <option value="Faraz">Faraz</option>
                        <option value="Eleanor Smith">Eleanor Smith</option>
                        <option value="Sophia Anderson">Sophia Anderson</option>
                        <option value="Aiden Foster">Aiden Foster</option>
                        <option value="Isabella Carter">Isabella Carter</option>
                        <option value="Jonathan Davis">Jonathan Davis</option>
                        <option value="Megan Turner">Megan Turner</option>
                        <option value="Oliver Mitchell">Oliver Mitchell</option>
                        <option value="Samantha Roberts">Samantha Roberts</option>
                    </select>
                    <label>
                        Blog body:
                    </label>
                    <textarea required value={body} onChange={(e)=>setBody(e.target.value)}></textarea>
                </div>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}
            </form>
        </div>
     );
}
 
export default Create;