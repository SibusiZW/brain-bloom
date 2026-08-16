from llama_index.llms.huggingface_api import HuggingFaceInferenceAPI
from llama_index.core.agent.workflow import ReActAgent, AgentWorkflow
from llama_index.core.memory import Memory
import prompts
from tools import search_tools
from dotenv import load_dotenv
import os
import asyncio

load_dotenv()

llm = HuggingFaceInferenceAPI(
    model_name='Qwen/Qwen2.5-7B-Instruct',
    token=os.getenv('HF_TOKEN'),
    temperature=0.7
)

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