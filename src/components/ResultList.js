import React from 'react';
import Result from './Result';
import './ResultList.css'

const ResultList = props => {
    const results = props.result.map(
        (result) => <Result key={result.id} result={result}/>
    );
    return <div className="result-list ui container">{results}</div>
};

export default ResultList;