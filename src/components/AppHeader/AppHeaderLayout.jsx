import { Layout } from 'antd';
import { Select, Space, Button } from 'antd';
import { headerStyle } from './AppHeaderStyle';
import { AppModal } from './AppModal/AppModal'; 
import { AppDrawer } from './AppDrawer/AppDrawer';

export const AppHeaderLayout = ({
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
}) => {

	const propsModal = {
		coin,
		showLoading,
		loadingModal,
		openModal,
		setOpenModal,
	};

	const propsDrawer = {
		onClose,
		drawer,
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
			<Button type='primary' onClick={() => setDrawer(true)}>
				Add Asset
			</Button>
			<AppModal {...propsModal}/>
			<AppDrawer {...propsDrawer}/>
		</Layout.Header>
	);
};
