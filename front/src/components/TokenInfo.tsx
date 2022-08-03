import React from "react";
import { useTokenInfo } from "../hooks/useTokenInfo";

const TOKEN_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3"
function TokenInfo() {
    const metadata =useTokenInfo(TOKEN_ADDRESS);
    return(
        <div>
            <h3>Token Info :</h3>
            <p>Name : {metadata?.name}</p>
            <p>Symbol: {metadata?.symbol}</p>
            <p>Decimals: {metadata?.decimals}</p>

        </div>
    )
}

export default TokenInfo