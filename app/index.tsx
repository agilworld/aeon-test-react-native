import { useCallback, useMemo, useState } from 'react';
import { StyleSheet, TextInput, TextInputProps, useColorScheme, TouchableOpacity, TouchableOpacityProps, TextProps } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import Screen from '@/components/Screen';

export default function HomeScreen() {
  const theme = useColorScheme() ?? 'light';
  const [firstNumber, setFirstNumber] = useState<number>()
  const [secondNumber, setSecondNumber] = useState<number>()
  const [total, setTotal] = useState<number>()

  const args = { 
    bgColor: theme === "light" ? Colors.light.searchBg : Colors.dark.searchBg,
    color: theme === "light" ? Colors.light.searchColor : Colors.dark.searchColor,
  }

  const buttonProps = { 
    bgColor: theme === "light" ? Colors.light.tabIconDefault : Colors.dark.tabIconDefault,
    color: theme === "light" ? Colors.light.btnPrimaryColor : Colors.dark.btnPrimaryColor,
  }
  const onChangeFirst = useCallback((text:string) => {
    setFirstNumber(parseInt(text))
  },[setFirstNumber, firstNumber])

  const onChangeSecond = useCallback((text:string) => {
    setSecondNumber(parseInt(text))
  },[setSecondNumber, secondNumber])

  const onAdd = useCallback(()=>{
    if( firstNumber!==undefined && secondNumber!==undefined ) {
      setTotal(firstNumber + secondNumber)
    } else {
      setTotal(undefined)
    }
   
  },[firstNumber, secondNumber])

  const FirstNumber = useMemo(()=> <TextInput 
    style={$inputBar(args)}
    onChangeText={onChangeFirst}
    placeholder='Enter first number'
  />,[onChangeFirst])

  const SecondNumber = useMemo(()=> <TextInput 
    style={$inputBar(args)}
    onChangeText={onChangeSecond}
    placeholder='Enter second number'
    keyboardType="numeric"
  />,[onChangeSecond])

  const ButtonAdd = useMemo(()=><TouchableOpacity onPress={onAdd} style={$buttonBar(buttonProps)} >
    <ThemedText style={$buttonText(buttonProps)}>Add Two Numbers</ThemedText>
  </TouchableOpacity>,[onAdd, firstNumber, secondNumber])

  const TotalNumber = useMemo(()=>
    <ThemedText type="subtitle">
      {typeof total === 'number' && isFinite(total) ? <ThemedText type="subtitle">Total : {total}</ThemedText> : <ThemedText type="defaultSemiBold">Please input valid number</ThemedText>}
    </ThemedText>
  ,[total])

  return (
    <Screen>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Challenge 1: Calculator</ThemedText>
        <ThemedText>
          Adding two numbers
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.formContainer}>
        {FirstNumber}
        {SecondNumber}
        {ButtonAdd}
        {TotalNumber}
      </ThemedView>
     
    </Screen>
  );
}

const $inputBar = (args:any): TextInputProps["style"] => ({
  backgroundColor:args.bgColor,
  borderRadius: 10,
  color:args.color,
  paddingHorizontal:20,
  width:300,
  height:40,
  marginVertical:6,
  paddingVertical:10
})

const $buttonBar = (args:any): TouchableOpacityProps["style"] => ({
  backgroundColor:args.bgColor,
  borderRadius: 10,
  marginVertical:6,
  paddingVertical:10
})

const $buttonText = (args:any): TextProps["style"] => ({
  color:args.color,
  textAlign:"center"
})


const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  formContainer: {
    marginVertical:12
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  }
});
