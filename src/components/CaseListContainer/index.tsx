import React, { useState } from 'react'
import CaseList from '../CaseList';
import LoadingSpinner from '../LoadingSpinner';
import {
    Box,
    Flex  } from 'rebass';
import Select from 'react-select';
import countryList from './countries.json';
import LocationIdentifier from './locationIdentifier';

const CaseListContainer = () => {
    const [currentCountry, setCurrentCountry] = useState<string>("");
    const [currentRange, setCurrentRange] = useState<number>(7);

    const QUERY_RANGE = [
        {value:"7",label:"past week"},
        {value:"30",label:"past month"},
        {value:"90",label:"past 3 months"},
        {value:"180",label:"past 6 months"}
    ];

    const customSelectStyle={singleValue:(props: any)=>({...props,color:"white"}),control:(props: any)=>({...props,color:"white",backgroundColor:"black"})};

    return (
        <LocationIdentifier>
            {(country,loading,setCountry)=>{
                if (loading){
                    return <LoadingSpinner>Getting your location detail...</LoadingSpinner>
                }
                if (country===""){
                    return <LoadingSpinner>Loading...</LoadingSpinner>
                }
        
                const currentCountryOption = {value:country,label:country};
                const userCountryOption = {value:currentCountry,label:currentCountry};
                return (<Box>
                    <Flex justifyContent="space-between" paddingX={4} marginY="4">
                    <Box flex="1">
                    <Select styles={customSelectStyle} value={currentCountry!==""?userCountryOption:currentCountryOption} onChange={(item:any)=>setCurrentCountry(item.value)} options={countryList.map(({name})=>({value:name,label:name}))}>
                    </Select>
                    </Box>
                    <Box flex="1">
                    <Select styles={customSelectStyle} value={QUERY_RANGE.find(elem=>elem.value===String(currentRange))} onChange={(item:any)=>setCurrentRange(Number(item.value))}  options={QUERY_RANGE}></Select>
                    </Box>
                    </Flex>
                    <CaseList country={currentCountry!==""?currentCountry:country} range={Number(currentRange)+1}></CaseList>
                </Box>)
            }
        }
        </LocationIdentifier>
    )
}

export default CaseListContainer
