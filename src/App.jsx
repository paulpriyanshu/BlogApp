import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth';
import { Footer, Header } from './components';


function App() {
  const [loading,setloading] = useState(true);
  const dispatch=useDispatch();
  
  useEffect(()=>{
    authService.checkcurrentuser()
    .then((userdata)=>{
      if(userdata){
        dispatch(login(userdata))
      }else{
        dispatch(logout());
      }
    }).finally(()=>setloading(false))
  },[])
 
  return !loading ?(
    <>
    <div className="flex justify-center min-h-screen bg-slate-500 ">
    <div>
      <Header/>
    <main>
      
    </main>
    <Footer/>
    </div>
    
    </div>
    </>
  ):null
}

export default App
