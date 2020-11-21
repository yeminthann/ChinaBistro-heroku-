
import React from 'react';
import './App.css';
import Main from './components/MainComponent';
import { configureStore } from './redux/store/configureStore';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

const store = configureStore();

function App() {
  return (
    <Provider store = {store}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
