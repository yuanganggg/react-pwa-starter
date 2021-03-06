/**
 * @description - Gallery slider
 * @author - huang.jian <hjj491229492@hotmail.com>
 */

// external
import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/map';

// internal
import style from './Gallery.css';
import cartoon1 from './asset/prefetch-cartoon-1.jpg';
import cartoon2 from './asset/prefetch-cartoon-2.jpg';
import cartoon3 from './asset/prefetch-cartoon-3.jpg';
import cartoon4 from './asset/prefetch-cartoon-4.jpg';
import cartoon5 from './asset/prefetch-cartoon-5.jpg';

// Component Scope
const cartoons = [cartoon1, cartoon2, cartoon3, cartoon4, cartoon5];

export default class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeImage: [cartoon1]
    };

    // Transition timeout
    this.timeout = {
      enter: 400,
      exit: 500
    };
  }

  componentWillMount() {
    this.state$ = Observable.timer(500, 2000)
      .map((count) => ({
        activeImage: [cartoons[count % 5]]
      }));
  }

  componentDidMount() {
    this.subscription = this.state$.subscribe((state) => {
      this.setState(state);
    });
  }

  componentWillUnmount() {
    this.subscription.unsubscribe();
  }

  render() {
    return (
      <article>
        <div className={style.sliderBox}>
          <TransitionGroup>
            {
              this.state.activeImage.map((url) => (
                <CSSTransition
                  key={url}
                  timeout={this.timeout}
                  classNames="slide"
                >
                  <div className={style.slideBoxItem}>
                    <img className={style.slideBoxImage} src={url} alt="cartoon" />
                  </div>
                </CSSTransition>
              ))
            }
          </TransitionGroup>
        </div>
      </article>
    );
  }
}
