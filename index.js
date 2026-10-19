import "dotenv/config"
import managerAgent from "./agent.js"
import { HumanMessage } from "langchain"
import { awaitAllCallbacks } from "@langchain/core/callbacks/promises"

console.log(process.env.LANGSMITH_API_KEY)

const res = await managerAgent.invoke({
    messages:[
        new HumanMessage("Write a function to revserse a string in js")
    ]
})

console.log(res)
await awaitAllCallbacks()