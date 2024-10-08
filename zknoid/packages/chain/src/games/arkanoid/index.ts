import {
  ArkanoidGameHub,
  GameRecordProof,
  // GameRecordPublicOutput,
  checkGameRecord,
  // GameInputs,
  // Tick,
  // GameRecordKey,
  // Brick,
  // Bricks,
  // IntPoint,
  GameRecord,
  GameRecordPublicOutput,
  MapGenerationProof,
  initGameProcess,
  GameProcessProof,
  checkMapGeneration,
  processTicks,
} from './ArkanoidGameHub.js';
import {
  GameContext,
  loadGameContext,
  createBricksBySeed,
} from './GameContext.js';
import {
  // GameHub,
  // GameRecordProof,
  // checkGameRecord,
  GameInputs,
  Tick,
  GameRecordKey,
  Brick,
  Bricks,
  IntPoint,
  Competition,
  LeaderboardIndex,
} from './types.js';
import {
  BRICK_HALF_WIDTH,
  FIELD_SIZE,
  GAME_LENGTH,
  MAX_BRICKS,
  BRICK_SIZE,
  FIELD_WIDTH,
  FIELD_HEIGHT,
  DEFAULT_BALL_LOCATION_X,
  DEFAULT_BALL_LOCATION_Y,
  DEFAULT_BALL_SPEED_X,
  DEFAULT_BALL_SPEED_Y,
  TICK_PERIOD,
  DEFAULT_PLATFORM_SPEED,
  CHUNK_LENGTH,
  ACCELERATION_TIME,
  ACCELERATION,
  PLATFORM_WIDTH,
} from './constants.js';
import { defaultLevel, getDefaultCompetitions } from './levels.js';

export {
  Competition,
  ArkanoidGameHub,
  GameContext,
  GameRecordProof,
  GameRecordPublicOutput,
  MapGenerationProof,
  GameProcessProof,
  initGameProcess,
  checkGameRecord,
  checkMapGeneration,
  loadGameContext,
  createBricksBySeed,
  processTicks,
  FIELD_SIZE,
  GAME_LENGTH,
  GameInputs,
  Tick,
  GameRecordKey,
  LeaderboardIndex,
  Brick,
  Bricks,
  CHUNK_LENGTH,
  BRICK_HALF_WIDTH,
  MAX_BRICKS,
  BRICK_SIZE,
  FIELD_WIDTH,
  FIELD_HEIGHT,
  DEFAULT_BALL_LOCATION_X,
  DEFAULT_BALL_LOCATION_Y,
  DEFAULT_BALL_SPEED_X,
  DEFAULT_BALL_SPEED_Y,
  IntPoint,
  defaultLevel,
  TICK_PERIOD,
  ACCELERATION,
  ACCELERATION_TIME,
  DEFAULT_PLATFORM_SPEED,
  PLATFORM_WIDTH,
  GameRecord,
  getDefaultCompetitions,
};
