import React, { Component } from 'react';
import {
    View, Text, TextInput, Button, TouchableHighlight, Image, ActivityIndicator,
    StyleSheet, Dimensions, TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { modificaEmail, modificaSenha, autenticarUsuario } from '../actions/AutenticacaoActions';

class formLogin extends Component {

    _autenticarUsuario() {
        const { email, senha } = this.props;

        this.props.autenticarUsuario({ email, senha });
    }

    renderBtnAcessar() {

        if (this.props.loading_login) {
            return (
                <ActivityIndicator size="large" />
            )
        }
        return (
            <TouchableOpacity activeOpacity={.5} onPress={() => this._autenticarUsuario()}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={background} style={styles.background} resizeMode="cover">
                    <View style={styles.markWrap}>
                        <View style={styles.signupWrap}>
                            <Text style={styles.appName}>App Name</Text>
                        </View>
                        <Image source={mark} style={styles.mark} resizeMode="contain" />
                    </View>
                    <View style={styles.wrapper}>
                        <View style={styles.inputWrap}>
                            <View style={styles.iconWrap}>
                                <Image source={personIcon} style={styles.icon} resizeMode="contain" />
                            </View>
                            <TextInput
                                placeholder="Email"
                                placeholderTextColor="#FFF"
                                style={styles.input}
                                value={this.props.email}
                                onChangeText={texto => this.props.modificaEmail(texto)}
                            />
                        </View>
                        <View style={styles.inputWrap}>
                            <View style={styles.iconWrap}>
                                <Image source={lockIcon} style={styles.icon} resizeMode="contain" />
                            </View>
                            <TextInput
                                placeholderTextColor="#FFF"
                                placeholder="Senha"
                                style={styles.input}
                                secureTextEntry
                                value={this.props.senha}
                                onChangeText={texto => this.props.modificaSenha(texto)}
                            />
                        </View>
                        <TouchableOpacity activeOpacity={.5}>
                            <View>
                                <Text style={styles.forgotPasswordText}>Esqueceu a Senha?</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.signupWrap}>
                            <Text style={styles.erroLogin}>
                                {this.props.erroLogin}
                            </Text>
                        </View>
                        {this.renderBtnAcessar()}
                    </View>
                    <View style={styles.container}>
                        <View style={styles.signupWrap}>
                            <Text style={styles.accountText}>Ainda não tem cadastro?</Text>
                            <TouchableOpacity activeOpacity={.5} onPress={() => Actions.formCadastro()}>
                                <View>
                                    <Text style={styles.signupLinkText}>Cadastre-se</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Image>
            </View>
        )
    }
}

const { width, height } = Dimensions.get("window");

const background = require("../imgs/bg_preto.png");
const mark = require("../imgs/login1_mark.png");
const lockIcon = require("../imgs/login1_lock.png");
const personIcon = require("../imgs/login1_person.png");

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    markWrap: {
        flex: 1,
        paddingVertical: 30,
    },
    mark: {
        width: null,
        height: null,
        flex: 1,
    },
    background: {
        width,
        height,
    },
    wrapper: {
        paddingVertical: 30,
    },
    inputWrap: {
        flexDirection: "row",
        marginVertical: 10,
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: "#CCC"
    },
    iconWrap: {
        paddingHorizontal: 7,
        alignItems: "center",
        justifyContent: "center",
    },
    icon: {
        height: 20,
        width: 20,
    },
    input: {
        flex: 1,
        paddingHorizontal: 10,
        color: '#FFF'
    },
    button: {
        backgroundColor: "#21409a",
        paddingVertical: 20,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
    },
    buttonText: {
        color: "#FFF",
        fontSize: 18,
    },
    forgotPasswordText: {
        color: "#D8D8D8",
        backgroundColor: "transparent",
        textAlign: "right",
        paddingRight: 15,
    },
    signupWrap: {
        backgroundColor: "transparent",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    accountText: {
        color: "#D8D8D8"
    },
    signupLinkText: {
        color: "#FFF",
        marginLeft: 5,
    },
    appName: {
        color: "#FFF",
        fontSize: 25,
        marginBottom: 15
    },
    erroLogin: {
        color: "#ff0000",
        marginTop: 10
    }
});

const mapStateToProps = state => (
    {
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha,
        erroLogin: state.AutenticacaoReducer.erroLogin,
        loading_login: state.AutenticacaoReducer.loading_login,
        usuario_firebase: state.AutenticacaoReducer.usuario_firebase
    }
)


export default connect(mapStateToProps, { modificaEmail, modificaSenha, autenticarUsuario })(formLogin);