import { useState, useEffect } from "react";
import AgentButton from "./AgentButton";
import { Map } from "./MapsPanel";
import { retrieveAgents } from "../api/AgentsAPI";

// defining the Agent interface to store the agent ID, name, image, and role
export interface Agent {
	id: string,
	name: string,
	image: string,
	killFeedImage: string,
	role: string,
	roleIcon: string
}

function AgentsRow({ map }: { map: Map; }) {
	const [agentApiIsLoading, setAgentApiIsLoading] = useState<boolean>(true);
	const [agentList, setAgentList] = useState<Agent[]>([]);
	const agents = [1, 2, 3, 4, 5];

	// function to use agents valorant API to update dynamically with every new agent
	useEffect(() => {
		retrieveAgents().then((response: any) => {
			setAgentList(response);
			setAgentApiIsLoading(false);
		});
	}, []);

	return (
		<div className="agent-button-row-container">
			{!agentApiIsLoading ?
				<div className="agent-button-row">
					{agents.map(num => (<AgentButton key={num} num={num} agentList={agentList} map={map} />))}
				</div>
				:
				null}
		</div>
	)
}

export default AgentsRow;