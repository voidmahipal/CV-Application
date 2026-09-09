import { useState } from "react";

function Button({type,onClick,text}) {
    return <>
        <button type={type} onClick={onClick}>{text}</button>
    </>
} 
function Input({labelFor,labelText,type,name,id,value,handleChange,isActive,placeholder}) {
    return <div>
        <label htmlFor={labelFor}>{labelText}</label>
        <input type={type} name={name} id={id} value={value} onChange={handleChange} readOnly={isActive} placeholder={placeholder} required></input>
    </div>
}

export default function Practical({setDisplayCompanyName,setDisplayPositionTitle,setDisplayMainResponsibilities,setDisplayDatesWorked}) {

    const [companyName,setCompanyName] = useState('');
    const [positionTitle,setPositionTitle] = useState('');
    const [mainResponsibilities,setMainResponsibilities] = useState('');
    const [datesWorked,setDatesWorked] = useState('');
    const [isActive,setIsActive] = useState(false);

    function handleSubmit() {
        setDisplayCompanyName(companyName);
        setDisplayPositionTitle(positionTitle);
        setDisplayMainResponsibilities(mainResponsibilities);
        setDisplayDatesWorked(datesWorked);
        setIsActive(true);
    }

    return <>
        <form onSubmit={(e)=>e.preventDefault()}>
            <div>
                <h2>Practical Experience</h2>
                <p>Add your work experience.</p>
            </div>
            <div>
                <Button type="button" onClick={()=>setIsActive(false)} text="Edit" />
                <Button type="submit" onClick={handleSubmit} text="Submit" />
            </div>
            <Input labelFor="companyName" labelText="Company Name" type="text" name="companyName" id="companyName" value={companyName} handleChange={(e)=>setCompanyName(e.target.value)} isActive={isActive} placeholder="Tech Solutions Inc."/>
            <Input labelFor="positionTitle" labelText="Position Title" type="text" name="positionTitle" id="positionTitle" value={positionTitle} handleChange={(e)=>setPositionTitle(e.target.value)} isActive={isActive} placeholder="Frontend Developer" />
            <Input labelFor="mainResponsibilities" labelText="Main Responsibilities" type="text" name="mainResponsibilities" id="mainResponsibilities" value={mainResponsibilities} handleChange={(e)=>setMainResponsibilities(e.target.value)} isActive={isActive} placeholder="Developed and maintained user interfaces using React. Collaborated with cross-functional teams to build and ship new features." />
            <Input labelFor="datesWorked" labelText="Dates Worked" type="text" name="datesWorked" id="datesWorked" value={datesWorked} handleChange={(e)=>setDatesWorked(e.target.value)} isActive={isActive} placeholder="2022-2024" />
        </form>
    </>
}