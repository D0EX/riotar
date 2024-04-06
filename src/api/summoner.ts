import axios from "axios";
import { getReq } from "../utils/request";

export default class Summoner {
    key: string;
    region: string;

    constructor(key: string, region: string) {
        this.key = key;
        this.region = region;
    }

    async getSummonerByPuuid(puuid: string) {
        const url = `https://${this.region}.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${puuid}`
        const req = await getReq(url, this.key);
        return req;
    }

    async getSummonerByAccountId(accountId: string) {
        const url = `https://${this.region}.api.riotgames.com/lol/summoner/v4/summoners/by-account/${accountId}`
        const req = await getReq(url, this.key);
        return req;
    }

    async getEntriesBySummonerId(summonerId: string) {
        const url = `https://${this.region}.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerId}`
        const req = await getReq(url, this.key);
        return req;
    }

    async getChampionMasteryByPuuid(puuid: string) {
        const url = `https://${this.region}.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-puuid/${puuid}`
        const req = await getReq(url, this.key);
        return req;
    }

    async getChampionMasteryTopByPuuid(puuid: string) {
        const url = `https://${this.region}.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-puuid/${puuid}/top`
        const req = await getReq(url, this.key);
        return req;
    }

    async getChampionMasteryByChampionId(puuid: string, championId: number) {
        const url = `https://${this.region}.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-puuid/${puuid}/by-champion/${championId}`
        const req = await getReq(url, this.key);
        return req;
    }

    async getChallengesByPuuid(puuid: string) {
        const url = `https://${this.region}.api.riotgames.com/lol/challenges/v1/player-data/${puuid}`
        const req = await getReq(url, this.key);
        return req;
    }
}