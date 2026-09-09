import { useState } from "react";

export default function Display({name,email,phoneNo,schoolName,titleOfStudy,dateOfStudy,companyName,positionTitle,mainResponsibilities,datesWorked}) {

    return <div>
        <div>
            <h2>{name}</h2>
            <h3>{email}</h3>
            <h3>{phoneNo}</h3>
        </div>
        <hr />
        <div>
            <h3>Education</h3>
            <h4>{schoolName}</h4>
            <h4>{titleOfStudy}</h4>
            <h4>{dateOfStudy}</h4>
        </div>
        <hr />
        <div>
            <h3>Work Experience</h3>
            <h4>{companyName}</h4>
            <h4>{positionTitle}</h4>
            <h4>{mainResponsibilities}</h4>
            <h4>{datesWorked}</h4>
        </div>
    </div>
}