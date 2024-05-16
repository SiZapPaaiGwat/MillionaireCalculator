export interface DataRow {
  age: number;
  year: number;
  netWorth: number;
  annualIncome: number;
  taxesPaid: number;
  spending: number;
  interest: number;
  amountInvested: number;
  gainLoss: number;
  netWorthEnd: number;
}

export interface SidebarProps {
  birthYear: number;
  netWorth: number;
  taxRate: number;
  interestRate: number;
  annualIncome: number;
  incomeGrowthRate: number;
  spendingRate: number;
  onChange: (field: string, value: number) => void;
}

export interface SimpleTableProps {
  data: DataRow[];
}
