import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';

import { Loading } from '../components/Loading';
import { useAuth } from '../hooks/auth';

import { AppRoutes } from './app.routes';
import { AppRoutes2 } from './app.routes2';

export function Routes() {
  const [loading, setIsLoading] = useState(true);

  const { user } = useAuth();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Loading />
  }

  console.log(user.token);
  
  return (
    <NavigationContainer>
      {user.token ? <AppRoutes /> : <AppRoutes2/>}
    </NavigationContainer>
  )
}