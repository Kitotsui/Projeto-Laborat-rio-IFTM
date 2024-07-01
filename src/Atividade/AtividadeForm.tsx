import React, { useState } from 'react';
import { GluestackUIProvider, Text, Box, Button, ButtonText, ChevronDownIcon, Icon, Input, InputField } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import { Select, SelectTrigger, SelectInput, SelectPortal, 
    SelectBackdrop, SelectContent, SelectDragIndicatorWrapper, SelectDragIndicator, SelectItem, 
    FormControl, FormControlLabel, FormControlLabelText, TextareaInput, Textarea, FormControlHelperText, FormControlHelper} from '@gluestack-ui/themed';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TouchableOpacity, Platform, ScrollView } from 'react-native';
import { format } from 'date-fns';
import { useNavigation } from '@react-navigation/native';

const AtividadeForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);
  const navigation = useNavigation();

  const onStartDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || startDate;
    setShowStartDatePicker(Platform.OS === 'ios');
    setStartDate(currentDate);
  };

  const onEndDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || endDate;
    setShowEndDatePicker(Platform.OS === 'ios');
    setEndDate(currentDate);
  };

  return (
    <GluestackUIProvider config={config}>
      <ScrollView>
      <Box p="$4" backgroundColor="$white">
        <Text mt="$4">Título</Text>
        <Input variant="outline" size="md">
          <InputField placeholder='Digite o título da atividade' />
        </Input>

        
        <FormControl>
          <FormControlLabel>
            <FormControlLabelText>
              Descrição
            </FormControlLabelText>
          </FormControlLabel>
          <Textarea>
            <TextareaInput placeholder='Escreva uma breve descrição da atividade' />
          </Textarea>
        </FormControl>
      

        <Text mt="$4">Tipo</Text>
        <Select>
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
              <SelectItem label="Apresentação de Trabalho" value="apresentacao" />
              <SelectItem label="Curso" value="curso" />
              <SelectItem label="Oficina" value="oficina" />
              <SelectItem label="Mostra" value="mostra" />
              <SelectItem label="Atividade artística" value="artistica" />
            </SelectContent>
          </SelectPortal>
        </Select>

        <Text mt="$4">Inscrição</Text>
        <Select>
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
              <SelectItem label="Gratuita" value="gratuita" />
              <SelectItem label="Paga" value="paga" />
            </SelectContent>
          </SelectPortal>
        </Select>

        <Text mt="$4">Data Início</Text>
        <TouchableOpacity onPress={() => setShowStartDatePicker(true)}>
          <Input variant="outline" size="md">
            <InputField
              value={format(startDate, 'dd/MM/yyyy')}
              editable={false}
              placeholder='Selecione a data de início'
            />
          </Input>
        </TouchableOpacity>
        {showStartDatePicker && (
          <DateTimePicker
            value={startDate}
            mode="date"
            display="default"
            onChange={onStartDateChange}
          />
        )}

        <Text mt="$4">Data Término</Text>
        <TouchableOpacity onPress={() => setShowEndDatePicker(true)}>
          <Input variant="outline" size="md">
            <InputField
              value={format(endDate, 'dd/MM/yyyy')}
              editable={false}
              placeholder='Selecione a data de término'
            />
          </Input>
        </TouchableOpacity>
        {showEndDatePicker && (
          <DateTimePicker
            value={endDate}
            mode="date"
            display="default"
            onChange={onEndDateChange}
          />
        )}

        <Button size="md" mt="$4" onPress={() => navigation.navigate('Crud3')}>
          <ButtonText>Próximo</ButtonText>
        </Button>
      </Box>
      </ScrollView>
    </GluestackUIProvider>
  );
};

export default AtividadeForm;
