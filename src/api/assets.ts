import axios from "axios";

export default class Assets {
    async getVersions() {
        const url = `https://ddragon.leagueoflegends.com/api/versions.json`
        const response = await axios.get(url);
        return response.data;
    }

    async getLanguages() {
        const url = `https://ddragon.leagueoflegends.com/cdn/languages.json`
        const response = await axios.get(url);
        return response.data;
    }

    async getChampionList(version: string, language: string) {
        const url = `https://ddragon.leagueoflegends.com/cdn/${version}/data/${language}/champion.json`
        const response = await axios.get(url);
        return response.data;
    }

    async getChampion(version: string, language: string, champion: string) {
        const url = `https://ddragon.leagueoflegends.com/cdn/${version}/data/${language}/champion/${champion}.json`
        const response = await axios.get(url);
        return response.data;
    }

    async getProfileIconList(version: string) {
        const url = `https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/profileicon.json`
        const response = await axios.get(url);
        return response.data;
    }

    async getProfileIcon(version: string, id: number) {
        const url = `https://ddragon.leagueoflegends.com/cdn/${version}/img/profileicon/${id}.png`
        return url;
    }

    async getItemsList(version: string, language: string) {
        const url = `https://ddragon.leagueoflegends.com/cdn/${version}/data/${language}/item.json`
        const response = await axios.get(url);
        return response.data;
    }

    async getItem(version: string, id: number) {
        const url = `https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${id}.png`
        return url;
    }

    async getSummonerSpellList(version: string, language: string) {
        const url = `https://ddragon.leagueoflegends.com/cdn/${version}/data/${language}/summoner.json`
        const response = await axios.get(url);
        return response.data;
    }

    async getSummonerSpell(version: string, spell: number) {
        const url = `https://ddragon.leagueoflegends.com/cdn/${version}/img/spell/Summoner${spell}.png`
        return url;
    }

    async getRunesList(version: string, language: string) {
        const url = `https://ddragon.leagueoflegends.com/cdn/${version}/data/${language}/runesReforged.json`
        const response = await axios.get(url);
        return response.data;
    }
}