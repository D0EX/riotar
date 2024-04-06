import axios from "axios";

export async function getReq(url: string, key: string){
    const headers = {
        'X-Riot-Token': key
    }
    try{
        const req = await axios.get(url, { headers });
        return req.data;
    } catch (error: any) {
        return { "status": "error", "message": error.message }
    }
}