import React, { Component } from 'react';
import { load, save } from '../../localstorage';

const withLocalstorage = (localStorageKey, initialData) => (WrappedComponent) => {
    return class extends Component {      
     
        render() {
          return (
            <WrappedComponent savedData={load} saveData={save} {...this.props} />
          );
        }
      };
    }

export default withLocalstorage;
