import { prisma } from "@/shared/lib/db";
import { Button } from "@/shared/ui/button";
import { Card, CardTitle } from "@/shared/ui/card";

export default async function Home() {
  const games = await prisma.game.findMany();

  return (
    <div>
      <Button
        size="lg"
        variant="destructive"
        className="hover:bg-slate-400 mb-4"
      >
        Hello
      </Button>
      {games.map((game) => {
        return (
          <Card key={game.id} className="mb-4 p-3 w-52">
            <CardTitle>{game.name}</CardTitle>
          </Card>
        );
      })}
    </div>
  );
}
