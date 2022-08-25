import { BrowserRouter } from 'react-router-dom';

import AppRoutes from './Routes';

import { Provider } from './context/Provider';

const App: React.FC = () => {
  return (
      <BrowserRouter>
        <Provider>
          <AppRoutes />
        </Provider>
      </BrowserRouter>
  );
}

export default App;
