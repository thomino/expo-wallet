import { View, Text, Image } from 'react-native'
import ThemeToggle from './ThemeToggle'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Header = () => {
    const insets = useSafeAreaInsets();
    return (
        <View className="flex-row bg-background justify-between items-center py-4 px-6" style={{ paddingTop: insets.top }}>
            <Image source={require('assets/user.jpg')} className="w-10 h-10 rounded-full" />
            <ThemeToggle />
        </View>
    )
}

export default Header   
