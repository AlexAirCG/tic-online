import { getIdleGames } from "@/entities/game/server";
import { Layout } from "../ui/layout";
import { GameCard } from "../ui/game-card";
import { CreateButton } from "./create-button";
import { Button } from "@/shared/ui/button";
import { routes } from "@/kernel/routes";
import Link from "next/link";

export async function GamesList() {
  const games = await getIdleGames();

  console.log(games);

  return (
    <Layout actions={<CreateButton />}>
      {games.map((game) => (
        <GameCard
          key={game.id}
          login={game.creator.login}
          reating={game.creator.reating}
          actions={
            <Link href={routes.game(game.id)}>
              <Button>Подключиться</Button>
            </Link>
          }
        />
      ))}
    </Layout>
  );
}
