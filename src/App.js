
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import Home from './Components/Home/Home';

import Platform from './Components/Platform/Platform';
import Solutions from './Components/Solutions/Solutions';
import Main from './Layout/Main';
import Header from './Components/Header/Header';

import Hijack from './Components/Hijack/Hijack';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import AuthProviders from './providers/AuthProviders';
import Profile from './Components/Profile/Profile';
import PrivateRoutes from './Components/Routes/PrivateRoutes';
import SqlInjection from './Components/SqlInjection/SqlInjection';
import Storedprocedure from './Components/Storedprocedure/Storedprocedure';
import Cryptography from './Components/Cryptography/Cryptography';
import Phising from './Components/Phishing/Phising';
import XssPrevention from './Components/Xss/XssPrevention';
import DdosComponent from './Components/Ddos/DdosComponent';
import MalwareDetect from './Components/Malware/MalwareDetect';





function App() {


  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
     

      children:[
        {
          path:'/',
          element:<Home></Home>,
         
        },
        {
          path:'/solution',
          element:<PrivateRoutes><Solutions></Solutions></PrivateRoutes>

        },
        {
          path:'/platform',
          element:<Platform></Platform>
        },
        {
          path:'/header',
          element:<Header></Header>
        },
        {
          path:'/cards/SQL Injection Attack',
       
          element:<PrivateRoutes><SqlInjection></SqlInjection></PrivateRoutes>
        },
        {
          path:'/cards/Cookie/Session Hijacking',
          element:<PrivateRoutes><Hijack></Hijack></PrivateRoutes>
        },
        {
          path:'/storedprocedure',
          element:<PrivateRoutes><Storedprocedure></Storedprocedure></PrivateRoutes>
        },
        {
          path:'/cryptography',
          element:<PrivateRoutes><Cryptography></Cryptography></PrivateRoutes>
        },
        {
          path:'/cards/phishing',
          element:<PrivateRoutes><Phising></Phising></PrivateRoutes>
        },
        {
          path:'/cards/Cross-Site-Scripting',
          element:<PrivateRoutes><XssPrevention></XssPrevention></PrivateRoutes>
        },
        {
          path:'/cards/Denial of service Attack/DDOS',
          element:<PrivateRoutes><DdosComponent></DdosComponent></PrivateRoutes>
        },

        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<Signup></Signup>
        },
        {
          path:'/profile',
          element:<PrivateRoutes><Profile></Profile></PrivateRoutes>
        },
        {
          path:'/cards/Malwares',
          element:<PrivateRoutes><MalwareDetect></MalwareDetect></PrivateRoutes>
        }
       
      ]


     
    }


    
  ])

  return (
   
   <>
   
   <AuthProviders>
   <RouterProvider router={router}></RouterProvider>
   </AuthProviders>
   </>

   
  );

}

export default App;




