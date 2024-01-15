import { Link, Outlet } from "react-router-dom";

const Sidebar = ({ logout }) => {
   let cssClasses = "w-full text-right p-2 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";
   return (
      <>
         <aside className="hidden md:block w-1/3 px-8 py-16 bg-stone-900 text-stone-50 text-xl md:w-72 rounded-l-xl">
            <ul className="mt-8">
               <li>
                  <Link to='/'>
                     <button className={cssClasses}>
                        داشبورد
                     </button>
                  </Link>
               </li>
               <li>
                  <Link to='/employee'>
                     <button className={cssClasses}>
                        پرسنل
                     </button>
                  </Link>
               </li>
               <li>
                  <button className={cssClasses}>
                     شیفت
                  </button>
               </li>
               <li>
                  <button className={cssClasses}>
                     ساعت
                  </button>
               </li>
               <li>
                  <button className={cssClasses}>
                     گزارش
                  </button>
               </li>
               <li>
                  <button className={cssClasses}>
                     درخواست
                  </button>
               </li>
               <li>
                  <button className={cssClasses}>
                     پشتیبانی
                  </button>
               </li>
               <li>
                  <Link to='/' onClick={() => logout(true)}>
                     <button className={cssClasses}>
                        خروج
                     </button>
                  </Link>
               </li>
            </ul>
         </aside>

         <Outlet />
      </>
   )
}

export default Sidebar;