import { GameDomain } from "@/entities/game";

export function GamePlayers({ game }: { game: GameDomain.GameEntity }) {
  const firstPlayer = game.status === "idle" ? game.creator : game.players[0];

  const secondPlayer = game.status === "idle" ? undefined : game.players[0];

  return (
    <div className="flex flex-row justify-between">
      <div className="text-lg">
        X - {firstPlayer.login}:{firstPlayer.reating}
      </div>
      <div className="text-lg">
        O - {secondPlayer?.login ?? "..."}:{secondPlayer?.reating ?? "..."}
      </div>
    </div>
  );
}
