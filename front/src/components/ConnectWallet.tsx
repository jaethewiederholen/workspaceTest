import React from "react";
import {ChainId, useEthers} from "@usedapp/core";

function ConnectWallet() {
    const {account, chainId, activateBrowserWallet, library} = useEthers();
    const isConnected = chainId == 1337 && account!=undefined;
    console.log(chainId, account);
    console.log(isConnected);
    return(

        <div>
            {!!library && chainId !== 1337 && 
            (
                <button
                    onClick={async () => {
                        try {
                            await library.send("wallet_switchEthereumChain", [
                                {chainId:"0x539"},
                            ])
                        } catch (error) {
                            console.log(error);
                        }
                    }}
                    >
                    switch network!
                    </button>
            )}
            {isConnected ? 
                <p>Connected to account : {account}</p>
                :
                <button onClick={()=> {
                    activateBrowserWallet();
                }}>
                    Connect Browser Wallet
                </button>
            }   

        </div>
    )
}

export default ConnectWallet