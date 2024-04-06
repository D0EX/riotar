import Account from "../api/account";
import Summoner from "../api/summoner";
import LOL from "../api/lol";
import Champion from "../api/champion";
import Assets from "../api/assets";

export default class Riotar {
    key: string;
    region: string;
    public account: Account;
    public summoner: Summoner;
    public lol: LOL;
    public champion: Champion;
    public assets: Assets;

    constructor(key: string, region: string = 'EUW1') {
        this.key = key;
        this.region = region;
        this.account = new Account(this.key, this.region);
        this.summoner = new Summoner(this.key, this.region);
        this.lol = new LOL(this.key, this.region);
        this.champion = new Champion(this.key, this.region);
        this.assets = new Assets();
    }
}