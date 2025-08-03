import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import Spinner from "./components/utils/Spinner";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // redux provider - makes redux store accessible accross the components
  <Provider store={store}>
    {/* Persistgate wraps main application component - App.tsx and displays 
        fallback Spinner animatino while redux is being rehydrated */}
    <PersistGate loading={<Spinner />} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
