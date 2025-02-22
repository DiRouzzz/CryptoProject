import { Drawer } from 'antd';

export const AppDrawer = ({ onClose, drawer }) => {
	return (
		<Drawer width={600} title='Basic Drawer' onClose={onClose} open={drawer}>
			<p>Some contents...</p>
			<p>Some contents...</p>
			<p>Some contents...</p>
		</Drawer>
	);
};
