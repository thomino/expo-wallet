import { useState } from 'react';
import { View, Text, Dimensions, Pressable, ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
const initialPaymentMethods = [
    {
        id: '1',
        type: 'credit_card',
        cardNumber: '4242',
        cardHolder: 'John Doe',
        expiryDate: '05/25',
        isDefault: true,
        brand: 'Visa'
    },
    {
        id: '2',
        type: 'credit_card',
        cardNumber: '5678',
        cardHolder: 'John Doe',
        expiryDate: '08/24',
        isDefault: false,
        brand: 'Mastercard'
    }
];


const Cards = () => {
    const [paymentMethods, setPaymentMethods] = useState(initialPaymentMethods);
    return (
        <>
            <Text className='text-text text-lg font-bold mt-6 px-6 mb-4'>Cards</Text>
            <ScrollView className='px-6 mb-2  border-b-4 border-secondary pb-10' horizontal showsHorizontalScrollIndicator={false}>
                {paymentMethods.map((method) => (
                    <CardPreview key={method.id} {...method} onSetDefault={() => { }} onDelete={() => { }} />
                ))}
            </ScrollView>
        </>
    )
}

export default Cards

const CardPreview = (props: {
    cardNumber: string;
    cardHolder: string;
    expiryDate: string;
    brand: string;
    isDefault: boolean;
    onSetDefault: () => void;
    onDelete: () => void;
}) => {
    const { width } = Dimensions.get('window');
    return (
        <View
            className={`h-44 w-72 mr-4 rounded-2xl flex flex-col justify-end ${props.brand === 'Visa' ? 'bg-lime-300' : 'bg-sky-300'}`}

        >
            <LinearGradient
                style={{ height: '100%', borderRadius: 10, justifyContent: 'flex-end' }}
                colors={[props.brand === 'Visa' ? '#BBF451' : '#74D4FF', props.brand === 'Visa' ? '#DEFF9F' : '#ACE3FF']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                <View className='p-4'>
                    <Text className="font-bold font-mono text-sm">•••• •••• •••• {props.cardNumber}</Text>
                    <View className='flex-row justify-between'>
                        <Text className='text-sm'>{props.cardHolder}</Text>
                        <Text className='text-sm font-mono font-bold'>{props.expiryDate}</Text>
                    </View>
                </View>

                <View className='absolute top-0 left-0 p-4 flex-row w-full justify-between'>
                    <Text className='text-base font-bold'>{props.brand}</Text>

                    {props.isDefault ?
                        <View className='px-2 py-1 bg-black rounded-full items-center justify-center'>
                            <Text className='text-white text-xs'>Default</Text>
                        </View>
                        :
                        <></>
                    }
                </View>
            </LinearGradient>
        </View>
    );
};