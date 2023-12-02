import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import Usecontract from './component/Usecontract';
function App() {
  const [userAccount, setUserAccount] = useState('');
  const [signer, setSigner] = useState(null);
  const [provider, setProvider] = useState(null);

  // metamask 연결 함수
  const connectWalletHandler = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        // METAMASK 연결 요청
        const provider = new ethers.BrowserProvider(window.ethereum);
        const metamask_signer = await provider.getSigner();
        // signer,provider,account  setState
        setProvider(provider);
        setSigner(metamask_signer);
        setUserAccount(await metamask_signer.getAddress());
      } catch (error) {
        console.log(error);
      }
    } else {
      window.alert('Please install metamask');
    }
  };
  useEffect(() => {
    connectWalletHandler();
  }, []);
  useEffect(() => {
    console.log('Signer:', signer);
    console.log('Account:', userAccount);
    console.log('Provider:', provider);
  }, [signer, userAccount, provider]);

  return (
    <div className='App'>
      <h3>user Address : {userAccount}</h3>
      <Usecontract signer={signer} />
    </div>
  );
}

export default App;
