/**
 * @description - HOC lazy load page component
 * @author - huang.jian <hjj491229492@hotmail.com>
 */

// External
import React, { Component } from 'react';
import { message, Spin } from 'antd';

// Internal
import styles from './Lazy.css';

/**
 * @description - lazy load remote component
 *
 * @param {Function} pull
 */
export default function Lazy(pull) {
  return class extends Component {
    static displayName = `HOC_LAZY_COMPONENT`;

    constructor(prop) {
      super(prop);

      this.state = {
        LazyComponent: null
      };
    }

    componentDidMount() {
      pull().then((LazyComponent) => {
        this.setState({
          LazyComponent: LazyComponent.default || LazyComponent
        });
      }).catch(() => {
        message.error('Lazy load component failed');
      });
    }

    render() {
      const props = this.props;
      const LazyComponent = this.state.LazyComponent;

      const placeholder = (
        <div className={styles.lazyBox}>
          <Spin tip="Loading..." />
        </div>
      );

      return (
        LazyComponent ? <LazyComponent {...props} /> : placeholder
      );
    }
  };
}
