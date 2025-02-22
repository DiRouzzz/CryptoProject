import { useContext, useState } from 'react';
import { CryptoContext } from '../../context/cryptoContext';
import { AppHeaderLayout } from './AppHeaderLayout';

export const AppHeaderContainer = () => {
	const { crypto } = useContext(CryptoContext);
	const [openModal, setOpenModal] = useState(false);
	const [loadingModal, setLoadingModal] = useState(true);
	const [coin, setCoin] = useState('');
	const [drawer, setDrawer] = useState(false);

	const showLoading = () => {
		setOpenModal(true);
		setLoadingModal(true);

		setTimeout(() => {
			setLoadingModal(false);
		}, 1000);
	};

	const handleSelect = value => {
		console.log(value);
		setCoin(value);
		showLoading();
	};

	const onClose = () => {
		setDrawer(false);
	};

	const props = {
		crypto,
		openModal,
		setOpenModal,
		loadingModal,
		coin,
		drawer,
		setDrawer,
		handleSelect,
		onClose,
		showLoading,
	};

	return <AppHeaderLayout {...props} />;
};
