/**
 * @description - core component implement
 * @author - bornkiller <hjj491229492@hotmail.com>
 */

// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import { Observable } from 'rxjs/Observable';
import { Alert, Card } from 'antd';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';

// application level
export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timestamp: 'Waiting client render...'
    };
  }

  componentDidMount() {
    this.subscription = Observable.interval(1000)
      .map(() => Date.now())
      .subscribe((timestamp) => {
        this.setState({ timestamp });
      });
  }

  componentWillUnmount() {
    this.subscription.unsubscribe();
  }

  render() {
    return (
      <Card title="React seed">
        <Alert message={`React Seed: ${this.state.timestamp}`} type="success" />
        <Alert message={`React Seed: ${this.state.timestamp}`} type="info" />
        <Alert message={`React Seed: ${this.state.timestamp}`} type="warning" />
      </Card>
    );
  }
}
