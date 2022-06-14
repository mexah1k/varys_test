# COMMENTS

## Usage

```bash
npm install
node main.js
```

## Request example

```bash
curl -X POST -H "Content-Type: text/plain" --data "
import "VarysContractBase.sol";
import "VarysContractExtras.sol";
contract VarysContract  {
  mapping (uint => address) public addresses;
}
" http://localhost:3001/analyze
```
