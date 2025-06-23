import React, {useMemo} from 'react';
import {MoreHorizontal, Eye, Edit, Trash2} from 'lucide-react';

interface DataTableProps {
	searchTerm: string;
	selectedFilter: string;
}

const DataTable: React.FC<DataTableProps> = ({searchTerm, selectedFilter}) => {
	const generateMassiveData = () => {
		const data = [];
		for (let i = 0; i < 10000; i++) {
			data.push({
				id: i,
				name: `User ${i}`,
				email: `user${i}@example.com`,
				role: ['Admin', 'User', 'Manager', 'Developer'][Math.floor(Math.random() * 4)],
				status: ['Active', 'Inactive', 'Pending'][Math.floor(Math.random() * 3)],
				lastLogin: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000)
					.toISOString()
					.split('T')[0],
				revenue: (Math.random() * 10000).toFixed(2),
				orders: Math.floor(Math.random() * 100),
				category: ['users', 'orders', 'products', 'analytics'][Math.floor(Math.random() * 4)],
			});
		}
		return data;
	};

	const allData = generateMassiveData();

	const filteredData = allData.filter((item) => {
		const searchMatch =
			item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
			item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
			item.role.toLowerCase().includes(searchTerm.toLowerCase());

		const filterMatch = selectedFilter === 'all' || item.category === selectedFilter;

		return searchMatch && filterMatch;
	});

	return (
		<div className="bg-white rounded-lg shadow-sm border border-gray-200">
			<div className="px-6 py-4 border-b border-gray-200">
				<h3 className="text-lg font-semibold text-gray-900">
					Data Records ({filteredData.length.toLocaleString()})
				</h3>
				<p className="text-sm text-gray-600 mt-1">Showing all records matching your criteria</p>
			</div>

			<div className="overflow-x-auto">
				<table className="w-full">
					<thead className="bg-gray-50">
						<tr>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
								User
							</th>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
								Role
							</th>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
								Status
							</th>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
								Last Login
							</th>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
								Revenue
							</th>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
								Orders
							</th>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
								Actions
							</th>
						</tr>
					</thead>
					<tbody className="bg-white divide-y divide-gray-200">
						{filteredData.map((item) => (
							<tr key={item.id} className="hover:bg-gray-50">
								<td className="px-6 py-4 whitespace-nowrap">
									<div className="flex items-center">
										<div className="h-10 w-10 bg-gray-300 rounded-full flex items-center justify-center">
											<span className="text-sm font-medium text-gray-700">
												{item.name.charAt(0)}
											</span>
										</div>
										<div className="ml-4">
											<div className="text-sm font-medium text-gray-900">{item.name}</div>
											<div className="text-sm text-gray-500">{item.email}</div>
										</div>
									</div>
								</td>
								<td className="px-6 py-4 whitespace-nowrap">
									<span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
										{item.role}
									</span>
								</td>
								<td className="px-6 py-4 whitespace-nowrap">
									<span
										className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
											item.status === 'Active'
												? 'bg-green-100 text-green-800'
												: item.status === 'Inactive'
												? 'bg-red-100 text-red-800'
												: 'bg-yellow-100 text-yellow-800'
										}`}
									>
										{item.status}
									</span>
								</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
									{item.lastLogin}
								</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
									${item.revenue}
								</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.orders}</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
									<div className="flex items-center space-x-2">
										<button className="text-blue-600 hover:text-blue-900">
											<Eye className="h-4 w-4" />
										</button>
										<button className="text-gray-600 hover:text-gray-900">
											<Edit className="h-4 w-4" />
										</button>
										<button className="text-red-600 hover:text-red-900">
											<Trash2 className="h-4 w-4" />
										</button>
										<button className="text-gray-600 hover:text-gray-900">
											<MoreHorizontal className="h-4 w-4" />
										</button>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default DataTable;
