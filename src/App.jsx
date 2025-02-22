import React from 'react';
import { CryptoContextProvider } from '../src/context/cryptoContext.jsx';
import { AppLayout } from './components/layout/AppLayout.jsx';
import '@ant-design/v5-patch-for-react-19';

export default function App() {
	return (
		<CryptoContextProvider>
			<AppLayout />
		</CryptoContextProvider>
	);
}
