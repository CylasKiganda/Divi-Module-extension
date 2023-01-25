// External Dependencies
import React, { Component } from 'react';

// Internal Dependencies
import './style.css';


class HelloWorld extends Component {

  static slug = 'myex_hello_world';

  render() {
    const Content = this.props.content;

    return (
      <h1 className='beloking'>
        {{Content}}
      </h1>
    );
  }
}

export default HelloWorld;
