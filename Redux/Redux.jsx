import React from 'react'
import Number from './Componet/Number'
import { Provider } from 'react-redux';
import store from './Store';
import User from './Componet/User';
import Api from './Componet/Api';

export default function Redux() {
  return (
    <>
      <Provider store={store}>
        <div className="container">
          <Number />
          <User />
          {/* <Api /> */}
        </div>
      </Provider>
    </>
  );
}