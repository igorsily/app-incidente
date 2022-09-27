import { useState } from 'react';
import { Alert } from 'react-native';
// import auth from '@react-native-firebase/auth';
import { Heading, Icon, useTheme, VStack } from 'native-base';
import { Envelope, Key } from 'phosphor-react-native';

import Logo from '../assets/logo_primary.svg';

import { useNavigation } from '@react-navigation/native';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { useAuth } from '../hooks/auth';

export function SignIn() {

  const { loading, signIn } = useAuth();

  const [email, setEmail] = useState('84700130172');
  const [password, setPassword] = useState('123456');

  const { colors } = useTheme();

  const navigation = useNavigation();


  async function handleCadastro() {
    navigation.navigate('cadastro');
  }

  async function handleSignIn() {
    if (!email || !password) {
      return Alert.alert('Entrar', 'Informe e-mail e senha.');
    }

    try {
      await signIn(email, password);
    } catch (error) {
      Alert.alert(error);
    }

  }

  return (
    <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>
      <Logo />

      <Heading color="gray.100" fontSize="xl" mt={20} mb={6}>
        Acesse sua conta
      </Heading>

      <Input
        mb={4}
        value={email}
        placeholder="E-mail"
        InputLeftElement={<Icon as={<Envelope color={colors.gray[300]} />} ml={4} />}
        onChangeText={setEmail}
      />

      <Input
        mb={8}
        value={password}
        placeholder="Senha"
        InputLeftElement={<Icon as={<Key color={colors.gray[300]} />} ml={4} />}
        secureTextEntry
        onChangeText={setPassword}
      />

      <Button
        title="Entrar"
        w="full"
        onPress={handleSignIn}
        isLoading={loading}
      />

      <Button
        mt={3}
        mb={3}
        title="Esqueci minha senha"
        w="full"
        onPress={handleSignIn}
        isLoading={loading}
      />

      <Button
        title="Cadastre-se"
        w="full"
        onPress={handleCadastro}
        isLoading={loading}
      />
    </VStack>
  )
}