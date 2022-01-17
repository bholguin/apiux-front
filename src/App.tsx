import { PersistGate } from 'redux-persist/integration/react';
import useStoreConfig from './redux';
import { Provider } from 'react-redux';
import Task from './screens/task';
import SpinnerLoading from './components/SpinnerLoading';

function App() {
  const { store, persistor } = useStoreConfig();
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Task />
        <SpinnerLoading />
      </PersistGate>
    </Provider>
  );
}

export default App;
