import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { abi, contractAddress } from '../web3/contract_info';

function Usecontract({ signer }) {
  const [contract, setContract] = useState(null);
  const [symbol, setSymbol] = useState('');
  const [address, setAddress] = useState('');
  const [value, setValue] = useState(0);

  // setState 렌더링
  useEffect(() => {
    console.log(contract);
  }, [contract]);

  // contract 연결 함수
  const connectContract = async () => {
    const connectedContract = await new ethers.Contract(
      contractAddress,
      abi,
      signer
    );
    setContract(connectedContract);
    window.alert(`contract connected : ${contractAddress}`);
  };

  // 읽기 함수
  const readFunction = async () => {
    const getSymbol = await contract.symbol();
    setSymbol(getSymbol);
  };

  //input handling
  const handleAddress = (e) => {
    setAddress(e.target.value);
  };
  const handleValue = (e) => {
    setValue(e.target.value);
  };

  //쓰기 함수
  const writeFunction = async () => {
    try {
      const transaction = await contract.transfer(address, value);
      await transaction.wait();
      console.log(transaction);
    } catch (e) {
      console.log(`Error sending Transaction : ${e}`);
    }
  };

  return (
    <div className='useContract'>
      <h2>#1 Contract 연결하기</h2>
      <button onClick={connectContract}>컨트랙트 연결</button>
      <h2>#2 Contract 함수 사용하기</h2>
      <h3>1. 읽기 함수 호출</h3>
      <button onClick={readFunction}>get Symbol</button>
      {symbol.length !== 0 ? <p>{symbol}</p> : null}
      <h3>2. 쓰기 함수 호출</h3>
      <p>To address</p>
      <input onChange={handleAddress} />
      <p>Value</p>
      <input onChange={handleValue} /> <br />
      <button onClick={writeFunction}>Transact</button>
    </div>
  );
}

export default Usecontract;
