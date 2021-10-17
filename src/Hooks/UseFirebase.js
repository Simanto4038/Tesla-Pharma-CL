import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged ,signInWithEmailAndPassword ,signOut   } from "firebase/auth";
import initializeAuthentation from "../Components/Firebase/FirebaseInitialization";



initializeAuthentation()

const UseFirebase = ()=>
{
  const auth = getAuth();
  const [user,setUser]=useState({})
  const [email,setEmail]=useState('')
  const [passWord,setPassWord]=useState('')
  const [error,setError] = useState('');
 
  const Googleprovider = new GoogleAuthProvider();
  

   
    
/** Google Sign In **/

const SignInWithGoogle =()=>
{
  console.log('google');
  signInWithPopup(auth, Googleprovider)
.then((result) => {
  
  // The signed-in user info.
  const {displayName,email,photoURL} = result.user;
  const loggedinUserInfo={
    name:displayName,
    email:email,
    photo:photoURL
  }

  // setUser(loggedinUserInfo);
  setUser( loggedinUserInfo );
  console.log(user);
  // ...
}).catch((error) => {
  // Handle Errors here.
  const errorCode = error.code;
  
 
  console.log(errorCode);
  setError(errorCode);
  // ...
});
}
     








/**Email & PW Handle Sign In */

// const handleEmailchange =(e)=>
// {  
// setEmail(e.target.value);
// }
// const handlePasswordchange =(e)=>
// {  
// setPassWord(e.target.value);
// }

const SigninWithEmail=(e)=>
{
  e.preventDefault();
  signInWithEmailAndPassword(auth, email, passWord)
  .then((result) => {
    // Signed in 
    const {displayName,email,photoURL} = result.user;
    const loggedinUserInfo={
      name:displayName,
      email:email,
      photo:photoURL
    }
    setUser(loggedinUserInfo);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    setError(errorCode);
  });

}


const SignoutHandler = ()=>
{
  signOut(auth).then(() => {
    setUser({});
    console.log('Sign-out successful');
  }).catch((error) => {
    setError('something Wrong Happend')
  });
}


    useEffect( ()=>
    {
        onAuthStateChanged(auth, (user) => {
            if (user) {
           
              setUser(user)
              //console.log(user);
            } else {
              // User is signed out
              // ...
            }
          });
    },[])
    return {user,
           auth,
           email,
           passWord,
           error,
           SigninWithEmail,
           SignoutHandler,
           setUser,
           setError,
           setEmail,
           setPassWord,
           SignInWithGoogle,
            }
}

export default UseFirebase ;