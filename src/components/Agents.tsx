import { useState, useEffect } from "react";
import AgentButton from "./AgentButton";
import { Map } from "./Maps";

// defining the Agent interface to store the agent ID, name, image, and role
export interface Agent {
	agentID: string,
	agentName: string,
	agentImage: string,
	agentRole: string,
	agentRoleIcon: string
}

const Agents = ({ map }: { map: Map }) => {
	const [agentList, setAgentList] = useState<Agent[]>([]);
	// const [isLoading, setIsLoading] = useState<boolean>(false);

	// function to use agents valorant API to update dynamically with every new agent
	useEffect(() => {
		async function retrieveAgents() {
			const agentURL = "https://valorant-api.com/v1/agents"
			const response = await fetch(agentURL);
			const agentData = await response.json();

			let updatedAgentList: Agent[] = []

			// fills the agents array with responses from agents API besides The Range
			agentData.data.map((agent: any) => {
				if (agent.uuid !== "ded3520f-4264-bfed-162d-b080e2abccf9") {
					updatedAgentList.push({ agentID: agent.uuid, agentName: agent.displayName, agentImage: agent.displayIcon, agentRole: agent.role.displayName, agentRoleIcon: agent.role.displayIcon });
				}
			})

			// sorts agents array alphabetically
			updatedAgentList.sort((a, b) => a.agentName.localeCompare(b.agentName))

			// setting agentList to updatedAgentList
			setAgentList(updatedAgentList);
		};

		// error handling to console
		retrieveAgents().catch(error => {
			console.error("Agent API error!", error);
		});
	}, []);

	return (
		<div className="agent-button-row">
			<AgentButton key={1} agentList={agentList} map={map} />
			<AgentButton key={2} agentList={agentList} map={map} />
			<AgentButton key={3} agentList={agentList} map={map} />
			<AgentButton key={4} agentList={agentList} map={map} />
			<AgentButton key={5} agentList={agentList} map={map} />
		</div>
	)
}

export default Agents;