import { useState } from 'react';
import { Alert } from 'react-native';
// import auth from '@react-native-firebase/auth';
import { Heading, Icon, Radio, ScrollView, Stack, useTheme, VStack } from 'native-base';
import { ChatCircleDots, DeviceMobile, Envelope, HouseLine, IdentificationBadge, User } from 'phosphor-react-native';


import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { useAuth } from '../hooks/auth';

export function Cadastro() {

  const { loading, signIn } = useAuth();

  const [email, setEmail] = useState('84700130172');
  const [password, setPassword] = useState('123456');
  const [radioButtonValue, setRadionButtonValue] = useState<string>('inquelino');

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
    <ScrollView flex={1} bg="gray.600">
      <VStack flex={1} alignItems="center" bg="gray.600" px={8} >

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
          <Stack direction="row" justifyContent="space-between"  space={2}>
            <Heading color="gray.100" fontSize="xl" mt={2} mb={6}>
              Proprietario
            </Heading>
            <Heading color="gray.100" fontSize="xl" mt={2} mb={6}>
              <Radio.Group name="myRadioGroup"
                onChange={nextValue => {
                  setRadionButtonValue(nextValue);
                }}
                value={radioButtonValue}
              >
                <Radio value="proprietario"   colorScheme="green" my={1} accessibilityLabel="favorite number">
                </Radio>
              </Radio.Group>
            </Heading>
          </Stack>

          <Stack direction="row" justifyContent="space-between"   space={2}>
            <Heading color="gray.100" fontSize="xl" mt={2} mb={6}>
              Inquelino
            </Heading>
            <Heading color="gray.100" fontSize="xl" mt={2} mb={6}>
              <Radio.Group name="myRadioGroup"
                onChange={nextValue => {
                  setRadionButtonValue(nextValue);
                }}
                value={radioButtonValue}
              >
                <Radio value="inquelino" my={1} accessibilityLabel="favorite number">
                </Radio>
              </Radio.Group>
            </Heading>
          </Stack>
        
        </Stack>

        {/* ============================================= */}


        <Stack direction="row" mb="2.5" mt="1.5" space={2}>
          <Heading color="gray.100" fontSize="xl" mt={2} mb={6}>
            <ChatCircleDots size="32" color='white' />
          </Heading>
          <Heading color="gray.100" fontSize="xl" mt={2} mb={6}>
            Meio de Contato
          </Heading>
        </Stack>

        <Stack direction="column" mb="2.5" mt="1.5" space={2} w="full">
          <Stack direction="row" justifyContent="space-between"  space={2}>
            <Heading color="gray.100" fontSize="xl" mt={2} mb={6}>
              Email
            </Heading>
            <Heading color="gray.100" fontSize="xl" mt={2} mb={6}>
              <Radio.Group name="myRadioGroup"
                onChange={nextValue => {
                  setRadionButtonValue(nextValue);
                }}
                value={radioButtonValue}
              >
                <Radio value="Email"   colorScheme="green" my={1} accessibilityLabel="favorite number">
                </Radio>
              </Radio.Group>
            </Heading>
          </Stack>

          <Stack direction="row" justifyContent="space-between"   space={2}>
            <Heading color="gray.100" fontSize="xl" mt={2} mb={6}>
              Whatsapp
            </Heading>
            <Heading color="gray.100" fontSize="xl" mt={2} mb={6}>
              <Radio.Group name="myRadioGroup"
                onChange={nextValue => {
                  setRadionButtonValue(nextValue);
                }}
                value={radioButtonValue}
              >
                <Radio value="whatsapp" my={1} accessibilityLabel="favorite number">
                </Radio>
              </Radio.Group>
            </Heading>
          </Stack>

          <Stack direction="row" justifyContent="space-between"   space={2}>
            <Heading color="gray.100" fontSize="xl" mt={2} mb={6}>
              Telefone
            </Heading>
            <Heading color="gray.100" fontSize="xl" mt={2} mb={6}>
              <Radio.Group name="myRadioGroup"
                onChange={nextValue => {
                  setRadionButtonValue(nextValue);
                }}
                value={radioButtonValue}
              >
                <Radio value="Telefone" my={1} accessibilityLabel="favorite number">
                </Radio>
              </Radio.Group>
            </Heading>
          </Stack>
        
        </Stack>

        {/* ============================================= */}



        <Button
          title="Proxima Etapa"
          w="full"
          mb={8}
          onPress={handleSignIn}
          isLoading={loading}
        />

      </VStack >
    </ScrollView>

  )
}