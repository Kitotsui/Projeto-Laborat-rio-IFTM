import React, { useState } from 'react';
import { GluestackUIProvider, Text, Box, Button, ButtonText, ChevronDownIcon, Icon, Input, InputField, CheckIcon } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import { Select, SelectTrigger, SelectInput, SelectPortal, SelectBackdrop, SelectContent, SelectDragIndicatorWrapper, SelectDragIndicator, SelectItem } from '@gluestack-ui/themed';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TouchableOpacity, Platform, ScrollView } from 'react-native';
import { format } from 'date-fns';
import { useNavigation } from '@react-navigation/native';
import { MultipleSelectList } from 'react-native-dropdown-select-list';

const areas = [
  { label: 'Ciências Agrárias', value: 'Ciências Agrárias' },
  { label: 'Ciências Biológicas', value: 'Ciências Biológicas' },
  { label: 'Ciências Sociais', value: 'Ciências Sociais' },
  { label: 'Linguística', value: 'Linguística' },
  { label: 'Artes', value: 'Artes' },
];

const EventoForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);
  const [selectedAreas, setSelectedAreas] = useState([]);
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

  const handleAreaSelect = (value) => {
    setSelectedAreas(prevSelected => {
      if (prevSelected.includes(value)) {
        return prevSelected.filter(area => area !== value);
      } else {
        return [...prevSelected, value];
      }
    });
  };

  return (
    <GluestackUIProvider config={config}>
      <ScrollView>
        <Box p="$4" backgroundColor="$white">
          <Text mt="$4">Nome do Evento</Text>
          <Input variant="outline" size="md">
            <InputField placeholder='Digite o nome do evento' />
          </Input>

          <Text mt="$4">Tipo do Evento</Text>
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
                <SelectItem label="Acadêmico" value="academico" />
                <SelectItem label="Científico" value="cientifico" />
                <SelectItem label="Inovação" value="inovacao" />
                <SelectItem label="Extensão" value="extensao" />
                <SelectItem label="Exposição" value="exposicao" />
              </SelectContent>
            </SelectPortal>
          </Select>

          <Text mt="$4">Início do Evento</Text>
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

          <Text mt="$4">Término do Evento</Text>
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

          <Text mt="$4">Modalidade</Text>
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
                <SelectItem label="Online" value="online" />
                <SelectItem label="Presencial" value="presencial" />
                <SelectItem label="Híbrido" value="hibrido" />
              </SelectContent>
            </SelectPortal>
          </Select>

          <Text mt="$4">Área</Text>
          <MultipleSelectList 
            setSelected={(val) => setSelectedAreas(val)} 
            data={areas} 
            save="value"
            label="Selecione as Áreas"
            placeholder="Selecione"
            searchPlaceholder="Pesquisar"
            
            customDropdownIconStyles={{ opacity: 1.2 }} 
            boxStyles={{ 
              borderColor: 'grey', 
              borderWidth: 0.7, 
              borderRadius: 5, 
              opacity: 0.65
            }}
            placeholderStyles={{
              color: 'grey',
              opacity: 0.6,
            }}
          />
          {selectedAreas.length > 0 && (
            <Box mt="$4">
              {selectedAreas.map(area => (
                <Box key={area} flexDirection="row" alignItems="center">
                  <Icon as={CheckIcon} />
                  <Text ml="$2">{areas.find(a => a.value === area).value}</Text>
                </Box>
              ))}
            </Box>
          )}

          <Button size="md" mt="$4" onPress={() => navigation.navigate('Crud2')}>
            <ButtonText>Próximo</ButtonText>
          </Button>
        </Box>
      </ScrollView>
    </GluestackUIProvider>
  );
};

export default EventoForm;
