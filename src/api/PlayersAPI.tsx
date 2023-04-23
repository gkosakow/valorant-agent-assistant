import { Player } from "../components/Player";

export const retrievePlayerInfo = async (player: Player) => {
    const playerID: string = player.riotID;
    const playerTag: string = player.tagline;
    const accountDataURL = `https://api.henrikdev.xyz/valorant/v1/account/${playerID}/${playerTag}`;
    const mmrDataURL = `https://api.henrikdev.xyz/valorant/v1/mmr/na/${playerID}/${playerTag}`;

    const accountInfo = await fetch(accountDataURL)
        .then((response: any) => response.json())
        .then((data: any) => {
            console.log("Player account data retrieved!");
            const rawData = data.data;

            const accountData = {
                accLevel: rawData.account_level,
                bannerPhoto: rawData.card.wide,
            }
            // setting rawData to the agent array within the data payload
            return accountData;
        })
        .catch((error: any) => {
            // error handling to console
            console.error("Player not found!");
        });

    const mmrInfo = await fetch(mmrDataURL)
        .then((response: any) => response.json())
        .then((data: any) => {
            console.log("Player MMR data retrieved!");
            const rawData = data.data;

            const mmrData = {
                rank: rawData.currenttierpatched,
                rankIcon: rawData.images.large,
                rr: rawData.ranking_in_tier
            }
            // setting rawData to the agent array within the data payload
            return mmrData;
        })
        .catch((error: any) => {
            // error handling to console
            console.error(error);
        });

    const allInfo = { ...accountInfo, ...mmrInfo };
    return allInfo;
}