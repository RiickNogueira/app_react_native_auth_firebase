import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Principal from './components/Principal';

class RoutesApp extends Component {

    render() {
        return (
            <Router navigationBarStyle={{ backgroundColor: '#fff' }} titleStyle={{ color: '#ff5400' }}>
                <Scene key='root'>
                    <Scene key='principal' component={Principal} title="Principal" hideNavBar initial />
                </Scene>
            </Router>
        )
    }

}

export default RoutesApp