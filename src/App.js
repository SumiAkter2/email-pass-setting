import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import GoogleSignIn from './Components/Google/GoogleSignIn';

import Login from './Components/Login/Login';

function App() {
  return (
   <div>
     <GoogleSignIn></GoogleSignIn>
    <Login></Login>
   
   </div>
  );
}

export default App;
