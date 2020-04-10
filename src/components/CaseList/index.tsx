import React from 'react'
import {useCaseListQuery} from '../../generated/graphql';
import LoadingSpinner from '../LoadingSpinner';
import { Flex, Box,Text } from 'rebass';
import CaseChart from '../CaseChart';

const getDate=(diff:number)=>{
    let date = new Date();
    date.setDate(date.getDate()+diff);
    return date.toISOString().substring(0,10);
}

interface ICaseList{
    country:string,
    range:number
}

const CaseList:React.SFC<ICaseList> = ({country,range}) => {

    const {loading,error,data} = useCaseListQuery({
        variables: {
            country: country,
            dateAfter: getDate(-range)
         },
    });

    const results:any = data?.results===undefined?[]:data.results;

    const latestGrowthRate = results.length>0?results[results.length-1].growthRate*100:0;

    return (
        <Flex color="white" >
            {
                loading?
                <LoadingSpinner>Loading Data...</LoadingSpinner>:
                error?
                <span>{error.message}</span>:
                data?.results?
                <Box marginX="auto">
                    <CaseChart data={results}></CaseChart>
                    <Flex marginTop={2}>
                    <Text marginRight={1}>Current Growth Rate:</Text><Text color={latestGrowthRate>0?"red":"green"}>{`${latestGrowthRate.toFixed(2)}%`}</Text>
                    </Flex>
                </Box>:
            <span>no countries found</span>
            }
        </Flex>
    )
}

export default CaseList
