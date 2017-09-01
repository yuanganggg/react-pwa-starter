/**
 * @description - React SSR HelloWorld
 * @author - huang.jian <hjj491229492@hotmail.com>
 */
import React, { Component } from 'react';

export default class HelloWorld extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Hello world!!!',
      description: 'React ssr practice!!!',
      // eslint-disable-next-line
      timestamp: typeof window === 'undefined'
        ? global.timestamp
        : (window.__HELLO_STATE__ ? window.__HELLO_STATE__.timestamp : Date.now())
    };
  }

  render() {
    return (
      <div className="ssr-hello-world">
        <h3>{this.state.title}</h3>
        <p>{this.state.description}</p>
        <p>{this.state.timestamp}</p>
      </div>
    );
  }
}
