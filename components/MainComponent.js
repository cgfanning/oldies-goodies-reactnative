import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import { LOCATIONS } from '../shared/locations';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
          locations: LOCATIONS
        };
    }

    render() {
        return <Directory locations={this.state.locations} />;
    }
}

export default Main;