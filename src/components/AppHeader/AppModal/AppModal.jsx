import { Button, Modal } from 'antd';

export const AppModal = ({
	coin,
	showLoading,
	loadingModal,
	openModal,
	setOpenModal,
}) => {
	return (
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
	);
};
