import './App.css';
import Button from '@mui/material/Button';
import Hook from './Hook';
import { green } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: green[500],
    },
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Hook />
        <Button variant="contained">Try me</Button>
      </div>
    </ThemeProvider>

  );
}

export default App;
