import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged ,signInWithEmailAndPassword ,signOut,sendPasswordResetEmail   } from "firebase/auth";
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

const GoogleSignInHandler = ()=>
{
  console.log('GOOGLE SIGN IN');
   return signInWithPopup(auth, Googleprovider)
  
}

const EmailSignInHandler = ()=>
{
  console.log('Email Sign In');
 return signInWithEmailAndPassword(auth, email, passWord)
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

// const SigninWithEmail=(e)=>
// {
//   e.preventDefault();
//   signInWithEmailAndPassword(auth, email, passWord)
//   .then((result) => {
//     // Signed in 
//     const {displayName,email,photoURL} = result.user;
//     const loggedinUserInfo={
//       name:displayName,
//       email:email,
//       photo:photoURL
//     }
//     setUser(loggedinUserInfo);
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     setError(errorCode);
//   });

// }


const SignoutHandler = ()=>
{
  signOut(auth).then(() => {
    setUser({});
    console.log('Sign-out successful');
  }).catch((error) => {
    setError('something Wrong Happend')
  });
}


const resetPasword=()=>
{
  sendPasswordResetEmail(auth, email)
  .then(() => {
    alert('A reset password link has been sent to your Email Address')
  })
  .catch((error) => {
    const errorCode = error.code;
   
    setError(errorCode );
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
           resetPasword,
           SignoutHandler,
           setUser,
           setError,
           setEmail,
           setPassWord,
           GoogleSignInHandler,
           EmailSignInHandler
            }
}

export default UseFirebase ;