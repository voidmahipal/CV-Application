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

export default function Education({setDisplaySchoolName,setDisplayTitleOfStudy,setDisplayDateOfStudy}) {

    const [schoolName,setSchoolName] = useState('');
    const [titleOfStudy,setTitleOfStudy] = useState('');
    const [dateOfStudy,setDateOfStudy] = useState('');
    const [isActive,setIsActive] = useState(false);

    function handleSubmit() {
        setDisplaySchoolName(schoolName);
        setDisplayTitleOfStudy(titleOfStudy);
        setDisplayDateOfStudy(dateOfStudy);
        setIsActive(true);
    }

    return <>
        <form onSubmit={(e)=>e.preventDefault()}>
            <div className="genHeading">
                <div>
                    <h2>Educational Experience</h2>
                    <p>Add details about your education.</p>
                </div>
                <div className="btns">
                    <Button type="button" onClick={()=>setIsActive(false)} text="Edit" />
                    <Button type="submit" onClick={handleSubmit} text="Submit" />
                </div>
            </div>
            <div className="takeInput">
                <Input labelFor="schoolName" labelText="School Name" type="text" name="schoolName" id="schoolName" value={schoolName} handleChange={(e)=>setSchoolName(e.target.value)} isActive={isActive} placeholder="Standford University" />
                <Input labelFor="titleOfStudy" labelText="Title of Study" type="text" name="titleOfStudy" id="titleOfStudy" value={titleOfStudy} handleChange={(e)=>setTitleOfStudy(e.target.value)} isActive={isActive} placeholder="B.Sc. Computer Science" />
                <Input labelFor="dateOfStudy" labelText="Date of Study" type="text" name="dateOfStudy" id="dateOfStudy" value={dateOfStudy} handleChange={(e)=>setDateOfStudy(e.target.value)} isActive={isActive} placeholder="2018-2022" />
            </div>
        </form>
    </>
}