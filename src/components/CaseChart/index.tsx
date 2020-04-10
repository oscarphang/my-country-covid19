import React from 'react'
import {AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area} from 'recharts';
import { Box } from 'rebass';
import {useMedia} from 'use-media';

interface ICaseChart{
    data:any[];
}

const CaseChart:React.SFC<ICaseChart> = ({data,}) => {
    const isWide = useMedia({minWidth: '700px'});

    return (
        <Box marginX="auto" paddingX={2}>
             <AreaChart width={isWide?800:420} height={480} data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
                <linearGradient id="colorConfirmed" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FBBB3C" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#FBBB3C" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorRecovered" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#B7DEC7" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#B7DEC7" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorDeath" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#fb4646" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#fb4646" stopOpacity={0}/>
                </linearGradient>
            </defs>
            <XAxis dataKey="date" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="confirmed" stroke="#FBBB3C" fillOpacity={1} fill="url(#colorConfirmed)" />
            <Area type="monotone" dataKey="recovered" stroke="#B7DEC7" fillOpacity={1} fill="url(#colorRecovered)" />
            <Area type="monotone" dataKey="deaths" stroke="#fb4646" fillOpacity={1} fill="url(#colorDeath)" />
            </AreaChart>
        </Box>
                )
}

export default CaseChart
