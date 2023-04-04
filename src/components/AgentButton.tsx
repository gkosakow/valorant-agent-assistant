import { useEffect, useState } from 'react';
import { auth } from '../firebase/firebase'
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Agent } from './AgentsRow';
import { Map } from './MapsPanel';
import { saveAgentToFirestore } from '../firebase/saveAgentToFirestore';
import { loadAgentFromFirestore } from '../firebase/loadAgentFromFirestore';

const AgentButton = ({ num, agentList, map }: { num: number, agentList: Agent[], map: Map }) => {
    const user = auth.currentUser;

    const [selectedAgent, setSelectedAgent] = useState<Agent>({
        id: "",
        image: "",
        name: "",
        role: "",
        roleIcon: ""
    });

    useEffect(() => {
        let temp = loadAgentFromFirestore(auth.currentUser, num, map, selectedAgent);
        console.log(temp)
    }, [])

    // Preparing to grab Agent object from the list given an ID or name
    // const getAgentObject = (agentName: string) => {
    //     let result = agentList.filter(agent => {
    //         return agent.name === agentName;
    //     })
    // }



    const handleChange = (event: any) => {
        setSelectedAgent(event.target.value);
        saveAgentToFirestore(auth.currentUser, num, map, event.target.value);
    };

    return (
        <Box>
            <FormControl className="agent-selected" >
                {selectedAgent.id &&
                    <div>
                        <img className="agent-background" src={selectedAgent.image} />
                        <img className="agent-role" src={selectedAgent.roleIcon} />
                    </div>
                }
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