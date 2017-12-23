/**
 * @description - Progress component showcase
 * @author - bornkiller <hjj491229492@hotmail.com>
 */
// external
import React, { Component } from 'react';
import { Card, Progress } from 'antd';
// internal
import style from './review.css';

export default class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      default: 45,
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
        <Progress className={style.progressSpacing} type="circle" percent={this.state.exception} />
        <Progress className={style.progressSpacing} type="circle" percent={this.state.success} status="success" />
      </Card>
    );
  }
}
