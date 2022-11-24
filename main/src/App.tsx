import "./index.scss";

import React, { Suspense } from "react";
import ReactDOM from "react-dom";


const Header = React.lazy(() => import('layout/Header'));
const Footer = React.lazy(() => import('layout/Footer'));
// const UserMenu = React.lazy(() => import('user/UserMenu'));
import UserMenu from 'user/UserMenu';

console.log(UserMenu)

const App = () => {
  
  document.addEventListener('menu-open', (e) => console.log(e.detail));
  return (
    <div className="main">
      <Suspense fallback="">
        <Header title="Welcome" 
          // left={<>left</>}
          right={
              <UserMenu />
          }
        />
      </Suspense>

      
      <section>
        
      </section>

      <Suspense fallback="">
        <Footer />
      </Suspense>
      
    </div>
  )
      }
ReactDOM.render(<App />, document.getElementById("app"));