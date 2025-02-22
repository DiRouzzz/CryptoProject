import { Layout, Card, Statistic, List, Typography, Spin, Tag } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { fakeFetchAssets, fakeFetchCrypto } from '../../api';
import { percentDifference } from '../../utils';
import _ from 'lodash';

const siderStyle = {
	// textAlign: 'center',
	// lineHeight: '120px',
	// color: '#fff',
	// backgroundColor: '#1677ff',
	padding: '1rem',
};

export const AppSider = () => {
	const [loading, setLoading] = useState(false);
	const [crypto, setCrypto] = useState([]);
	const [assets, setAssets] = useState([]);

	useEffect(() => {
		const preload = async () => {
			setLoading(true);
			const { result } = await fakeFetchCrypto();
			const assetsFake = await fakeFetchAssets();

			const assetsResult = assetsFake.map(asset => {
				const coin = result.find(c => c.id === asset.id);
				return {
					grow: asset.price < coin.price,
					growPercent: percentDifference(asset.price, coin.price),
					totalAmount: asset.amount * coin.price,
					totalProfit: asset.amount * coin.price - asset.amount * asset.price,
					...asset,
				};
			});

			setAssets(assetsResult);
			setCrypto(result);
			setLoading(false);
		};
		preload();
	}, []);

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
