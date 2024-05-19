import { Link, Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { ViewProps } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Header } from './navbar';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

export type ScreenProps = ViewProps 

export default function Screen(_props:ScreenProps) {
  const { children } = _props
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.wrapper, {paddingTop:insets.top}]}>
      <Header />
      <ThemedView style={styles.container}>
        {children}
      </ThemedView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper:{
    flex:1
  },
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
