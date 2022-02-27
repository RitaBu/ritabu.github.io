import React from 'react';

const ExperimentForm = ({code}) => (
    <div style={{marginTop: '50px', width: '100vh', height: '100vh'}}>
        <iframe
            src={`https://docs.google.com/forms/d/e/${code}/viewform?embedded=true`}
            width='100%'
            height='100%'
            frameBorder='0'
            marginHeight='0'
            marginidth='0'
        >
            Loading…
        </iframe>
    </div>
);

export default ExperimentForm;
