import React, {Component} from 'react'
import urls from '../utils/urls';
import axios from 'axios'
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/AntDesign'
import { 
  Text, 
  View, 
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native'; 
class Login extends Component{

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
      loginSituation: '',
      viewLoginSituationColor: '#F5F5F5'
    }
  }

  alterarLoginSituationString = (string) => {
    this.setState({
      loginSituation: string
    })
  }

  ativarViewLoginSituation = () => {
    this.setState({
      viewLoginSituationColor: '#FFC0CB'
    })
  }

  desativarViewLoginSituation = () => {
    this.setState({
      viewLoginSituationColor: '#F5F5F5'
    })
  }
  
  render() {
    return(
      <ScrollView>
      <View style={style.container}>
        <View style={style.iconImageView}>
        <Image style={{ width: 250, height: 100  }} source={ require('../assets/headerName.png') }/>
        </View>
        <View style={style.containerInput}>
          <Text style={style.textEmail}>Email</Text>
          <Input
            autoCompleteType='email'
            value = {this.state.email}
            leftIcon={
              <Icon2
                name='user'
                size={20}
              />
            }
            onChangeText= {
              email => {
                this.desativarViewLoginSituation();
                this.alterarLoginSituationString('');
                this.setState({ email })
              }}
            ref = { input => {
              this.Input = input
            }}
            returnKeyType='go'
          />
        </View>
        <View style={style.containerInput}>
          <Text style={style.textSenha}>Senha</Text>
          <Input
            value = {this.state.senha}
            leftIcon={
              <Icon2
                name='lock1'
                size={20}
              />  
            }
            secureTextEntry={true}
            onChangeText={
              senha => {
                this.desativarViewLoginSituation();
                this.alterarLoginSituationString('')
                this.setState({ senha })
              }}
              ref = { input => {
                this.Input = input
              }}
              returnKeyType='go'
          />
        </View>
        <View style={{ alignItems: 'center', backgroundColor: this.state.viewLoginSituationColor, borderRadius: 13 }}>
          <Text style={{ color: '#363636', fontSize: 17, fontWeight: "bold" }}>{this.state.loginSituation}</Text>
        </View>
        <View style={{ padding: 50, flexDirection: 'row', justifyContent: 'center'}}>
          <Button title='Entrar' color='purple' onPress={() => {
            const payload = {
              "email": this.state.email,
              "senha": this.state.senha
            }
            axios.post(urls.LOGIN, payload)
            .then( res => {
              switch (res.data.mensagem) {
                case 'SUCCESS':
                  this.alterarLoginSituationString('')
                  this.props.navigation.navigate('Menu')
                  break;
                case 'WRONG_PASSWORD':
                  this.ativarViewLoginSituation();
                  this.alterarLoginSituationString('Senha Incorreta')
                  break;
                case 'USER_NOT_FOUND':
                  this.ativarViewLoginSituation();
                  this.alterarLoginSituationString('Usuário não encontrado')
                  break;
              }
            })
          }}/>
          <Icon name="login" size={35} color="purple"/>
        </View>
        <View style={style.viewCriarLogin}>
          <TouchableOpacity onPress={() => {this.props.navigation.push('CriarUsuario')}}>
            <Text style={{ color: 'purple', fontSize: 15 }}>Não possui conta? Clique aqui!</Text>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 50,
    backgroundColor: '#F5F5F5'  
  },

  containerInput: {
    
    justifyContent: 'space-between'
  },  

  textEmail: {
    fontSize: 17,
  },

  textSenha: {
    fontSize: 17,
  },

  viewCriarLogin: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 0.3
  },

  criarUsuarioButton: {
    alignItems: 'center',
    backgroundColor: null,
    padding: 10
  },

  iconImageView: {
    alignItems: 'center',
    padding: 10
  }
})

export default Login