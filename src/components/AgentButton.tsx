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
            <FormControl className="agent-button" >
                <Select
                    labelId="agent-select-label"
                    id="agent-select"
                    value={selectedAgent}
                    label="Age"
                    onChange={handleChange}
                >
                    {agentList.map(agent => (
                        <MenuItem key={agent.agentID} value={agent.agentName} >{agent.agentName}</MenuItem>
                    ))}
                </Select>
                <>test</>
            </FormControl>
        </Box>
    )
}

export default AgentButton;