import { useState } from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Agent } from './Agents';
import { Map } from './Maps';

const AgentButton = ({ agentList, map }: { agentList: Agent[], map: Map }) => {
    const [selectedAgent, setSelectedAgent] = useState<string>("");

    const handleChange = (event: SelectChangeEvent) => {
        setSelectedAgent(event.target.value);
    };

    // let index = mapList.map(function(e){ return e.name; }).indexOf("Breeze");

    return (
        <Box sx={{ minWidth: 75 }} >
            <FormControl sx={{ minWidth: 30 }} size="medium">
                <Select
                    autoWidth
                    IconComponent={() => null}
                    className="agent-button"
                    inputProps={{ sx: { padding: 0 } }}
                    value={selectedAgent}
                    onChange={handleChange}
                >
                    {agentList.map(agent => (<MenuItem key={agent.agentID} value={agent.agentImage}><img className="agent-in-list" src={agent.agentImage} /></MenuItem>))}
                </Select>
            </FormControl>
        </Box >
    )
}

export default AgentButton;