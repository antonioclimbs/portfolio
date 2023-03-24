import * as React from 'react';
import mainContainer from './containers/mainContainer';
import { BrowserRouter, Route, Routes, Link, NavLink, HashRouter } from 'react-router-dom';

// couldn't get browswer router to refresh page
// going to just use hash router for now
export default function App(): JSX.Element {
  return (
    <HashRouter >
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/users">Users</NavLink>
        </li>
      </ul>
      <Routes>
        // need to change the component to be different pages
        <Route path='about' Component={About} />
        <Route path='users' Component={Users} />
        {/* <Route path='home' Component={Home} /> */}
        <Route path='/' Component={mainContainer} />
        <Route path='*' Component={NotFound} />
      </Routes>
    </HashRouter >
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

function NotFound() {
  return <h2>404 Page Not Found</h2>;
}
