import {
    MODIFICA_EMAIL,
    MODIFICA_SENHA,
    MODIFICA_NOME,
    CADASTRO_USUARIO_SUCESSO,
    CADASTRO_USUARIO_ERRO,
    LOGIN_USUARIO_SUCESSO,
    LOGIN_USUARIO_ERRO,
    LOGIN_EM_ANDAMENTO,
    CADASTRO_EM_ANDAMENTO,
    SET_USUARIO_FIREBASE,
    SET_USUARIO_PERFIL,
    TOKEN_VALIDATED
} from '../actions/types';

const INITIAL_STATE = {
    nome: '',
    email: '',
    senha: '',
    erroCadastro: '',
    erroLogin: '',
    loading_login: false,
    loading_cadastro: false,
    usuario_firebase: [],
    usuario_perfil: [],
    valid_token: false
}

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case MODIFICA_EMAIL:
            return { ...state, email: action.payload }
        case MODIFICA_SENHA:
            return { ...state, senha: action.payload }
        case MODIFICA_NOME:
            return { ...state, nome: action.payload }
        case CADASTRO_USUARIO_ERRO:
            return { ...state, erroCadastro: action.payload, loading_cadastro: false }
        case CADASTRO_USUARIO_SUCESSO:
            return { ...state, nome: '', senha: '', loading_cadastro: false }
        case LOGIN_USUARIO_ERRO:
            return { ...state, erroLogin: action.payload, loading_login: false, senha: '' }
        case LOGIN_USUARIO_SUCESSO:
            return { ...state, erroLogin: '', loading_login: false, senha: '' }
        case LOGIN_EM_ANDAMENTO:
            return { ...state, loading_login: true }
        case CADASTRO_EM_ANDAMENTO:
            return { ...state, loading_cadastro: true }
        case SET_USUARIO_FIREBASE:
            return { ...state, usuario_firebase: action.payload }
        case TOKEN_VALIDATED:
            if (action.payload) {
                return { ...state, valid_token: true }
            } else {
                return { ...state, valid_token: false, usuario_firebase: null}
            }
        default:
            return state;
    }
}