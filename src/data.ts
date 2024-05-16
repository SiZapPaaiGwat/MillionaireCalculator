import { DataRow } from "./types";

export const initialParams = {
  birthYear: 1992,
  netWorth: -65000,
  taxRate: 35,
  interestRate: 7,
  annualIncome: 100000,
  incomeGrowthRate: 1.1,
  spendingRate: 50,
};

export const generateData = (params: typeof initialParams) => {
  const data: DataRow[] = [];
  let currentNetWorth = params.netWorth;
  let currentAnnualIncome = params.annualIncome;
  const interestRate = params.interestRate / 100;
  const taxRate = params.taxRate / 100;
  const spendingRate = params.spendingRate / 100;
  const incomeGrowthRate = params.incomeGrowthRate;

  let age = new Date().getFullYear() - params.birthYear;
  let year = new Date().getFullYear();

  while (currentNetWorth < 1000000) {
    const taxesPaid = currentAnnualIncome * taxRate;
    const spending = currentAnnualIncome * spendingRate;
    const amountInvested = currentAnnualIncome - taxesPaid - spending;
    const gainLoss = (currentNetWorth + amountInvested) * interestRate;
    const netWorthEnd = currentNetWorth + amountInvested + gainLoss;

    data.push({
      age,
      year,
      netWorth: parseFloat(currentNetWorth.toFixed(2)),
      annualIncome: parseFloat(currentAnnualIncome.toFixed(2)),
      taxesPaid: parseFloat(taxesPaid.toFixed(2)),
      spending: parseFloat(spending.toFixed(2)),
      interest: parseFloat((interestRate * 100).toFixed(2)),
      amountInvested: parseFloat(amountInvested.toFixed(2)),
      gainLoss: parseFloat(gainLoss.toFixed(2)),
      netWorthEnd: parseFloat(netWorthEnd.toFixed(2)),
    });

    currentNetWorth = netWorthEnd;
    currentAnnualIncome *= incomeGrowthRate;
    age++;
    year++;
  }

  return data;
};

export const initialData = generateData(initialParams);

export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};
