import { Card } from "./Card/card";

export const List = () => {
  return (
    <ul>
      <Card financialType="Entrada" />
      <Card financialType="Saída" />
      <Card financialType="Entrada" />
      <Card financialType="Entrada" />
    </ul>
  );
};
