import React, { useState } from 'react';
import { GluestackUIProvider, Text, Box, Button, ButtonText, ChevronDownIcon, Icon, Input, InputField, Checkbox, CheckIcon } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import { Select, SelectTrigger, SelectInput, SelectPortal, SelectBackdrop, SelectContent, SelectDragIndicatorWrapper, SelectDragIndicator, SelectItem , CheckboxIcon, } from '@gluestack-ui/themed';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TouchableOpacity, Platform } from 'react-native';
import { format } from 'date-fns';
import { useNavigation } from '@react-navigation/native';

const areas = [
  { label: 'Ciências Agrárias', value: 'agrarias' },
  { label: 'Ciências Biológicas', value: 'biologicas' },
  { label: 'Ciências Sociais', value: 'sociais' },
  { label: 'Linguística', value: 'linguistica' },
  { label: 'Artes', value: 'artes' },
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
      <Box p="$4">
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
              {areas.map(area => (
                <SelectItem
                  key={area.value}
                  label={area.label}
                  value={area.value}
                  onPress={() => handleAreaSelect(area.value)}
                />
              ))}
            </SelectContent>
          </SelectPortal>
        </Select>
        {selectedAreas.length > 0 && (
          <Box mt="$4">
            {selectedAreas.map(area => (
              <Box key={area} flexDirection="row" alignItems="center">
                <Checkbox
                  isChecked={true}
                  onChange={() => handleAreaSelect(area)}
                  aria-label={areas.find(a => a.value === area).label}
                >
                  <CheckboxIcon as={CheckIcon} />
                </Checkbox>
                <Text ml="$2">{areas.find(a => a.value === area).label}</Text>
              </Box>
            ))}
          </Box>
        )}

        <Button size="md" onPress={() => navigation.navigate('Crud2')}>
          <ButtonText>Próximo</ButtonText>
        </Button>
      </Box>
    </GluestackUIProvider>
  );
};

export default EventoForm;
