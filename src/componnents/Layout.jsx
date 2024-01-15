import Sidebar from './Sidebar';

const Layout = ({ children, logout }) => {
   return (
      <>
         <Sidebar logout={logout} />
         <main>{children}</main>
      </>
   );
}

export default Layout;