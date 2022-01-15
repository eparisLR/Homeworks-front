import { Box } from '@mui/material';
import './App.css';
import SideMenu from './components/layout/SideMenu';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Outlet } from 'react-router';


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
            <Outlet/>
          </Box>
        </Box>
      </div>
      </Provider>
    </div>
  );
}

export default App;
