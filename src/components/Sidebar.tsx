import React from "react";

import { SidebarProps } from "@/types";

const Sidebar: React.FC<SidebarProps> = (props) => {
  const handleChange =
    (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      props.onChange(field, parseFloat(event.target.value));
    };

  return (
    <div className="p-4 pt-0">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">
        Things less in my control
      </h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-500">
          Birth Year
        </label>
        <input
          type="number"
          value={props.birthYear}
          onChange={handleChange("birthYear")}
          className="form-input"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-500">
          Current Net Worth
        </label>
        <input
          type="number"
          value={props.netWorth}
          onChange={handleChange("netWorth")}
          className="form-input"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-500">
          Tax Rate
        </label>
        <input
          type="number"
          value={props.taxRate}
          onChange={handleChange("taxRate")}
          className="form-input"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-500">
          Interest Rate
        </label>
        <input
          type="number"
          value={props.interestRate}
          onChange={handleChange("interestRate")}
          className="form-input"
        />
      </div>
      <h2 className="text-xl font-semibold mb-4 mt-6 text-gray-700">
        Things more in my control
      </h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-500">
          Annual Gross Income
        </label>
        <input
          type="number"
          value={props.annualIncome}
          onChange={handleChange("annualIncome")}
          className="form-input"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-500">
          Income Growth Rate
        </label>
        <input
          type="number"
          value={props.incomeGrowthRate}
          onChange={handleChange("incomeGrowthRate")}
          className="form-input"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-500">
          Spending (% of gross income)
        </label>
        <input
          type="number"
          value={props.spendingRate}
          onChange={handleChange("spendingRate")}
          className="form-input"
        />
      </div>
    </div>
  );
};

export default Sidebar;
