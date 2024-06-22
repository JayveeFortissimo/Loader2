import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
   <nav className="min-h-16 flex justify-center items-center gap-20 text-[#fffffe]">
<NavLink to="/" className={({isActive})=> isActive?"border-b-4 border-[#ff8906]":undefined} end>HomePage</NavLink>
<NavLink to="mainContent" className={({isActive})=> isActive?"border-b-4 border-[#ff8906]":undefined} >Content</NavLink>
   </nav>
  )
}

export default Nav