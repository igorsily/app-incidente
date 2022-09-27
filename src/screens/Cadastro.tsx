import { useState } from 'react';
import { Alert } from 'react-native';
// import auth from '@react-native-firebase/auth';
import { Heading, Icon, ScrollView, Stack, useTheme, VStack } from 'native-base';
import { DeviceMobile, Envelope, HouseLine, IdentificationBadge, User } from 'phosphor-react-native';


import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { useAuth } from '../hooks/auth';

export function Cadastro() {

  const { loading, signIn } = useAuth();

  const [email, setEmail] = useState('84700130172');
  const [password, setPassword] = useState('123456');

  const { colors } = useTheme();

  async function handleSignIn() {
    if (!email || !password) {
      return Alert.alert('Entrar', 'Informe e-mail e senha.');
    }

    try {
      await signIn(email, password);
    } catch (error) {
      Alert.alert(error);
    }

    // auth()
    //   .signInWithEmailAndPassword(email, password)
    //   .catch((error) => {
    //     console.log(error);
    //     setIsLoading(false);

    //     if (error.code === 'auth/invalid-email') {
    //       return Alert.alert('Entrar', 'E-mail inválido.');
    //     }

    //     if (error.code === 'auth/wrong-password') {
    //       return Alert.alert('Entrar', 'E-mail ou senha inválida.');
    //     }

    //     if (error.code === 'auth/user-not-found') {
    //       return Alert.alert('Entrar', 'E-mail ou senha inválida.');
    //     }

    //     return Alert.alert('Entrar', 'Não foi possível acessar');
    //   });
  }

  return (

    <VStack flex={1} alignItems="center" bg="gray.600" px={8} >
      <ScrollView >
        <Stack direction="row" mb="2.5" mt="1.5" space={2}>
          <Heading color="gray.100" fontSize="xl" mt={2} mb={6}>
            <User size="32" color='white' />
          </Heading>
          <Heading color="gray.100" fontSize="xl" mt={2} mb={6}>
            Acesse sua conta Cadastro
          </Heading>
        </Stack>

        <Stack direction="column" mb="2.5" mt="1.5" space={2} w="full">
          <Input
            mb={2}
            placeholder="Nome Completo"
            InputLeftElement={<Icon as={<IdentificationBadge color={colors.gray[300]} />} ml={2} />}
            onChangeText={setEmail}
          />
          <Input
            mb={2}
            placeholder="E-mail"
            InputLeftElement={<Icon as={<Envelope color={colors.gray[300]} />} ml={4} />}
            onChangeText={setEmail}
          />
          <Input
            mb={2}
            placeholder="CPF ou CNPJ"
            InputLeftElement={<Icon as={<IdentificationBadge color={colors.gray[300]} />} ml={4} />}
            secureTextEntry
            onChangeText={setPassword}
          />

          <Input
            mb={2}
            placeholder="RG"
            InputLeftElement={<Icon as={<IdentificationBadge color={colors.gray[300]} />} ml={4} />}
            secureTextEntry
            onChangeText={setPassword}
          />

          <Input
            mb={2}
            placeholder="Telefone"
            InputLeftElement={<Icon as={<DeviceMobile color={colors.gray[300]} />} ml={4} />}
            secureTextEntry
            onChangeText={setPassword}
          />
        </Stack>

        {/* ============================================= */}


        <Stack direction="row" mb="2.5" mt="1.5" space={2}>
          <Heading color="gray.100" fontSize="xl" mt={2} mb={6}>
            <HouseLine size="32" color='white' />
          </Heading>
          <Heading color="gray.100" fontSize="xl" mt={2} mb={6}>
            Eu sou
          </Heading>
        </Stack>

        <Stack direction="column" mb="2.5" mt="1.5" space={2} w="full">
          <Stack direction="row" justifyContent="space-between" mb="2.5" mt="1.5" space={2}>
            <Heading color="gray.100" fontSize="xl" mt={2} mb={6}>
             Proprietario
            </Heading>
            <Heading color="gray.100" fontSize="xl" mt={2} mb={6}>
              Eu sou
            </Heading>
          </Stack>
          <Input
            mb={2}
            placeholder="E-mail"
            InputLeftElement={<Icon as={<Envelope color={colors.gray[300]} />} ml={4} />}
            onChangeText={setEmail}
          />
          <Input
            mb={2}
            placeholder="CPF ou CNPJ"
            InputLeftElement={<Icon as={<IdentificationBadge color={colors.gray[300]} />} ml={4} />}
            secureTextEntry
            onChangeText={setPassword}
          />

          <Input
            mb={2}
            placeholder="RG"
            InputLeftElement={<Icon as={<IdentificationBadge color={colors.gray[300]} />} ml={4} />}
            secureTextEntry
            onChangeText={setPassword}
          />

          <Input
            mb={2}
            placeholder="Telefone"
            InputLeftElement={<Icon as={<DeviceMobile color={colors.gray[300]} />} ml={4} />}
            secureTextEntry
            onChangeText={setPassword}
          />
        </Stack>

        {/* ============================================= */}




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
          onPress={handleSignIn}
          isLoading={loading}
        />
      </ScrollView>
    </VStack >

  )
}