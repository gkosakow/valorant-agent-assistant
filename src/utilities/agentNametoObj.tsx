import { Agent } from '../components/AgentsRow';

// grabs Agent object from the list given a name
export const getAgentObject = (agentList: Agent[], agentName: string) => {
    let result = agentList.filter(agent => {
        return agent.name === agentName;
    })
    return result[0];
}