import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StatusBar, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import { TabBar } from 'react-native-tab-view';
import { Actions } from 'react-native-router-flux';

import { signOut } from '../actions/AutenticacaoActions';

class TabBarMenu extends Component {
    
    render() {
        return (
            <View style={{ backgroundColor: "#1c75bc", elevation: 4, marginBottom: 6 }}>

                <StatusBar backgroundColor="#21409a" />

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ height: 50, justifyContent: 'center' }}>
                        <Text style={{ color: "#fff", fontSize: 20, marginLeft: 20 }}>App Name - 
                            {' '+this.props.usuario_firebase.email}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginRight: 20 }}>
                        <View style={{ justifyContent: 'center' }}>
                            <TouchableOpacity activeOpacity={.5} onPress={() => this.props.signOut()}>
                                <Text style={{ fontSize: 20, color: '#fff' }}>Sair</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <TabBar {...this.props} style={{ backgroundColor: "#1c75bc", elevation: 0 }} />
            </View>
        )
    }

}

const mapStateToProps = state => ({ usuario_firebase: state.AutenticacaoReducer.usuario_firebase})
export default connect(mapStateToProps, { signOut })(TabBarMenu);
