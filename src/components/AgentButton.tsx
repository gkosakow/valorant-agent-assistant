import { useState } from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Agent } from './Agents';

const AgentButton = ({ agentList }: { agentList: Agent[] }) => {
    const [selectedAgent, setSelectedAgent] = useState<string>("");

    const handleChange = (event: SelectChangeEvent) => {
        setSelectedAgent(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl sx={{ minWidth: 30 }}>
                <Select
                    value={selectedAgent}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ IconComponent: () => null }}
                >
                    {agentList.map(agent => (<MenuItem key={agent.agentID} value={agent.agentImage}><img className="agent-button" src={agent.agentImage} /></MenuItem>))}
                </Select>
            </FormControl>
        </Box>
    )
}

export default AgentButton;