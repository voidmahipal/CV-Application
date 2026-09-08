import { useState } from "react";

function Button({type,onClick,text}) {
    return <>
        <button type={type} onClick={onClick}>{text}</button>
    </>
} 
function Input({labelFor,labelText,type,name,id,value,handleChange,isActive}) {
    return <>
        <label htmlFor={labelFor}>{labelText}</label>
        <input type={type} name={name} id={id} value={value} onChange={handleChange} readOnly={isActive} required></input>
    </>
}
export default function GeneralInfo({setDisplayName,setDisplayEmail,setDisplayPhoneNo}) {

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [phoneNo,setPhoneNo] = useState();
    const [isActive,setIsActive] = useState(false);

    function handleSubmit() {
        setDisplayName(name);
        setDisplayEmail(email);
        setDisplayPhoneNo(phoneNo);
        setIsActive(true);
    }
    return <>
        <form onSubmit={(e)=>e.preventDefault()}>
            <div>
                <h2>General Information</h2>
                <p>Add your basic contact details.</p>
            </div>
            <div>
                <Button type="button" onClick={()=>setIsActive(false)} text="Edit" />
                <Button type="submit" onClick={handleSubmit} text="Submit" />
            </div>
            <div>
                <Input labelFor="name" labelText="Full Name" type="text" name="name" id="name" value={name} handleChange={(e)=>setName(e.target.value)} isActive={isActive}/>
            </div>
            <div>
                <Input labelFor="email" labelText="Email" type="email" name="email" id="email" value={email} handleChange={(e)=>setEmail(e.target.value)} isActive={isActive} />
            </div>
            <div>
                <Input labelFor="phoneNo" labelText="Phone Number" type="tel" name="phoneNo" id="phoneNo" value={phoneNo} handleChange={(e)=>setPhoneNo(e.target.value)} isActive={isActive} />
            </div>
        </form>
    </>
}