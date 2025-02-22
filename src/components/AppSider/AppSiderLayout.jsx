import { siderStyle } from './AppSiderStyle';
import { Layout, Card, Statistic, List, Typography, Spin, Tag } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import _ from 'lodash';

export const AppSiderlayout = ({ loading, assets }) => {
	const assetsMap = assets.map(
		({ id, grow, growPercent, totalAmount, totalProfit, amount }) => (
			<Card style={{ marginBottom: '1rem' }} key={id}>
				<Statistic
					title={_.upperFirst(id)}
					value={totalAmount}
					precision={2}
					valueStyle={{
						color: grow ? '#3f8600' : '#cf1322',
					}}
					prefix={grow ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
					suffix='$'
				/>
				<List
					size='small'
					dataSource={[
						{
							title: 'Total Profit',
							value: totalProfit.toFixed(2),
							isTag: true,
						},
						{ title: 'Asset Amount', value: amount, isPlain: true },
						// { title: 'Difference', value: growPercent },
					]}
					renderItem={({ title, value, isPlain, isTag }) => (
						<List.Item>
							<span>{title}</span>
							{isTag && (
								<Tag color={grow ? 'green' : 'red'}>{growPercent}%</Tag>
							)}
							{isPlain ? (
								<span>{value}</span>
							) : (
								<Typography.Text type={grow ? 'success' : 'danger'}>
									{value}$
								</Typography.Text>
							)}
						</List.Item>
					)}
				/>
			</Card>
		)
	);

	return loading ? (
		<Spin size='large' fullscreen />
	) : (
		<Layout.Sider width='25%' style={siderStyle}>
			{assetsMap}
		</Layout.Sider>
	);
};
