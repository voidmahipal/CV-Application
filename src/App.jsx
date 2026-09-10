import {useState} from 'react'
import './styles/App.css'
import GeneralInfo from './component/GeneralInfo.jsx'
import Display from './component/Display.jsx'
import Education from './component/Education.jsx'
import Practical from './component/Practical.jsx'

function Header({heading,tagline}) {
    return <header>
        <h1>{heading}</h1>
        <p>{tagline}</p>
    </header>
}
function App() {

    const [name,setDisplayName] = useState("Alex Turner");
    const [email,setDisplayEmail] = useState("alex.turner@example.com");
    const [phoneNo,setDisplayPhoneNo] = useState("+919876543210");
    const [schoolName,setDisplaySchoolName] = useState("Standford University");
    const [titleOfStudy,setDisplayTitleOfStudy] = useState("B.Sc. Computer Science");
    const [dateOfStudy,setDisplayDateOfStudy] = useState("2018-2020");
    const [companyName,setDisplayCompanyName] = useState("Tech Solutions Inc.");
    const [positionTitle,setDisplayPositionTitle] = useState("Frontend Developer");
    const [mainResponsibilities,setDisplayMainResponsibilities] = useState("Developed and maintained user interfaces using React. Collaborated with cross-functional teams to build and ship new features.");
    const [datesWorked,setDisplayDatesWorked] = useState("2022-2024");
    return <>
        <Header heading="CV Application" tagline="Fill in your details and see your CV update in real time."/>
        <main>
            <section className='infoInput'>
                <GeneralInfo setDisplayName={setDisplayName} setDisplayEmail={setDisplayEmail} setDisplayPhoneNo={setDisplayPhoneNo}/>
                <Education setDisplaySchoolName={setDisplaySchoolName} setDisplayTitleOfStudy={setDisplayTitleOfStudy} setDisplayDateOfStudy={setDisplayDateOfStudy}/>
                <Practical setDisplayCompanyName={setDisplayCompanyName} setDisplayPositionTitle={setDisplayPositionTitle} setDisplayMainResponsibilities={setDisplayMainResponsibilities} setDisplayDatesWorked={setDisplayDatesWorked}/>
            </section>
            <Display name={name} email={email} phoneNo={phoneNo} schoolName={schoolName} titleOfStudy={titleOfStudy} dateOfStudy={dateOfStudy} companyName={companyName} positionTitle={positionTitle} mainResponsibilities={mainResponsibilities} datesWorked={datesWorked} />
        </main>
    </>
}

export default App
