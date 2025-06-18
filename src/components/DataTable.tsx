import React from 'react';
import { Table } from 'react-bootstrap';

interface DataRow {
  id: number;
  name: string;
  value: number;
  change: number;
}

const mockData: DataRow[] = [
  { id: 1, name: 'AAPL', value: 150.25, change: 2.5 },
  { id: 2, name: 'GOOGL', value: 2750.80, change: -15.2 },
  { id: 3, name: 'TSLA', value: 825.45, change: 12.8 },
  { id: 4, name: 'MSFT', value: 305.60, change: 5.3 },
  { id: 5, name: 'AMZN', value: 3250.15, change: -8.7 },
];

export const DataTable: React.FC = () => {
  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(value);
  };

  const formatChange = (change: number): string => {
    const sign = change >= 0 ? '+' : '';
    return `${sign}${change.toFixed(2)}%`;
  };

  return (
    <div className="data-table">
      <h3>Stock Data</h3>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Price</th>
            <th>Change (%)</th>
          </tr>
        </thead>
        <tbody>
          {mockData.map((row) => (
            <tr key={row.id}>
              <td>{row.name}</td>
              <td>{formatCurrency(row.value)}</td>
              <td className={row.change >= 0 ? 'text-success' : 'text-danger'}>
                {formatChange(row.change)}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}; 