import React from 'react';
import './App.css';
import CaseListContainer from './components/CaseListContainer';
import {
  Text
} from 'rebass';

function App() {
  return (
    <div className="App">
      <Text fontSize={7} color="white" fontFamily="serif">
          Covid-19 Cases Trend
        </Text>
     <CaseListContainer></CaseListContainer>
    
    </div>
  );
}

export default App;
