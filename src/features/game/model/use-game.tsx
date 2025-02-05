import { GameDomain } from "@/entities/game";
import { GameId } from "@/kernel/ids";
import { routes } from "@/kernel/routes";
import { useEventsSource } from "@/shared/lib/sse/client";
import { useTransition } from "react";
import { gameStepAction } from "../actions/game-step";

export function useGame(gameId: GameId) {
  const { isPanding, dataStream } = useEventsSource<GameDomain.GameEntity>(
    routes.gameStream(gameId),
  );

  const [isPandingTransition, startTransition] = useTransition();

  const step = (index: number) => {
    startTransition(async () => {
      await gameStepAction({ gameId, index });
    });
  };
  return {
    game: dataStream,
    step,
    isPanding: isPanding,
    isStepPending: isPandingTransition,
  };
}
