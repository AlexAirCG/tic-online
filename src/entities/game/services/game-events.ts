import { GameDomain } from "@/entities/game";
import { GameId } from "@/kernel/ids";
import { EventsChanel } from "@/shared/lib/events";

type GameChanged = {
  type: "game-changed";
  data: GameDomain.GameEntity;
};

type GameCreated = {
  type: "game-created";
};

type GameEvent = GameChanged | GameCreated;

class GameEventsService {
  eventsChannel = new EventsChanel("game");
  async addGameChangedListener(
    gameId: GameId,
    listener: (event: GameChanged) => void,
  ) {
    return this.eventsChannel.concume(gameId, (data) => {
      listener(data as GameChanged);
    });
  }

  async addGameCreatedListener(listener: (event: GameCreated) => void) {
    return this.eventsChannel.concume(`game-created`, (data) => {
      listener(data as GameCreated);
    });
  }

  emit(event: GameEvent) {
    if (event.type === "game-changed") {
      return this.eventsChannel.emit(event.data.id, event);
    }

    if (event.type === "game-created") {
      return this.eventsChannel.emit("game-created", event);
    }
  }
}

export const gameEvents = new GameEventsService();
