import React from 'react';
import Navigation from './navigation';
import UserContextProvider from './screens/contexts/UserContext'


class App extends React.Component {

  render() { 
    return (
        <UserContextProvider>

         <Navigation/>

         </UserContextProvider>
     
    );
  }
}
 
export default App;
