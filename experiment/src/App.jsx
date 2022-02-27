import './App.css';
import React, {useState} from 'react';
import {styled} from '@mui/material/styles';
import {purple} from '@mui/material/colors';
import Button from '@mui/material/Button';
import ExperimentForm from './ExperimentForm';

function App() {
    const formUrls = [
        '1FAIpQLSc50Ja6sIGcTQKQBni4CRBYkIMipjzfFkj5sTDiZbl5FX_CbQ',
        '1FAIpQLSf3lZQoBjpJaOnzWid7LQ5Ntc98vMFBJNXl5hryiiagpgdoFg',
        '1FAIpQLSeiM1yS-2yS90Enyk7uSsnCTWoThULWu3InAtwgHgeiovBcAA',
    ];

    const [showForm, setShowForm] = useState(false);

    return (
        <div
            className='App'
            style={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            {!showForm && (
                <ColorButton
                    onClick={() => setShowForm(true)}
                    variant='contained'
                    size='large'
                    style={{
                        fontSize: '32px',
                        cursor: 'pointer',
                    }}
                >
                    PRADĖTI
                </ColorButton>
            )}
            {showForm && <ExperimentForm code={formUrls.random()} />}
        </div>
    );
}

const ColorButton = styled(Button)(({theme}) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
        backgroundColor: purple[700],
    },
}));

const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
        backgroundColor: '#0069d9',
        borderColor: '#0062cc',
        boxShadow: 'none',
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf',
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
});

export default App;

Array.prototype.random = function () {
    return this[Math.floor(Math.random() * this.length)];
};
