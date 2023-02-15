// defining the Agent interface to store the agent name, image, and role

interface Agent {
    agentName: string,
    agentImage: string,
    agentRole: string
}

const Agents = () => {
    const agentList: Agent[] = [];

    // function to use agents from valorant API to update dynamically with every new agent
    async function retrieveAgents() {
        const agentURL = "https://valorant-api.com/v1/agents"
        const response = await fetch(agentURL);
        const data = await response.json();

        // fills the agents array from API response besides duplicate Sova
        data.data.forEach((agentData: any) => {
            if (agentData.uuid !== "ded3520f-4264-bfed-162d-b080e2abccf9") {
                agentList.push({ agentName: agentData.displayName, agentImage: agentData.displayIcon, agentRole: agentData.role.displayName })
            }
        })

        // sorts agents alphabetically
        agentList.sort((a, b) => a.agentName.localeCompare(b.agentName))
    };

    // catches errors and logs them to the console
    retrieveAgents().catch(error => {
        console.log("Agent API error!");
        console.error(error);
    });

    console.log("Agents array:", agentList);
    return (
        <div>AGENT LIST</div>
    )
}

export default Agents;