import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x23Dd24e26e5545Fb79807A6bbA9DfC05e3C5E0D3");

(async () => {
    try {
        await editionDrop.createBatch([
            {
                name: "DAOHaus Membership NFT",
                description: "This NFT will give you access to DAOHaus",
                image: readFileSync("scripts/assets/daohausmember.jpeg"),
            },
        ]);
        console.log("✅ Successfully created a new NFT in the drop!");
    } catch (error) {
        console.error("failed to create the new NFT", error);
    }
})();

