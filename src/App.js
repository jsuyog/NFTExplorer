import { useState } from 'react';
import SearchComponent from './components/SearchComponent'
import NFTView from './components/NFTView'

function App() {
  const [wallet, setWallet] = useState(null)

  return (
    <div className="flex items-center justify-center min-h-screen">
	{
		wallet ? (
			<NFTView wallet={wallet} />
		) : (
			<SearchComponent wallet={wallet} setWallet={setWallet} />
		)
	}
    </div>
  );
}

export default App;