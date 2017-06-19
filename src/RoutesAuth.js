import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';

class RoutesAuth extends Component {

    render() {
        return (
            <Router navigationBarStyle={{ backgroundColor: '#21409a' }} titleStyle={{ color: '#fff' }}>
                <Scene key='root'>
                    <Scene key='formLogin' component={FormLogin} title="Login" hideNavBar />
                    <Scene key='formCadastro' component={FormCadastro} title="Novo Cadastro" hideNavBar={false} />
                </Scene>
            </Router>
        )
    }

}

export default RoutesAuth