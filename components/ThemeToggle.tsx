import { Pressable, View } from 'react-native';
import { useTheme } from 'providers/ThemeProvider';
import Feather from '@expo/vector-icons/Feather';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { useEffect } from 'react';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const translateX = useSharedValue(isDark ? 36 : 3.5); 

  useEffect(() => {
    translateX.value = withSpring(isDark ? 36 : 3.5, {
      damping: 15,
      stiffness: 150,
    });
  }, [isDark]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  return (
    <Pressable 
      onPress={toggleTheme}
      className='w-20 h-10 p-1 bg-secondary relative flex-row rounded-full items-center justify-between'>
      <Icon icon='sun' />
      <Icon icon='moon' />
      <Animated.View 
        style={[animatedStyle]}
        className="w-9 h-9 bg-background rounded-full items-center justify-center flex flex-row absolute"
      />
    </Pressable>
  );
};

const Icon = (props: any) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <View className='w-9 h-9 relative z-50 rounded-full items-center justify-center flex flex-row'>
      <Feather name={props.icon} size={16} color={`${isDark ? 'white' : 'black'}`} />
    </View>
  );
};

export default ThemeToggle;