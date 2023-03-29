import { useState, useEffect } from "react";
import AgentButton from "./AgentButton";
import { Map } from "./Maps";

// defining the Agent interface to store the agent ID, name, image, and role
export interface Agent {
	id: string,
	name: string,
	image: string,
	role: string,
	roleIcon: string
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
					updatedAgentList.push({ id: agent.uuid, name: agent.displayName, image: agent.displayIcon, role: agent.role.displayName, roleIcon: agent.role.displayIcon });
				}
			})

			// sorts agents array alphabetically
			updatedAgentList.sort((a, b) => a.name.localeCompare(b.name))

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
			<AgentButton num={1} agentList={agentList} map={map} />
			<AgentButton num={2} agentList={agentList} map={map} />
			<AgentButton num={3} agentList={agentList} map={map} />
			<AgentButton num={4} agentList={agentList} map={map} />
			<AgentButton num={5} agentList={agentList} map={map} />
		</div>
	)
}

export default Agents;