import { Layout } from 'antd';
import { AppHeader } from '../AppHeader/AppHeaderContainer.jsx' 
import { AppSider } from './AppSider.jsx';
import { AppContent } from '../AppContent/AppContent.jsx';

export const AppLayout = () => {
	return (
		<Layout>
			<AppHeader />
			<Layout>
				<AppSider />
				<AppContent />
			</Layout>
		</Layout>
	);
};
