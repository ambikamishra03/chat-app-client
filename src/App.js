import Messanger from './components/Messanger';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from './context/AccountProvider';

function App() {
  const clientId = '525618397438-ed6b446g8ui08ti5ltermt16c8fct9ai.apps.googleusercontent.com'
  return (
    <GoogleOAuthProvider clientId={clientId}>
    <AccountProvider>
    <Messanger/>
    </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
