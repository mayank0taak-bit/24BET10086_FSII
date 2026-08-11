import { UserProvider } from './context/UserContext';
import App from './App';
import './index.css';

export default function Root() {
  return (
    <UserProvider>
      <App />
    </UserProvider>
  );
}
