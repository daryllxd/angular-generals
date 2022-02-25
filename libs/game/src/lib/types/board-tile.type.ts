import { User } from './user.type';

type rank = 'sergeant' | 'spy' | 'private' | 'flag';

export interface Piece {
  player: User;
  rank: rank;
}

export interface BoardTile {
  piece: Piece | null;
}
