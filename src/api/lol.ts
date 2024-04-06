import axios from "axios";
import { regionCheck } from "../enums/regions";
import { getReq } from "../utils/request";

export default class LOL {
    key: string;
    region: string;

    constructor(key: string, region: string) {
        this.key = key;
        this.region = region;
    }

    async getMatchesByPuuid(puuid: string) {
        const finalRegion = regionCheck(this.region);
        const url = `https://${finalRegion}.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=20`
        const req = await getReq(url, this.key);
        return req;
    }

    async getMatchById(matchId: string) {
        const finalRegion = regionCheck(this.region);
        const url = `https://${finalRegion}.api.riotgames.com/lol/match/v5/matches/${matchId}`
        const req = await getReq(url, this.key);
        return req;
    }

    async getMatchTimelineById(matchId: string) {
        const finalRegion = regionCheck(this.region);
        const url = `https://${finalRegion}.api.riotgames.com/lol/match/v5/matches/${matchId}/timeline`
        const req = await getReq(url, this.key);
        return req;
    }
}