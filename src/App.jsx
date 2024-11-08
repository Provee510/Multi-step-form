import React from 'react'
import Personal from './components/Personal';
import MobilePersonal from './components/MobilePersonal';
import MobileInfo from './components/MobileInfo';
import MobileYearly from './components/MobileYearly';
import MobilePickOne from './components/MobilePickOne';

const App = () => {
  return (
    <div className="">
     <div className="lg:inline hidden">
     <Personal/>
     </div>
    <div className="lg:hidden">
    {/* <MobilePersonal/> */}
    {/* <MobileInfo/> */}
    {/* <MobileYearly/> */}
    <MobilePickOne/>
    </div>
    </div>
  )
}

export default App;