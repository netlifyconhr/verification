import { AuthProvider } from "./context/AuthContext";
import RouteProvider from "./router";

function App() {
  return (
    <AuthProvider>
      <RouteProvider />
    </AuthProvider>
  );
}

export default App;
