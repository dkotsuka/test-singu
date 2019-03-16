import React, { Component } from 'react';
import './styles/App.scss';

import VoucherEditor from './components/VoucherEditor'

class App extends Component {
  render() {
    return (
      <div className="App">
        <VoucherEditor />
      </div>
    );
  }
}

export default App;
