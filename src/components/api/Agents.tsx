// defining the Agent interface to store the agent name, image, and role
interface Agent {
	agentID: string,
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
		const agentData = await response.json();

		// fills the agents array from API response besides duplicate Sova
		agentData.data.forEach((agent: any) => {
			if (agent.uuid !== "ded3520f-4264-bfed-162d-b080e2abccf9") {
				agentList.push({ agentID: agent.uuid, agentName: agent.displayName, agentImage: agent.displayIcon, agentRole: agent.role.displayName })
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

	// DEBUGGING
	console.log("Agents array", agentList);

	return (agentList);
}

export default Agents;