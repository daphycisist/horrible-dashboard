import _ from "lodash";

export const formatters = {
  currency: (value: number): string =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value),
  date: (date: string | number | Date): string =>
    new Date(date).toLocaleDateString(),
  time: (date: string | number | Date): string =>
    new Date(date).toLocaleTimeString(),
};

export const validators = {
  email: (email: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
  phone: (phone: string): boolean => /^[\d-\s\(\)\+]+$/.test(phone),
};

export const analytics = {
  processData: (data: any[]): any[][] => _.chunk(data, 100),
  calculateMetrics: (data: number[]): number =>
    data.reduce((acc: number, val: number) => acc + val, 0),
};
