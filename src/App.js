import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { getPosts } from './redux/feautures/postslice';
import './App.css';

function App() {
  const {posts,loading}=useSelector((state)=>state.post)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getPosts())
  },[])
  if (loading){
    return <h1>Loadingggg</h1>
  }
  return (
    <div className="App">
     {
      posts.map((item)=>
      <h2>{item.title}</h2>
      )
     }
    </div>
  );
}

export default App;
