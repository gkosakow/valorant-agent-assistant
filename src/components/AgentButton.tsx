import { useEffect, useState, useContext } from 'react';
import { auth } from '../firebase/firebase'
import { db } from '../firebase/firebase';
import { doc, onSnapshot } from "firebase/firestore";
import { Select, FormControl, MenuItem, Box } from '@mui/material';
import { Agent } from './AgentsRow';
import { Map } from './MapsPanel';
import { saveAgentToFirestore } from '../utilities/saveAgentToFirestore';
import { UserAuthContext } from '../App';
import { getAgentObject } from '../utilities/agentNametoObj';

const AgentButton = ({ num, agentList, map }: { num: number, agentList: Agent[], map: Map }) => {
    const [isAuthenticated] = useContext(UserAuthContext);
    const user = auth.currentUser;

    const [selectedAgent, setSelectedAgent] = useState<Agent>({
        id: "",
        image: "",
        name: "",
        role: "",
        roleIcon: ""
    });

    // handling the select change and saving the selectedAgent into the Firestore DB
    const handleChange = (event: any) => {
        setSelectedAgent(event.target.value);
        if (isAuthenticated) {
            saveAgentToFirestore(user, num, map, event.target.value);
        }
    };

    // takes agents from Firestore DB and loads them into state variables
    const loadAgentFromFirestore = (user: any, agentNum: number, map: Map) => {

        // referencing map within Maps collection inside of the users unique storage
        const docRef = doc(db, "Users", `${user.uid}`, "Maps", `${map.name}`);

        // allows for real time data updates when using this listener
        onSnapshot(docRef, (doc) => {
            // check if agentName inside DB exists, if so, change it
            let loadedAgentName = doc.get(`agent${agentNum}`);
            if (loadedAgentName) {
                setSelectedAgent(getAgentObject(agentList, loadedAgentName));
            }
        });
    }

    // calling loadAgentFromFirestore when user logs in
    useEffect(() => {
        if (isAuthenticated) {
            loadAgentFromFirestore(user, num, map);
        }
    }, [isAuthenticated])

    return (
        <Box>
            <FormControl className="agent-selected" >
                <div className='agent-background-none'></div>
                {selectedAgent.id ?
                    <div>
                        <img className="agent-background" src={selectedAgent.image} />
                        <img className="agent-role" src={selectedAgent.roleIcon} />
                    </div>
                    :
                    null
                }
                <Select
                    autoWidth
                    inputProps={{
                        sx: { padding: 3.3 }, MenuProps: { MenuListProps: { sx: { backgroundColor: '#2c2d48' } } },
                    }}
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