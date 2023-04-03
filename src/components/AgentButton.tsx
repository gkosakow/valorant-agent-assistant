import { useState } from 'react';
import { auth } from '../firebase/firebase'
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Agent } from './AgentsRow';
import { Map } from './MapsPanel';

const AgentButton = ({ num, agentList, map }: { num: number, agentList: Agent[], map: Map }) => {
    const user = auth.currentUser;

    // Preparing to grab Agent object from the list given an ID or name
    // const getAgentObject = (agentName: string) => {
    //     let result = agentList.filter(agent => {
    //         return agent.name === agentName;
    //     })
    // }

    const [selectedAgent, setSelectedAgent] = useState<Agent>({
        id: "",
        image: "",
        name: "",
        role: "",
        roleIcon: ""
    });

    const handleChange = (event: any) => {
        setSelectedAgent(event.target.value);
    };

    return (
        <Box>
            <FormControl className="agent-selected" style={{
                backgroundImage: `url(${selectedAgent.image})`
            }}>
                <Select
                    autoWidth
                    inputProps={{ sx: { padding: 3.3 } }}
                    IconComponent={() => null}
                    className="agent-button"
                    value=""
                    onChange={handleChange}
                >
                    {agentList.map(agent => (
                        <MenuItem key={agent.id} value={agent as any}>{agent.name}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box >
    )
}

export default AgentButton;