from llama_index.llms.huggingface_api import HuggingFaceInferenceAPI
from llama_index.core.agent.workflow import ReActAgent, AgentWorkflow
from llama_index.core.memory import Memory
from dotenv import load_dotenv
import os

load_dotenv()

llm = HuggingFaceInferenceAPI(
    model_name='Qwen/Qwen2.5-7B-Instruct',
    token=os.getenv('HF_TOKEN'),
    temperature=0.7
)
