import React, { useState } from 'react';
import { GluestackUIProvider, Text, Box, Button, ButtonText, ChevronDownIcon, Icon, Input, InputField } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import { Select, SelectTrigger, SelectInput, SelectPortal, SelectBackdrop, SelectContent, SelectDragIndicatorWrapper, SelectDragIndicator, SelectItem } from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';

const ComiteForm = () => {
  const [evaluationForm, setEvaluationForm] = useState('');
  const navigation = useNavigation();

  return (
    <GluestackUIProvider config={config}>
      <Box p="$4">
        <Text mt="$4">Nome do Membro</Text>
        <Input variant="outline" size="md">
          <InputField placeholder='Digite o nome do membro' />
        </Input>

        <Text mt="$4">Email do Membro</Text>
        <Input variant="outline" size="md">
          <InputField placeholder='Digite o email do membro' />
        </Input>

        <Text mt="$4">Instituição</Text>
        <Input variant="outline" size="md">
          <InputField placeholder='Digite a instituição do membro' />
        </Input>

        <Text mt="$4">Escolha da Ficha de Avaliação</Text>
        <Select onValueChange={value => setEvaluationForm(value)}>
          <SelectTrigger variant="outline" size="md">
            <SelectInput placeholder="Selecione" />
            <Icon as={ChevronDownIcon} mr="$3" />
          </SelectTrigger>
          <SelectPortal>
            <SelectBackdrop />
            <SelectContent>
              <SelectDragIndicatorWrapper>
                <SelectDragIndicator />
              </SelectDragIndicatorWrapper>
              <SelectItem label="Ficha A" value="ficha_a" />
              <SelectItem label="Ficha B" value="ficha_b" />
              <SelectItem label="Ficha C" value="ficha_c" />
            </SelectContent>
          </SelectPortal>
        </Select>

        <Button size="md" mt="$4" onPress={() => navigation.navigate('Crud2')}>
          <ButtonText>Finalizar</ButtonText>
        </Button>
      </Box>
    </GluestackUIProvider>
  );
};

export default ComiteForm;
