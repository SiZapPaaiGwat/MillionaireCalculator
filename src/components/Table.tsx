import React from "react";

import { SimpleTableProps } from "@/types";
import { formatCurrency } from "@/data";

const SimpleTable: React.FC<SimpleTableProps> = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="table-header-cell">Age</th>
            <th className="table-header-cell">Year</th>
            <th className="table-header-cell">Net Worth</th>
            <th className="table-header-cell">Annual Income</th>
            <th className="table-header-cell">Taxes Paid</th>
            <th className="table-header-cell">Spending</th>
            <th className="table-header-cell">Interest</th>
            <th className="table-header-cell">Amount Invested</th>
            <th className="table-header-cell">Gain/Loss On Interest</th>
            <th className="table-header-cell">Net Worth End Of Year</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
            >
              <td className="table-data-cell-bold">{row.age}</td>
              <td className="table-data-cell">{row.year}</td>
              <td className="table-data-cell">
                {formatCurrency(row.netWorth)}
              </td>
              <td className="table-data-cell">
                {formatCurrency(row.annualIncome)}
              </td>
              <td className="table-data-cell">
                {formatCurrency(row.taxesPaid)}
              </td>
              <td className="table-data-cell">
                {formatCurrency(row.spending)}
              </td>
              <td className="table-data-cell">{row.interest}%</td>
              <td className="table-data-cell">
                {formatCurrency(row.amountInvested)}
              </td>
              <td className="table-data-cell">
                {formatCurrency(row.gainLoss)}
              </td>
              <td className="table-data-cell">
                {formatCurrency(row.netWorthEnd)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SimpleTable;
