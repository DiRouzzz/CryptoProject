import { useContext } from 'react';
import { CryptoContext } from '../../context/cryptoContext';
import { AppSiderlayout } from './AppSiderLayout';

export const AppSiderContainer = () => {
	const { loading, assets } = useContext(CryptoContext);

	const props = {
		loading,
		assets,
	};

	return <AppSiderlayout {...props} />;
};
