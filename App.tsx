
import './global.css';
import { ScrollView } from 'react-native';
import { ThemeProvider } from 'providers/ThemeProvider';
import Header from 'components/Header';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Balance from 'components/Balance';
import Footer from 'components/Footer';
import Transactions from 'components/Transactions';
import Cards from 'components/Cards';
const AppContent = () => {
  return (
    <>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false} className="flex-1 bg-background">
        <Balance />
        <Cards />
        <Transactions />
        
      </ScrollView>
      <Footer />
    </>
  );
};

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
