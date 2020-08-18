import React from 'react';
import Header from '../components/header/header';
import Logo from '../components/header/logo';

export class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Logo />
      </div>
    );
  }
}
