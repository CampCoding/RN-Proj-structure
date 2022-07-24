import React,{createContext} from 'react'

export const UserContext=createContext()


class UserContextProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            mname:"ahmed ali",
            mage:"22",
         }
    }

    
    changename=()=>{
        this.setState({
            mname:"marwan samy"
        })
    }
    
    render() { 
        return (  

            <UserContext.Provider value={{...this.state,changename:this.changename}} >

                {this.props.children}

            </UserContext.Provider>
        );
    }
}
 
export default UserContextProvider;