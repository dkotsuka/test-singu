import React, { Component } from 'react';
import './styles/App.scss';

import VoucherEditor from './components/VoucherEditor'
import VoucherTable from './components/VoucherTable'

class App extends Component {
  render() {
    return (
      <div className="App">
        <VoucherTable />
      </div>
    );
  }
}

export default App;
