import config from "./config"

export const isSelf = (playerId: string) => {
  return playerId + '' === config.selfUserId;
}