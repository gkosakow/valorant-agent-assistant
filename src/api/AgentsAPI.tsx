import { Agent } from "../components/AgentsRow";

export const retrieveAgents = async () => {
    const agentURL = "https://valorant-api.com/v1/agents"

    const agentList = await fetch(agentURL)
        .then((response: any) => response.json())
        .then((data: any) => {
            const updatedAgentList: Agent[] = [];

            // setting rawData to the agent array within the data payload
            const rawData = data.data;

            // fills the agents array with responses from agents API besides The Range
            rawData.map((agent: any) => {
                if (agent.uuid !== "ded3520f-4264-bfed-162d-b080e2abccf9") {
                    updatedAgentList.push({ id: agent.uuid, name: agent.displayName, image: agent.displayIcon, role: agent.role.displayName, roleIcon: agent.role.displayIcon });
                }
            })

            // sorts maps array alphabetically
            updatedAgentList.sort((a, b) => a.name.localeCompare(b.name))

            return updatedAgentList;
        })
        .catch((error: any) => {
            // error handling to console
            console.error("Map API error!", error);
        });

    return agentList;
}