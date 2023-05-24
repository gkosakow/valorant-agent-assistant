import { Agent } from "./AgentsRow"

function AgentListItem({ agent }: { agent: Agent }) {
    return (
        <div className="agent-list-item">
            <img src={agent.killFeedImage} width={"75px"} />
            <div className="agent-list-item-text">
                {agent.name}
                <img src={agent.roleIcon} height={"16px"} width={"16px"} />
            </div>
        </div>
    )
}

export default AgentListItem