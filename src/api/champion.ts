import axios from "axios";
import { getReq } from "../utils/request";

export default class Champion {
    key: string;
    region: string;

    constructor(key: string, region: string) {
        this.key = key;
        this.region = region
    }

    async getChampionRotation() {
        const url = `https://${this.region}.api.riotgames.com/lol/platform/v3/champion-rotations`
        const req = await getReq(url, this.key);
        return req;
    }
}