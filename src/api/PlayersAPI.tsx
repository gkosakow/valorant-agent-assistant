import { Player } from "../components/Player";

export const retrievePlayerInfo = async (player: Player) => {
    const accountDataURL = `https://api.henrikdev.xyz/valorant/v1/account/${player.riotID}/${player.tagline}`;
    const mmrDataURL = `https://api.henrikdev.xyz/valorant/v1/mmr/na/${player.riotID}/${player.tagline}`;

    const accountInfo = await fetch(accountDataURL)
        .then((response: any) => response.json())
        .then((data: any) => {
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
            console.error(error);
        });

    const mmrInfo = await fetch(mmrDataURL)
        .then((response: any) => response.json())
        .then((data: any) => {
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

    const updatedPlayer = { riotID: player.riotID, tagline: player.tagline, ...accountInfo, ...mmrInfo };
    console.log("Player data retrieved!");
    return updatedPlayer;
}