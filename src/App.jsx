import {createBrowserRouter,RouterProvider} from 'react-router-dom';

import Root from './Pages/Root';
import HomePage from './Pages/HomePage';
import Error from './Pages/Error';
import Content,{dataUchia as Uchia} from './Pages/Content';
import ContentDetails from './Pages/ContentDtails';

function App() {
 
  const routes = createBrowserRouter([
    {
      path:'/',
      element:<Root/>,
      errorElement:<Error/>,
      children:[
        {index:true,element:<HomePage/>},
        {
          path:'mainContent',
          id:'UchiasData',
          loader:Uchia,
          children:[
            {index:true,element:<Content/>},
            {path:':contentID',element:<ContentDetails/>}
          ]
        }
      
      ]
    }
  ])

  return (

    <RouterProvider router={routes}/>
   
  )
}

export default App
