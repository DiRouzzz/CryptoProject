import { Layout } from 'antd';
import { Select, Space, Button, Modal, Drawer } from 'antd';
import { useContext, useState } from 'react';
import { CryptoContext } from '../../context/cryptoContext';
import { headerStyle } from './AppHeaderStyle'


export const AppHeader = () => {
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


	return (
		<Layout.Header style={headerStyle}>
			<Select
				style={{
					width: 250,
				}}
				onSelect={handleSelect}
				placeholder='select one country'
				defaultValue='press / to open'
				options={crypto.map(({ name, id, icon }) => ({
					label: name,
					value: id,
					icon: icon,
				}))}
				optionRender={option => (
					<Space>
						<img
							style={{ width: 20 }}
							src={option.data.icon}
							alt={option.data.label}
						/>
						{option.data.value}
					</Space>
				)}
			/>
			<Button type='primary' onClick={() => setDrawer(true)}>Add Asset</Button>
			<Modal
				title={<p>Loading Modal</p>}
				footer={
					<Button type='primary' onClick={showLoading}>
						Reload
					</Button>
				}
				loading={loadingModal}
				open={openModal}
				onCancel={() => setOpenModal(false)}>
				<h1>{coin}</h1>
			</Modal>
			<Drawer title='Basic Drawer' onClose={onClose} open={drawer}>
				<p>Some contents...</p>
				<p>Some contents...</p>
				<p>Some contents...</p>
			</Drawer>
		</Layout.Header>
	);
};
