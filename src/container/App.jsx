/**
 * @description - develop multiple page component
 * @author - bornkiller <hjj491229492@hotmail.com>
 */
// External
import React from 'react';
import { Redirect, Route, Switch, NavLink } from 'react-router-dom';
import { Menu } from 'antd';
// Internal
import Review from '../component/Review/';
import RepoSearch from '../component/RepoSearch/';
import Gallery from '../component/Gallery/';

export default function App() {
  return (
    <main className="react-starter-container">
      <header>
        <Menu mode="horizontal">
          <Menu.Item key="search">
            <NavLink to="/search">Search</NavLink>
          </Menu.Item>
          <Menu.Item key="review">
            <NavLink to="/review">Review</NavLink>
          </Menu.Item>
          <Menu.Item key="gallery">
            <NavLink to="/gallery">Gallery</NavLink>
          </Menu.Item>
        </Menu>
      </header>
      <article>
        <Switch>
          <Route path="/search" component={RepoSearch} />
          <Route path="/review" component={Review} />
          <Route path="/gallery" component={Gallery} />
          <Redirect to="/review" />
        </Switch>
      </article>
    </main>
  );
}
