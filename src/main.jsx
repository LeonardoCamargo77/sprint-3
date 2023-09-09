import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home/index.jsx'
import Ia from './routes/IA/index.jsx'
import Cultivos from './routes/Cultivos/index.jsx'
import Contato from './routes/Contato/index.jsx'
import Agricultura from './routes/Agricultura/index.jsx'

const router = createBrowserRouter([
  {
    path: '/' ,
    element: <App/> ,
    errorElement: <Error/> ,
    children: [
      { path: '/' ,
      element: <Home/>
      },
      {path: '/Agricultura' ,
    element:<Agricultura/>
  },
      {path: '/Contato' ,
      element: <Contato/>

      },

      {path: '/Cultivos' ,
       element: <Cultivos/>

      },

      {path: '/Home' ,
       element: <Home/>

      },

      {path: '/Ia' ,
       element: <Ia/>

      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
