
interface Agent {
    agentName: string,
    agentImage: string,
    agentRole: string
}

export default function Agents() {
    const agents: Agent[] = [];

    async function retrieveAgents() {
        const agentURL = "https://valorant-api.com/v1/agents"
        const response = await fetch(agentURL);
        const data = await response.json();

        // fills the agents array from API response besides duplicate Sova
        data.data.forEach((agentData: any) => {
            if (agentData.uuid !== "ded3520f-4264-bfed-162d-b080e2abccf9") {
                agents.push({ agentName: agentData.displayName, agentImage: agentData.displayIcon, agentRole: agentData.role.displayName })
            }
        })

        // sorts agents alphabetically
        agents.sort((a, b) => a.agentName.localeCompare(b.agentName))
    };

    retrieveAgents().catch(error => {
        console.log("Agent API error!");
        console.error(error);
    });

    console.log("Agents array:", agents);
    return (
        <div>Agents imported</div>
    )
}