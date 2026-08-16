from llama_index.llms.google_genai import GoogleGenAI
from llama_index.core.agent.workflow import ReActAgent, AgentWorkflow
from llama_index.core.memory import Memory
import prompts
from tools import search_tools
from dotenv import load_dotenv
import os
import asyncio

load_dotenv()

llm = GoogleGenAI()

# AGENTS

technical_feasibility_agent = ReActAgent(
    name='technical_feasibility_agent',
    llm=llm,
    description="A technical feasibility agent",
    system_prompt=prompts.TECHNICAL_FEASIBILITY_AGENT_PROMPT,
    tools=search_tools
)

target_user_agent = ReActAgent(
    name='target_user_agent',
    llm=llm,
    description="A target user agent",
    system_prompt=prompts.TARGET_USER_AGENT_PROMPT,
    tools=search_tools
)

monetization_agent = ReActAgent(
    name='monetization_agent',
    llm=llm,
    description="A monetization agent",
    system_prompt=prompts.MONETIZATION_AGENT_PROMPT,
    tools=search_tools
)

biggest_risks_agent = ReActAgent(
    name='biggest_risks_agent',
    llm=llm,
    description="The biggest risks agents",
    system_prompt=prompts.BIGGEST_RISKS_AGENT_PROMPT,
    tools=search_tools
)

orchestrator_agent = ReActAgent(
    name='orchestrator_agent',
    llm=llm,
    description="The orchestrator agent",
    system_prompt=prompts.ORCHESTRATOR_AGENT_PROMPT,
    can_handoff_to=['technical_feasibility_agent', 'target_user_agent', 'monetization_agent', 'biggest_risks_agent']
)

idea_workflow = AgentWorkflow(
    agents=[orchestrator_agent, technical_feasibility_agent, target_user_agent, monetization_agent, biggest_risks_agent],
    root_agent='orchestrator_agent'
)

async def run_workflow(query: str):
    response = await idea_workflow.run(user_msg=query)
    print(str(response))

asyncio.run(run_workflow("I have an idea of slack for AI agents give me the technical feasibility"))