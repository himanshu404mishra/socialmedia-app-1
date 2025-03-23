import { MantineProvider } from "@mantine/core";
import '@mantine/core/styles.css';
import "./App.css"
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";


function App() {
  return (
   <MantineProvider>
     <div className="App">
        <div className="blur" style={{top:"-18%", right:"0"}}></div>
        <div className="blur" style={{top:"36%", left:"-8rem"}}></div>
        {/* <Home/> */}

        {/* <Profile/> */}

        <Auth/>
    </div>
   </MantineProvider>
  );
}

export default App;
