/**
 * @description - Gallery slider
 * @author - huang.jian <hjj491229492@hotmail.com>
 */
// External
import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/map';

// Style
import './Gallery.scss';

// Internal
import cartoon1 from '../../assets/1.jpg';
import cartoon2 from '../../assets/2.jpg';
import cartoon3 from '../../assets/3.jpg';
import cartoon4 from '../../assets/4.jpg';
import cartoon5 from '../../assets/5.jpg';

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
        <div className="slider-box">
          <TransitionGroup>
            {
              this.state.activeImage.map((url) => (
                <CSSTransition
                  key={url}
                  timeout={this.timeout}
                  classNames="slide"
                >
                  <div className="slider-box__item">
                    <img className="slider-box__image" src={url} alt="cartoon" />
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
