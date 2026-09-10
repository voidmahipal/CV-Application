import "../styles/Display.css"

export default function Display({name,email,phoneNo,schoolName,titleOfStudy,dateOfStudy,companyName,positionTitle,mainResponsibilities,datesWorked}) {

    return <section className="display">
        <div className="displayHeading">
            <h2>{name}</h2>
            <div>
                <h3 className="email">{email}</h3>
                <h3 className="phNo">{phoneNo}</h3>
            </div>
            <hr />
        </div>
        <div className="edu">
            <h3>Education</h3>
            <div>
                <h4>{schoolName}</h4>
                <p>{titleOfStudy}</p>
                <p>{dateOfStudy}</p>
            </div>
            <hr />
        </div>
        <div className="exp">
            <h3>Work Experience</h3>
            <div>
                <h4>{companyName}</h4>
                <p>{positionTitle}</p>
                <p>{mainResponsibilities}</p>
                <p>{datesWorked}</p>
            </div>
        </div>
    </section>
}