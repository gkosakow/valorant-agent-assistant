import { useState, useEffect } from "react";
import AgentButton from "./AgentButton";
import { Map } from "./MapsPanel";
import { retrieveAgents } from "../api/AgentsAPI";

// defining the Agent interface to store the agent ID, name, image, and role
export interface Agent {
	id: string,
	name: string,
	image: string,
	role: string,
	roleIcon: string
}

function AgentsRow({ map }: { map: Map; }) {
	const [agentApiIsLoading, setAgentApiIsLoading] = useState<boolean>(true);
	const [agentList, setAgentList] = useState<Agent[]>([]);

	// function to use agents valorant API to update dynamically with every new agent
	useEffect(() => {
		retrieveAgents().then((response: any) => {
			setAgentList(response);
			setAgentApiIsLoading(false);
		});
	}, []);

	return (
		<div>
			{!agentApiIsLoading ?
				<div className="agent-button-row">
					<AgentButton num={1} agentList={agentList} map={map} />
					<AgentButton num={2} agentList={agentList} map={map} />
					<AgentButton num={3} agentList={agentList} map={map} />
					<AgentButton num={4} agentList={agentList} map={map} />
					<AgentButton num={5} agentList={agentList} map={map} />
				</div>
				:
				<></>}
		</div>
	)
}

export default AgentsRow;