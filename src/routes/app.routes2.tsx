import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from 'native-base';
import { Cadastro } from '../screens/Cadastro';

import { SignIn } from '../screens/SignIn';
// import { Details } from '../screens/Details';
// import { Register } from '../screens/Register';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes2() {

  const { colors } = useTheme()

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="signin" component={SignIn} />
      <Screen name="cadastro" component={Cadastro}
        options={{
          headerShown: true,
          title: 'Cadastro de usuário',
          headerStyle: {
            backgroundColor: colors.gray[600],
          },
          headerBackTitle: '',
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
      {/* <Screen name="new" component={Register} />
      <Screen name="details" component={Details} /> */}
    </Navigator>
  )
}