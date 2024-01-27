import { createContext } from "react";

const UserContext=createContext({
    loggedInUser:"Default User"
})


export default UserContext;


//Inside the functional component we  do  the following :

// import { useContext } from "react";
// import UserContext from ....
// const data=useContext(UserContext);//the data will be that object in UserContext and now you can use it accordingly.


//Inside a class Component we will do something as follows:
// import UserContext from ....
{/* <UserContext.Consumer>
    {(data)=><h1>{data.loggedInUser}</h1>}
</UserContext.Consumer>

<UserContext.Provider value={{loggedInUser:......,you can even pass the fucnrtion to modify it}}>
</UserContext.Provider> */}

