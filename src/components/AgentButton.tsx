import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button/Button';

export interface SimpleDialogProps {
    open: boolean;
    selectedValue: string;
    onClose: (value: string) => void;
}

const AgentButton = () => {
    return (
        <div className="button-row">
            <button className="agent-button">TEST</button>
            <button className="agent-button">TEST</button>
            <button className="agent-button">TEST</button>
            <button className="agent-button">TEST</button>
            <button className="agent-button">TEST</button>
        </div>
    )
}

export default AgentButton;