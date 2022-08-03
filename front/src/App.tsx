import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useEthers} from "@usedapp/core";
import ConnectWallet from "./components/ConnectWallet";
import MintToken from "./components/MintToken";
import TokenBalance from "./components/TokenBalance";
import TokenInfo from "./components/TokenInfo";

function App() {

  const { chainId} = useEthers();
  return (
    <div className="App">
      <header className="App-header">
        <ConnectWallet />
        </header>
        {chainId === 1337 && (
          <div>
          <TokenInfo />
          <MintToken />
          <TokenBalance />
        </div>
        )}
   
    </div>
  );
}

export default App;
