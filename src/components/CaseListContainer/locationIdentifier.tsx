import React, { useEffect, useState } from 'react'
import {countries} from 'countries-list';

interface ILocationIdentifier{
    children:(country:string,loading:Boolean,setCountry:(country:string)=>void)=>React.ReactNode;
}
const LocationIdentifier:React.SFC<ILocationIdentifier> = ({children}) => {
    const getCountryNameByCode = (code:string) => Object.entries(countries).find(([key,country])=>key===code);

    const countryFromLS = localStorage.getItem('country');
    const [country, setCountry] = useState("");
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if (countryFromLS===null||countryFromLS===""||countryFromLS==="undefined"){
            setLoading(true);
            fetch('https://ipinfo.io?token=e5ed3a59b1cb0e')
            .then(res=>res.json())
            .then(res=>{
                const foundCountry = getCountryNameByCode(res.country)?.[1].name??"";
          
                localStorage.setItem('country',foundCountry);
                setCountry(foundCountry);
                setLoading(false);
            })
        }else{
            setCountry(countryFromLS);
        }
    }, [countryFromLS])
    return (
        <div>
            {children(country,loading,setCountry)}
        </div>
    )
}

export default LocationIdentifier
