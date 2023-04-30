import { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import styled from 'styled-components';

import { useTheme } from './hooks/useTheme';
import { API_URL } from './utils/constants';

import Header from './components/Header';

export const AppContext = createContext(null);

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () =>
  fetch(`${API_URL}all?fields=name,capital,region,population,cca3,flags`);

const App = () => {
  const data = useLoaderData();
  const { theme, toggleTheme } = useTheme();

  return (
    <AppContext.Provider value={{ data, theme }}>
      <Header onSwitchTheme={toggleTheme} theme={theme} />
      <Main>
        <Outlet />
      </Main>
    </AppContext.Provider>
  );
};

const Main = styled.main`
  padding-inline: 1.5rem;
  max-width: 131rem;
  margin: auto;
`;

export default App;
