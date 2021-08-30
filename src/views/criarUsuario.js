import React, {Component} from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { Input, FAB, Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import InputIcons from 'react-native-vector-icons/Feather';
import InputLocationIcons from 'react-native-vector-icons/Ionicons'
import SelectPicker from 'react-native-form-select-picker';
import convertEstado from '../utils/functions'
import { estados } from '../utils/constantes';

class createUserform extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      usuarioCriado: {
        nome: '',
        sobrenome: '',
        email: '',
      }
    }
  }
  
  render() {
    const estadosList = estados
    let key = 0

    const getKey = () => {
      key += 1
      return key.toString()
    }
    return (
      <ScrollView>
        <Card>
          <View style={styles.viewPrincipal}>
            <View style={{ flexDirection: 'row', width: '60%', marginRight: '30%' }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: 'purple',
                  marginRight: '1.5%'
                }}
              >
                Cadastre seu usuário
              </Text>
              <Icon name='form' size={25} color='#660066'/>
            </View>
            <View style={styles.viewForm}>
              <View style={styles.viewDoubleInput}>
                <View style={styles.viewFirstInput}>
                  <Input
                    placeholder='Nome'
                    leftIcon={
                      <InputIcons
                        name='user'
                        size={15}
                      />
                    }
                  />
                </View>
                <View style={styles.viewSecondInput}>
                  <Input
                    placeholder='Sobrenome'
                    leftIcon={
                      <InputIcons
                        name='users'
                        size={15}
                      />
                    }
                  />
                </View>
              </View>
              <View style={{ width: 330 }}>
                <Input
                  placeholder='Email'
                  leftIcon={
                    <InputIcons
                      name='mail'
                      size={15}
                    />
                  }
                />
              </View>
              <View style={styles.viewDoubleInput}>
                <View style={styles.viewFirstInput}>
                  <Input
                    secureTextEntry={true}
                    placeholder='Senha'
                    leftIcon={
                      <InputIcons
                        name='lock'
                        size={15}
                      />
                    }
                  />
                </View>
                <View style={styles.viewSecondInput}>
                  <Input
                    secureTextEntry={true}
                    placeholder='Repita a senha'
                    leftIcon={
                      <InputIcons
                        name='lock'
                        size={15}
                      />
                    }
                  />
                </View>
              </View>
              <View style={styles.viewDoubleInput}>
                <View style={styles.viewSelectEstado}>
                  <InputLocationIcons
                    name='location'
                    size={16}
                    style={{ marginTop: '8%' }}
                  />
                  <SelectPicker
                    placeholder='Selecione o Estado'
                    placeholderStyle={{
                      fontSize: 17
                    }}
                    style={{ marginTop: '2%' }}
                  >
                    {estadosList.map((val, index) => (
                      <SelectPicker.Item label={convertEstado(val)} value={val} key={getKey()} />
                    ))}
                  </SelectPicker>
                </View>
                <View style={{ width: '50%' }}>
                  <Input
                    placeholder='Cidade'
                    leftIcon={
                      <InputLocationIcons
                        name='location-outline'
                        size={17}
                      />
                    }
                  />
                </View>
              </View>
              <View style={{ marginRight: '49%', flexDirection:'row'  }}>
              <Icon
                name='calendar'
                size={17}
                style={{ marginTop: '3.5%', marginRight: '4%',  marginLeft: '30%'}}
              />
              <Text
                  style={{
                    fontSize: 18,
                    marginRight: '2%',
                    marginTop: '2%',
                    color: 'grey'
                  }}
                >Data de nascimento</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'center', width: '100%', marginRight: '47%'}}>
                <View style={{ width: '19%' }}>
                  <Input
                    placeholder='Dia'
                  />
                </View>
                <View style={{ width: '19%' }}>
                  <Input
                    placeholder='Mês'
                  />
                </View>
                <View style={{ width: '22%', marginRight: '1%' }}>
                  <Input
                    placeholder='Ano'
                  />
                </View>
              </View>
            </View>
          </View>
        </Card>
        <View style={{ marginTop: '5%', marginBottom: '5%' }}>
          <FAB
            title='Cadastrar'
            color='purple'
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  viewPrincipal: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },

  viewForm: {
    borderRadius: 13,
    alignItems: 'center',
  },

  viewDoubleInput: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  viewFirstInput: {
    width: '50%',
  },
  viewSecondInput: {
    width: '50%'
  },
  viewSelectEstado: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'center'
  },
})

export default createUserform