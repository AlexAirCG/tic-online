import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import React from "react";

export function GameLayout({
  status,
  field,
  players,
}: {
  players?: React.ReactNode;
  status?: React.ReactNode;
  field?: React.ReactNode;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Поле битвы</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {players}
        {status}
        <div className="flex justify-center items-center">{field}</div>
      </CardContent>
    </Card>
  );
}
