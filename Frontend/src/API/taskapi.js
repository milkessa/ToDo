import axios from "axios";
const TASK_API_URL = `${import.meta.env.VITE_BASE_URL}/TASKs`
const ADD_TASK_ENDPOINT = `${TASK_API_URL}`
const GET_TASKS_ENDPOINT = `${TASK_API_URL}`
// const GET_TASK_ENDPOINT = `${TASK_API_URL}/:id`


export const addTask = async (taskData) => {
    try {
       const response = await axios.post(ADD_TASK_ENDPOINT, taskData)
       return response.data
    } catch(err) {
        console.log(err)
    }
}

export const getTask =async () => {
    try {
        const response = await axios.get(GET_TASKS_ENDPOINT)
        return response.data
     } catch(err) {
         console.log(err)
     }
}