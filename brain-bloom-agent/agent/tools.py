from llama_index.tools.tavily_research import TavilyToolSpec
from dotenv import load_dotenv
import os

load_dotenv()

API_KEY = os.getenv('TAVILY_API_KEY')

search_tools = TavilyToolSpec(API_KEY).to_tool_list()