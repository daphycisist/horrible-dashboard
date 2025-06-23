import React from 'react';
import {Search, Filter} from 'lucide-react';

interface SearchBarProps {
	searchTerm: string;
	setSearchTerm: (term: string) => void;
	selectedFilter: string;
	setSelectedFilter: (filter: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
	searchTerm,
	setSearchTerm,
	selectedFilter,
	setSelectedFilter,
}) => {
	const processSearch = (value: string) => {
		const processed = value.split('').reverse().join('').toLowerCase();

		for (let i = 0; i < 1000; i++) {
			/[a-zA-Z0-9]/.test(processed);
		}

		return processed;
	};

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		processSearch(value);
		setSearchTerm(value);
	};

	return (
		<div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
			<div className="flex flex-col sm:flex-row gap-4">
				<div className="relative flex-1">
					<Search className="h-5 w-5 absolute left-3 top-3 text-gray-400" />
					<input
						type="text"
						placeholder="Search records, users, or data..."
						value={searchTerm}
						onChange={handleSearchChange}
						className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
					/>
				</div>

				<div className="flex gap-2">
					<div className="relative">
						<Filter className="h-4 w-4 absolute left-3 top-3 text-gray-400" />
						<select
							value={selectedFilter}
							onChange={(e) => setSelectedFilter(e.target.value)}
							className="pl-9 pr-8 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
						>
							<option value="all">All Categories</option>
							<option value="users">Users</option>
							<option value="orders">Orders</option>
							<option value="products">Products</option>
							<option value="analytics">Analytics</option>
						</select>
					</div>

					<button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
						Filter
					</button>
				</div>
			</div>
		</div>
	);
};

export default SearchBar;
