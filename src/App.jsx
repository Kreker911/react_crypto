import { CryptoContextProvider } from "./context/CryptoContext";
import AppLayout from "./components/Layout/AppLayout";

export default function App() {
  return (
    <CryptoContextProvider>
      <AppLayout />
    </CryptoContextProvider>
  );
}
