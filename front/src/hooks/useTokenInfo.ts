import { useCallback, useEffect, useState } from "react";
import { useEthers } from "@usedapp/core";
import { TokenInfo } from "@usedapp/core/dist/esm/src/model/TokenInfo";
import { TestToken__factory } from "contracts";

const cache = new Map<string, TokenInfo>();

const getCachedData = (tokenAddress:string) => {
    if (!tokenAddress) return undefined;
    const hasMemory = cache.has(tokenAddress);

    if(hasMemory) {
        return cache.get(tokenAddress);
    } else {
        return undefined;
    }
};

export const useTokenInfo = (tokenAddress:string) : TokenInfo|undefined => {
    const {library, chainId} = useEthers();

    const [metadata, setMetadata] = useState<TokenInfo |undefined>(
        getCachedData(tokenAddress)
    );

    const fetchMetaData = useCallback(async () => {
        if(!library) return;
        if(!!cache.get(tokenAddress)) return;

        //get token info from contract
        const token = TestToken__factory.connect(tokenAddress, library);
        const [name, symbol, decimals] = await Promise.all([
            token.name(),
            token.symbol(),
            token.decimals()
        ]);
        const _metadata = {
            name,
            symbol,
            decimals,
        }
        cache.set(tokenAddress, _metadata);
        setMetadata(_metadata);
    }, [library, tokenAddress]);

    useEffect(() => {
        fetchMetaData();
    }, [library, chainId, tokenAddress, fetchMetaData]);
    return metadata;
   
};