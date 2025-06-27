import { View, Text } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useThemeColors } from 'contexts/ThemeColors';


const Transactions = () => {
    return (
        <View className='p-6'>
            <Text className='text-text text-lg font-bold mb-4'>Transactions</Text>
            <TransactionItem icon="apple1" title="Apple" amount="$359.00" method="Apple Pay" time="1 hour ago" />
            <TransactionItem icon="google" title="Google" amount="$51.00" method="Google Pay" time="2 hours ago" />
            <TransactionItem icon="amazon" title="Amazon" amount="$119.00" method="Amazon Pay" time="3 hours ago" />
            <TransactionItem icon="apple1" title="Apple" amount="$69.00" method="Apple Pay" time="4 hours ago" />
            <TransactionItem icon="twitter" title="Twitter" amount="$99.00" method="Twitter Pay" time="5 hours ago" />
        </View>
    )
}

const TransactionItem = (props: any) => {
    const colors = useThemeColors();
    return (
        <View className='flex-row items-center justify-start py-3'>
            <View className='w-14 h-14 bg-secondary rounded-full items-center justify-center mr-3'>
                <AntDesign name={props.icon} size={24} color={colors.text} />
            </View>
            <View>
                <Text className='text-text text-lg font-bold'>{props.title}</Text>
                <Text className='text-text text-sm opacity-55'>{props.time}</Text>
            </View>
            <View className='ml-auto items-end'>
                <Text className='text-text text-lg font-semibold'>{props.amount}</Text>
                <Text className='text-text text-sm opacity-55'>{props.method}</Text>
            </View>
        </View>
    )
}

export default Transactions