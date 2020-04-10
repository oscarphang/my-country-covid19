import React from 'react'
import './index.css'
import {
    Box,
    Flex,
    Text
  } from 'rebass';
  
const LoadingSpinner:React.SFC = ({children}) => {
    return (
        <Flex justifyContent="center" flexDirection="column" marginX="auto">
        <Text color="white" size={0} marginX="auto" width="100%">{children}</Text>
        <Box marginTop={3} marginX="auto"><div className="lds-ripple"><div></div><div></div></div></Box>
        </Flex>
        
    )
}

export default LoadingSpinner
