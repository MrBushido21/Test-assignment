import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
// import { Title } from './components/createTitle/Title';
// import { Photo } from './components/createPhoto/Photo';
// import { Body } from './components/createBody/Body';
import { Links } from './components/Links';
// import { Blog } from './components/blog/Blog';
import { Suspense, useState } from 'react';


const Title = React.lazy(() => import('./components/createTitle/Title'))
const Photo = React.lazy(() => import('./components/createPhoto/Photo'))
const Body = React.lazy(() => import('./components/createBody/Body'))
const Blog = React.lazy(() => import('./components/blog/Blog'))

function App() {
  const [blog, setBlog] = useState({
    title: "",
    body: "",
    img: ""
  })
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [img, setImg] = useState("")


  return (
    <div className="App">
      <header>
        <Link to="/">Home</Link>
        <Link to="blog">Blog</Link>
      </header>
      <div className='app-body'>
        <Routes>
          <Route path='/' element={<Links />} />
        </Routes>
        <Suspense fallback="Loading..">
          <Routes>
            <Route path='dummyTitle' element={<Title
              title={title}
              setTitle={setTitle}
              blog={blog}
              setBlog={setBlog}
            />} />
            <Route path='dummyBody' element={<Body
              body={body}
              setBody={setBody}
              blog={blog}
              setBlog={setBlog}
            />} />
            <Route path='dummyPhoto' element={<Photo
              img={img}
              setImg={setImg}
              blog={blog}
              setBlog={setBlog}
            />} />
            <Route path='blog' element={<Blog blog={blog}/>} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
