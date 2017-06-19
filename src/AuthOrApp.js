import React, { Component } from 'react';
import { connect } from 'react-redux';

import RoutesApp from './RoutesApp';
import RoutesAuth from './RoutesAuth'

import { validateToken } from './actions/AutenticacaoActions';

class AuthOrApp extends Component {

    componentWillMount() {
        this.props.validateToken()
    }

    render() {
        if (this.props.usuario_firebase && this.props.valid_token) {
            return <RoutesApp />
        }
        else if (!this.props.usuario_firebase && !this.props.valid_token) {
            return <RoutesAuth />
        }
        else return false
    }
}

const mapStateToProps = state => (
    {
        usuario_firebase: state.AutenticacaoReducer.usuario_firebase,
        valid_token: state.AutenticacaoReducer.valid_token
    }
)

export default connect(mapStateToProps, { validateToken })(AuthOrApp)