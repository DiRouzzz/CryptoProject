import { createContext } from 'react';
import { useEffect, useState } from 'react';
import { fakeFetchAssets, fakeFetchCrypto } from '../api.js';
import { percentDifference } from '../utils.js';

export const CryptoContext = createContext({
	assets: [],
	crypto: [],
	loading: false,
});

export const CryptoContextProvider = ({ children }) => {
	const [loading, setLoading] = useState(false);
	const [crypto, setCrypto] = useState([]);
	const [assets, setAssets] = useState([]);

	useEffect(() => {
		const preload = async () => {
			setLoading(true);
			const { result } = await fakeFetchCrypto();
			const assetsFake = await fakeFetchAssets();

			const assetsResult = assetsFake.map(asset => {
				const coin = result.find(c => c.id === asset.id);
				return {
					grow: asset.price < coin.price,
					growPercent: percentDifference(asset.price, coin.price),
					totalAmount: asset.amount * coin.price,
					totalProfit: asset.amount * coin.price - asset.amount * asset.price,
					...asset,
				};
			});

			setAssets(assetsResult);
			setCrypto(result);
			setLoading(false);
		};
		preload();
	}, []);

	return (
		<CryptoContext.Provider value={{ loading, crypto, assets }}>
			{children}
		</CryptoContext.Provider>
	);
};
