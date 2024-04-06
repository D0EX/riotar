import axios from 'axios';
import { regionCheck } from '../enums/regions';
import { getReq } from '../utils/request';

export default class Account {
    key: string;
    region: string;

    constructor(key: string, region: string) {
        this.key = key;
        this.region = region
    }

    async getAccountByTag(name: string, tag: string) {
        const finalRegion = regionCheck(this.region);
        const url = `https://${finalRegion}.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${name}/${tag}`;
        const req = await getReq(url, this.key);
        return req;
    }

    async getAccountByPuuid(puuid: string) {
        const finalRegion = regionCheck(this.region);
        const url = `https://${finalRegion}.api.riotgames.com/riot/account/v1/accounts/by-puuid/${puuid}`;
        const req = await getReq(url, this.key);
        return req;
    }
}