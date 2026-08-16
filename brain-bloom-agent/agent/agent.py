from llama_index.llms.huggingface_api import HuggingFaceInferenceAPI
from dotenv import load_dotenv
import os

load_dotenv()

llm = HuggingFaceInferenceAPI(
    model_name='Qwen/Qwen2.5-7B-Instruct',
    token=os.getenv('HF_TOKEN'),
    temperature=0.7
)

print(llm.complete('What is Reinforment learning?'))