import { useStore } from "@nanostores/react";
import { deepMap } from "nanostores";
import { initializeGame } from "src/domain/functions";
import { Fleet, Game, PlayerIndex, Ship } from "src/domain/game";

const $game = deepMap<Game>(initializeGame());
export default $game;

export function usePlayerName(playerIndex: PlayerIndex) {
  const game = useStore($game, { keys: [`players[${playerIndex}].name`] });

  const setPlayerName = (newName: string) => {
    $game.setKey(`players[${playerIndex}].name`, newName);
  };

  return [game.players[playerIndex].name, setPlayerName] as const;
}

export function useGrid(playerIndex: PlayerIndex) {
  const game = useStore($game, { keys: [`players[${playerIndex}].grid`] });

  return [game.players[playerIndex].grid] as const;
}

export function useFleet(playerIndex: PlayerIndex) {
  const KEY = `players[${playerIndex}].fleet` as const;
  const game = useStore($game, { keys: [KEY] });

  const setFleet = (newFleet: Fleet) => {
    $game.setKey(KEY, newFleet);
  };

  return [game.players[playerIndex].fleet, setFleet] as const;
}

function findShipIndex(playerIndex: PlayerIndex, shipId: string) {
  return $game
    .get()
    .players[playerIndex].fleet.ships.findIndex((ship) => ship.id === shipId);
}

export function useShip(playerIndex: PlayerIndex, shipId: string) {
  const shipIndex = findShipIndex(playerIndex, shipId);

  const KEY = `players[${playerIndex}].fleet.ships[${shipIndex}]` as const;
  const game = useStore($game, { keys: [KEY] });

  const setShip = (newShip: Ship) => {
    $game.setKey(KEY, newShip);
  };

  return [game.players[playerIndex].fleet.ships[shipIndex], setShip] as const;
}

export function getShip(playerIndex: PlayerIndex, shipId: string): Ship {
  return $game
    .get()
    .players[playerIndex].fleet.ships.find(
      (ship) => ship.id === shipId
    ) as Ship;
}

export function setShip(playerIndex: PlayerIndex, ship: Ship) {
  const shipIndex = findShipIndex(playerIndex, ship.id);
  $game.setKey(`players[${playerIndex}].fleet.ships[${shipIndex}]`, ship);
}
