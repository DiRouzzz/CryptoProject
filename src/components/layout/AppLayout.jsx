import { Layout } from 'antd';
import { AppHeaderContainer } from '../AppHeader/AppHeaderContainer.jsx' 
import { AppSiderContainer } from '../AppSider/AppSiderContainer.jsx';
import { AppContent } from '../AppContent/AppContent.jsx';

export const AppLayout = () => {
	return (
		<Layout>
			<AppHeaderContainer />
			<Layout>
				<AppSiderContainer />
				<AppContent />
			</Layout>
		</Layout>
	);
};
