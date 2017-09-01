/**
 * @description - develop multiple page component
 * @author - bornkiller <hjj491229492@hotmail.com>
 */
// External
import React from 'react';
import { Redirect, Route, Switch, NavLink } from 'react-router-dom';
import { Menu, Icon } from 'antd';
// Internal
import Lazy from '../HOC/Lazy/';
import Counter from '../component/Counter/';
import RepoSearch from '../component/RepoSearch/';
import HelloWorld from '../component/HelloWorld/';
// Scope
const LazyReview = Lazy(() => import(/* webpackChunkName: "review" */ '../component/Review/'));

// eslint-disable-next-line
export default function App() {
  return (
    <main className="react-starter-container">
      <header>
        <Menu mode="horizontal">
          <Menu.Item key="counter">
            <NavLink to="/counter">
              <Icon type="mail" /> Counter
            </NavLink>
          </Menu.Item>
          <Menu.Item key="search">
            <NavLink to="/search">Search</NavLink>
          </Menu.Item>
          <Menu.Item key="review">
            <NavLink to="/review">Review</NavLink>
          </Menu.Item>
          <Menu.Item key="hello">
            <NavLink to="/hello">Hello</NavLink>
          </Menu.Item>
        </Menu>
      </header>
      <article>
        <Switch>
          <Route path="/counter" component={Counter} />
          <Route path="/search" component={RepoSearch} />
          <Route path="/review" component={LazyReview} />
          <Route path="/hello" component={HelloWorld} />
          <Redirect to="/counter" />
        </Switch>
      </article>
    </main>
  );
}