import { Box } from '@mui/material';
import './App.css';
import ListHomeworks from './features/homeworks/ListHomeworks';
import SideMenu from './features/menu/SideMenu';

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
