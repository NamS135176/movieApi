import React,{useState} from 'react'
import {
    Container,
    Header,
    Button,
    Text,
    Body,
    Form,
    Item as FormItem,
    Input,
    Label,
    Title,
  } from 'native-base';
  import auth from '@react-native-firebase/auth'
  import { useNavigation } from '@react-navigation/native';
import { Image, ImageBackground, View } from 'react-native'
export default function SignUpCom() {
    const navigation = useNavigation()
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    return (
        <Container style={{ paddingTop: 0 }}>
        <Header>
          <Body>
            <Title>Movie App</Title>
          </Body>
        </Header>
        <Form>
          <FormItem floatingLabel>
            <Label>Email</Label>
            <Input onChangeText={value => setEmail(value)} />
          </FormItem>
          <FormItem floatingLabel last>
            <Label>Password</Label>
            <Input onChangeText={value => setPass(value)}  secureTextEntry={true} />
          </FormItem>

          <Button onPress={() => {
            auth().createUserWithEmailAndPassword(email,pass)
            .then(() => {
                console.log('success');
                navigation.navigate('Home')
            })
            .catch(
             (e) => {
                 console.log(e);
                 
             }
            )
              
          }} light block style={{margin:10}}>
            <Text>Sign Up</Text>
          </Button >
        </Form>
      </Container>
    )
}
