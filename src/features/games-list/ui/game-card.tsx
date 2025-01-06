import { Card, CardHeader, CardTitle, CardContent } from "@/shared/ui/card";

export function GameCard({
  login,
  reating,
}: {
  login: string;
  reating: number;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Игра с {login}</CardTitle>
      </CardHeader>
      <CardContent>Рейтинг: {reating}</CardContent>
    </Card>
  );
}
