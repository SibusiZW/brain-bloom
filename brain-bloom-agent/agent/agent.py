from llama_index.llms.huggingface_api import HuggingFaceInferenceAPI
from llama_index.core.agent.workflow import ReActAgent, AgentWorkflow
from llama_index.core.memory import Memory
import prompts
from tools import search_tools
from dotenv import load_dotenv
import os

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