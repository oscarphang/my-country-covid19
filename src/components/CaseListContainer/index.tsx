import React, { useState, useEffect } from 'react'
import useFetch from "use-http";
import CaseList from '../CaseList';
import LoadingSpinner from '../LoadingSpinner';
import {
    Box,
    Flex  } from 'rebass';
import Select from 'react-select';
import countryList from './countries.json';

const CaseListContainer = () => {
    const { data, loading } = useFetch('http://ip-api.com/json', []);
    const [currentCountry, setCurrentCountry] = useState<string>("");
    const [currentRange, setCurrentRange] = useState<number>(7);

    const QUERY_RANGE = [
        {value:"7",label:"past week"},
        {value:"30",label:"past month"},
        {value:"90",label:"past 3 months"},
        {value:"180",label:"past 6 months"}
    ];

    useEffect(() => {
        setCurrentCountry(data?.country??"");
    }, [data])

    if (loading){
        return  <LoadingSpinner>Getting your location detail...</LoadingSpinner>
    }
    const customSelectStyle={singleValue:(props: any)=>({...props,color:"white"}),control:(props: any)=>({...props,color:"white",backgroundColor:"black"})};

    return (
        <Box>
            <Flex justifyContent="space-between" paddingX={4} marginY="4">
            <Box flex="1">
            <Select styles={customSelectStyle} value={{value:currentCountry,label:currentCountry}} onChange={(item:any)=>setCurrentCountry(item.value)} options={countryList.map(({name})=>({value:name,label:name}))}>
            </Select>
            </Box>
            <Box flex="1">
            <Select styles={customSelectStyle} value={QUERY_RANGE.find(elem=>elem.value===String(currentRange))} onChange={(item:any)=>setCurrentRange(item.value)}  options={QUERY_RANGE}></Select>
            </Box>
            </Flex>
            <CaseList country={currentCountry} range={currentRange+1}></CaseList>
        </Box>
        
    )
}

export default CaseListContainer
