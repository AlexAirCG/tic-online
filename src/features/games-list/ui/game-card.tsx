import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/shared/ui/card";
import React from "react";

export function GameCard({
  login,
  reating,
  actions,
}: {
  login: string;
  reating: number;
  actions: React.ReactNode;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Игра с {login}</CardTitle>
      </CardHeader>
      <CardContent>Рейтинг: {reating}</CardContent>
      <CardFooter>{actions}</CardFooter>
    </Card>
  );
}
