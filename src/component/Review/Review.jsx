/**
 * @description - Progress component showcase
 * @author - bornkiller <hjj491229492@hotmail.com>
 */
// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import { Card, Progress } from 'antd';

export default class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      default: 75,
      exception: 80,
      success: 100
    };

    this.styles = {
      spacing: {
        marginLeft: 10
      }
    };
  }

  render() {
    return (
      <Card title="审批进度">
        <Progress type="circle" percent={this.state.default} />
        <Progress type="circle" style={this.styles.spacing} percent={this.state.exception} />
        <Progress type="circle" style={this.styles.spacing} percent={this.state.success} status="success" />
      </Card>
    );
  }
}
