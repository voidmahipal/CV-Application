import { useState } from "react";

export default function Display({name,email,phoneNo}) {

    return <div>
        <h2>{name}</h2>
        <h3>{email}</h3>
        <h3>{phoneNo}</h3>
    </div>
}