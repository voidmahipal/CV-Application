import {useState} from 'react'
import './App.css'
import GeneralInfo from './component/GeneralInfo.jsx'
import Display from './component/Display.jsx'

function App() {

    const [name,setDisplayName] = useState('');
    const [email,setDisplayEmail] = useState('');
    const [phoneNo,setDisplayPhoneNo] = useState();
    return <>
        <Display name={name} email={email} phoneNo={phoneNo}/>
        <GeneralInfo setDisplayName={setDisplayName} setDisplayEmail={setDisplayEmail} setDisplayPhoneNo={setDisplayPhoneNo}/>
    </>
}

export default App
