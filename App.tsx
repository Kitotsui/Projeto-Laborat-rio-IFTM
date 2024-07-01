import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import EventoForm from './src/Evento/EventoForm';
import AtividadeForm from './src/Atividade/AtividadeForm';
import ComiteForm from './src/Comite/ComiteForm';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Crud1">
          <Stack.Screen name="Crud1" component={EventoForm} options={{ title: 'Cadastro de Evento' }} />
          <Stack.Screen name="Crud2" component={AtividadeForm} options={{ title: 'Cadastro de Atividade' }} />
          <Stack.Screen name="Crud3" component={ComiteForm} options={{ title: 'Cadastro de Comitê' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </GluestackUIProvider>
  );
}
