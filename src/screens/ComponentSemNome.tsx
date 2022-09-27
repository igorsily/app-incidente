import { useNavigation } from '@react-navigation/native';
import { Avatar, Center, FlatList, Heading, HStack, IconButton, Stack, Text, useTheme, VStack } from 'native-base';
import { ChatTeardropText, SignOut } from 'phosphor-react-native';
import { useState } from 'react';
import { Alert } from 'react-native';



import { Button } from '../components/Button';
import { Filter } from '../components/Filter';
import { Loading } from '../components/Loading';
import { Order, OrderProps } from '../components/Order';
import { useAuth } from '../hooks/auth';

export function ComponentSemNome() {
    const { user, loading, signOut } = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [statusSelected, setStatusSelected] = useState<'open' | 'closed'>('open');
    const [orders, setOrders] = useState<OrderProps[]>([
        {
            id: "2",
            patrimony: "ABCD",
            when: "28/03/1997",
            status: 'open'
        },
        {
            id: "3",
            patrimony: "asdasdsa",
            when: "28/03/1997",
            status: 'closed'
        }
    ]);

    const navigation = useNavigation();
    const { colors } = useTheme();

    function handleNewOrder() {
        navigation.navigate('new');
    }

    function handleOpenDetails(orderId: string) {
        navigation.navigate('details', { orderId });
    }

    function handleLogout() {
        Alert.alert('Logout', 'Deseja sair do aplicativo?',
            [
                {
                    text: 'Não',
                    style: 'cancel'
                },
                {
                    text: 'Sim',
                    onPress: () => signOut()
                }
            ])
    }

    //   useEffect(() => {
    //     setIsLoading(true);

    //     const subscriber = firestore()
    //       .collection('orders')
    //       .where('status', '==', statusSelected)
    //       .onSnapshot(snapshot => {
    //         const data = snapshot.docs.map(doc => {
    //           const { patrimony, description, status, created_at } = doc.data();

    //           return {
    //             id: doc.id,
    //             patrimony,
    //             description,
    //             status,
    //             when: dateFormat(created_at)
    //           }
    //         });

    //         setIsLoading(false);
    //       });

    //     return subscriber;
    //   }, [statusSelected]);

    return (
        <VStack flex={1} pb={6} bg="gray.700">
            <HStack
                w="full"
                justifyContent="space-between"
                alignItems="center"
                bg="gray.600"
                pt={12}
                pb={5}
                px={2}
            >
                <VStack space="2.5" px="8">
                    <Stack direction="row" space={3}>
                        <Center>
                            <Avatar bg="green.500" source={{
                                uri: `data:image/jpeg;base64,${user.photo}`
                            }}>
                                AJ
                            </Avatar>
                        </Center>

                        <Stack direction="column" space={3}>
                            <Text color="gray.200">
                                Olá, {user.name}
                            </Text>
                            <Text color="gray.200">
                                {user.email}
                            </Text>
                        </Stack>
                    </Stack>
                </VStack>

                <IconButton
                    icon={<SignOut size={26} color={colors.gray[300]} />}
                    onPress={handleLogout}
                />
            </HStack>

            <VStack flex={1} px={6}>
                <HStack w="full" mt={8} mb={4} justifyContent="space-between" alignItems="center">
                    <Heading color="gray.100">
                        Solicitações
                    </Heading>

                    <Text color="gray.200">
                        {orders.length}
                    </Text>
                </HStack>

                <HStack space={3} mb={8}>
                    <Filter
                        type="open"
                        title="em andamento"
                        onPress={() => setStatusSelected('open')}
                        isActive={statusSelected === 'open'}
                    />

                    <Filter
                        type="closed"
                        title="finalizados"
                        onPress={() => setStatusSelected('closed')}
                        isActive={statusSelected === 'closed'}
                    />
                </HStack>
                {
                    isLoading ? <Loading /> :
                        <FlatList
                            data={orders}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => <Order data={item} onPress={() => handleOpenDetails(item.id)} />}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{ paddingBottom: 100 }}
                            ListEmptyComponent={() => (
                                <Center>
                                    <ChatTeardropText color={colors.gray[300]} size={40} />
                                    <Text color="gray.300" fontSize="xl" mt={6} textAlign="center">
                                        Você ainda não possui {'\n'}
                                        solicitações {statusSelected === 'open' ? 'em andamento' : 'finalizadas'}
                                    </Text>
                                </Center>
                            )}
                        />
                }

                <Button title="Nova solicitação" onPress={handleNewOrder} />
            </VStack>
        </VStack>
    );
}