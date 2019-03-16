import React, { Component } from 'react';
import './styles/App.scss';

import VoucherEditorView from './components/VoucherEditorView'

class App extends Component {
  render() {
    return (
      <div className="App">
        <VoucherEditorView />
      </div>
    );
  }
}

export default App;
