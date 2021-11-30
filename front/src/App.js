import React, { useReducer, createContext } from 'react';
import Form from './components/Form';
import List from './components/List';
import {StoreProvider} from './components/Store';

function App() {
  return( 
    <StoreProvider>
      <div className="container">
        <h3>Things to-do</h3>
        <Form />
        <List />
      </div>
    </StoreProvider>
  )
}

export default App;
