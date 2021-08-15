import React, {Component} from 'react'
import urls from '../utils/urls';
import axios from 'axios'
import { 
  Text, 
  View, 
  StyleSheet,
  TextInput,
  Button
} from 'react-native'; 
class Login extends Component{

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: ''
    }
  }
  
  render() {
    return(
      <View style={style.container}>
        <View style={style.containerInput}>
          <Text style={style.textEmail}>Email</Text>
          <TextInput
            autoCompleteType='email'
            value = {this.state.email}
            style= { style.inputEmail }
            onChangeText= {
              email => {
                this.setState({ email })
              }}
            ref = { input => {
              this.TextInput = input
            }}
            returnKeyType='go'
          />
        </View>
        <View style={style.containerInput}>
          <Text style={style.textSenha}>Senha</Text>
          <TextInput
            value = {this.state.senha}
            style={ style.inputSenha }
            onChangeText={
              senha => {
                this.setState({ senha })
              }}
              ref = { input => {
                this.TextInput = input
              }}
              returnKeyType='go'
          />
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
                  this.props.navigation.push('Menu')
                  break;
                case 'QUERY_ERROR':
                  alert('Erro ao logar, verifique email e senha.')
                  break;
              }
            })
          }}/>
        </View>
      </View>
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

  inputEmail: {
    borderWidth: 0.5
  },

  textEmail: {
    fontSize: 17,
  },

  inputSenha: {
    borderWidth: 0.5
  },

  textSenha: {
    fontSize: 17,
  }
})

export default Login