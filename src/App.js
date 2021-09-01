import React from 'react';
import RouterPage from './Router/router';

import { Provider } from "react-redux";
import { storeRedux } from "./Redux";
// import './App.css';

function App() {
  return (
    <Provider store={storeRedux} >
      <RouterPage />
    </Provider>
  );
}

export default App;
