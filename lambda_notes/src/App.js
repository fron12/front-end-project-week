import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import MainNotes from './components/MainNotes'
import './App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    }
  }
  render() {
    return (
      <div>
        <p className='pageView'>Placeholder View</p>
        <div className='container'>
          <Sidebar />
          <MainNotes className='notesContainer' />
        </div>
      </div>
    );
  }
}

export default App;