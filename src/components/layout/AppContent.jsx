import { Layout } from "antd";

// const layoutStyle = {
//   borderRadius: 8,
//   overflow: 'hidden',
//   width: 'calc(50% - 8px)',
//   maxWidth: 'calc(50% - 8px)',
// };

const contentStyle = {
	textAlign: 'center',
	minHeight: 'calc(100vh - 60px)',
	lineHeight: '120px',
	color: '#fff',
	backgroundColor: '#001529',
  padding: '1rem',
};

export const AppContent = () => {
  return <Layout.Content style={contentStyle}>Content</Layout.Content>;
}