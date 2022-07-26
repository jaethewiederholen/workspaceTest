# Project 3 // Rollup and events

1. Complete a contract

```solidity
struct Leaf {
  address owner;
  uint256 amount;
}

event NewRoot(bytes32 root_);

bytes32 public root;

function submitNewTree(Leaf[] memory leaves) onlyOwner {
  // store root here;
}

function mint(uint256 amount, bytes32[] memory proof) {
  // prove and mint 
}
```

2. Give a UI to mint ERC20.
  1. Query `NewRoot` events and get data from transaction.
  2. Construct a merkle tree.
  3. Generate a proof.
