import React from 'react';
import Form from './components/Form';
import {StoreProvider} from './components/Store';
import GroupField from './components/GroupField';

function App() {
  return( 
    <StoreProvider>
      <div className="container">
        <Form />
        <GroupField />
      </div>
    </StoreProvider>
  )
}

export default App;
