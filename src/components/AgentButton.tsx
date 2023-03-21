import { useState } from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Agent } from './Agents';
import { Map } from './Maps';

const AgentButton = ({ agentList, map }: { agentList: Agent[], map: Map }) => {
    const [selectedAgent, setSelectedAgent] = useState<Agent>({
        agentID: "",
        agentImage: "",
        agentName: "",
        agentRole: "",
        agentRoleIcon: ""
    });

    const handleChange = (event: any) => {
        setSelectedAgent(event.target.value);
    };

    // let index = mapList.map(function(e){ return e.name; }).indexOf("Breeze");

    return (
        <Box>
            <FormControl className="agent-selected" style={{
                backgroundImage: `url(${selectedAgent.agentImage})`
            }}>
                <Select
                    autoWidth
                    inputProps={{ sx: { padding: 3.3 } }}
                    IconComponent={() => null}
                    className="agent-button"
                    value=""
                    onChange={handleChange}
                >
                    {agentList.map(agent => (<MenuItem key={agent.agentID} value={agent as any}>{agent.agentName}</MenuItem>))}
                </Select>
            </FormControl>
        </Box >
    )
}

export default AgentButton;