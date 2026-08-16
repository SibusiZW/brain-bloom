from fastapi import FastAPI
from agent import run_workflow

app = FastAPI()

@app.get('/run')
async def run(query: str, session_id: str):
    response = await run_workflow(query, session_id)

    return {
        "human": query,
        "ai": response,
        "session_id": session_id
    }