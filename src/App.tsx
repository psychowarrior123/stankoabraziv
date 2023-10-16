import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Routing } from './features/routing/Routing';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { HeadProvider } from 'react-head';

function App() {
  return (
    <HeadProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routing />
        </BrowserRouter>
      </ThemeProvider>
    </HeadProvider>
  );
}

export default App;
