import { Outlet, useNavigation } from "react-router-dom";
import Nav from "./Nav";
const Root = () => {

const Loading = useNavigation();

const Waits = Loading.state === 'loading';

  return (
    <div className="bg-[#0f0e17]">
    <Nav/>
{Waits && <p className="text-[#fffffe]">Loadinggg...</p>}
    <Outlet/>
   

    </div>
  )
}

export default Root