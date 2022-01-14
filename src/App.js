import { Box } from '@mui/material';
import './App.css';
import ListHomeworks from './features/homeworks/ListHomeworks';
import SideMenu from './features/menu/SideMenu';
import { Provider } from 'react-redux';
import { store } from './store';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <div>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'stretch' , height: '100vh'}}>
          <Box sx={{ bgcolor: 'info.main' }}>
            <SideMenu />
          </Box>
          <Box>
            <ListHomeworks/>
          </Box>
        </Box>
      </div>
      </Provider>
    </div>
  );
}

export default App;
