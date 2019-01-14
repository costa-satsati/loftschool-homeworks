import React, { Component } from 'react';
import { load, save } from '../../localstorage';

const withLocalstorage = (localStorageKey, initialData) => (WrappedComponent) => {

    return class extends Component {     
        
        loadData = () => load(localStorageKey) || initialData;
        saveData = (data) => save(localStorageKey,data);
     
        render() {
          return (
            <WrappedComponent savedData={this.loadData()} saveData={this.saveData} {...this.props} />
          );
        }
      };
    }

export default withLocalstorage;
