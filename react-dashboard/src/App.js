import { usestate } from "react";
import { ColorModeContext, useMode} from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Routes, Route } from "react-router-dom";
import  topbar from "./scenes/global/topbar";
import sidebar from './scenes/global/sidebar';
import dashboard from "./scenes/dashboard";
import officeteam from "./scenes/officeteam";
import Geography from "./scenes/Geography";
import BarChart from "./scenes/BarChart"; 
import calender from "./scenes/calender"; 


function App() {
  const [theme, colorMode] = useMode();
  const [issidebar, setIssidebar] = usestate(true);

  return (<ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme= {theme}>
      <CssBaseline/>
    <div className="app">
      <sidebar /> 
      <main className ="content">
      <topbar />
      <Routes>
        <Route path= "/" element={<dashboard />} />
      </Routes>
      <Routes>
        <Route path="/" element={<dashboard />} />
        <Route path="/Geography" element ={<Geography />} />
        <Route path="/officetemp" element={<officetemp />} />
        <Route path="/BarChart" element={<BarChart />} />
        <Route path="/calender" element={<calender />} />
      </Routes>
      </main>
        </div>
     </ThemeProvider>
    </ColorModeContext.Provider>
  );
} 

export default App;
