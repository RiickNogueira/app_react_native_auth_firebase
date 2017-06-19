import React, { Component } from 'react';
import { View, TextInput, Button, Image, Text, ActivityIndicator, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import {
    modificaEmail,
    modificaSenha,
    modificaNome,
    cadastraUsuario
} from '../actions/AutenticacaoActions';

class formCadastro extends Component {

    _cadastraUsuario() {

        const { nome, email, senha } = this.props;

        this.props.cadastraUsuario({ nome, email, senha });
    }

    renderBtnCadastro() {
        if (this.props.loading_cadastro) {
            return (
                <ActivityIndicator size="large" />
            )
        }
        return (
            <TouchableOpacity activeOpacity={.5} onPress={() => this._cadastraUsuario()}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        if (true) {
            return (
                <View style={styles.container}>
                    <Image source={background} style={styles.background} resizeMode="cover">
                        <View style={styles.wrapper}>
                            <View style={styles.inputWrap}>
                                <View style={styles.iconWrap}>
                                    <Image source={personIcon} style={styles.icon} resizeMode="contain" />
                                </View>
                                <TextInput
                                    placeholder="Nome"
                                    placeholderTextColor="#FFF"
                                    style={styles.input}
                                    value={this.props.nome}
                                    onChangeText={texto => this.props.modificaNome(texto)}
                                />
                            </View>
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

                            <View style={styles.signupWrap}>
                                <Text style={styles.erroCadastro}>
                                    {this.props.erroCadastro}
                                </Text>
                            </View>
                            {this.renderBtnCadastro()}
                        </View>
                    </Image>
                </View>
            )
        }
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
    background: {
        width,
        height,
        justifyContent: 'center'
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
    erroCadastro: {
        color: "#ff0000",
        marginTop: 10
    }
});

const mapStateToProps = state => {

    return (
        {
            nome: state.AutenticacaoReducer.nome,
            email: state.AutenticacaoReducer.email,
            senha: state.AutenticacaoReducer.senha,
            erroCadastro: state.AutenticacaoReducer.erroCadastro,
            loading_cadastro: state.AutenticacaoReducer.loading_cadastro
        }
    );
}

export default connect(
    mapStateToProps,
    {
        modificaEmail,
        modificaSenha,
        modificaNome,
        cadastraUsuario
    }
)(formCadastro);