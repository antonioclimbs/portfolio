import * as React from 'react';
import mainContainer from './containers/mainContainer';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';


interface Props {
  name: string,
}

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>
      <Routes>
        // need to change the component to be different pages
        <Route path='about' Component={About} />
        <Route path='/whatwedo' Component={mainContainer} />
        <Route path='/getinvolved' Component={mainContainer} />
        <Route path='/partners' Component={mainContainer} />
        <Route path='/news' Component={mainContainer} />
        <Route path='/team' Component={mainContainer} />
        <Route path='/horses' Component={mainContainer} />
        <Route path='/' Component={Home} />
      </Routes>
    </BrowserRouter >
    // mainContainer()
  )
}

export function Home() {
  return <h2>Home</h2>;
}

export function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
