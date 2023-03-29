import { useState } from 'react';
import { auth, db } from '../firebase/firebase'
import { doc, setDoc } from 'firebase/firestore';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Agent } from './Agents';
import { Map } from './Maps';

const AgentButton = ({ num, agentList, map }: { num: number, agentList: Agent[], map: Map }) => {
    const user = auth.currentUser;

    //setSelectedAgent(agentList.find("Viper")

    const [selectedAgent, setSelectedAgent] = useState<Agent>({
        id: "",
        image: "",
        name: "",
        role: "",
        roleIcon: ""
    });

    // const setAgent = async () => {
    //     const userIDRef = db.collection('users').doc(user.uid)
    //     console.log(userIDRef);
    // }

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