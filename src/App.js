import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import useFetch from './useFetch';
import BlogContext from './context/BlogContext';
import NotFound from './notFound';

function App() {
  const {data: blogs,isPending,error} = useFetch('http://localhost:8000/blogs');

  return (
    <BlogContext.Provider value={blogs || null}>
      <Router>
        <div className="App">
          <Navbar/>
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home blogs={blogs} isPending={isPending} error={error}/>
              </Route>
              <Route exact path="/create">
                <Create/>
              </Route>
              <Route exact path="/blogs/:id">
                <BlogDetails/>
              </Route>
              <Route path="*">
                <NotFound/>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </BlogContext.Provider>
  );
}

export default App;
