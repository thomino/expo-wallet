import { View, Text, Pressable } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const Footer = () => {
    const insets = useSafeAreaInsets();
    return (
        <View style={{ paddingBottom: insets.bottom }} className='flex-row px-6 pt-2 justify-between bg-background border-t border-secondary items-center p-4'>
            <Pressable className='flex-row items-center bg-invert py-4 justify-center w-full border border-secondary rounded-full p-2'>
                <Text className="text-background">Withdraw</Text>
            </Pressable>
        </View>
    )
}

export default Footer;