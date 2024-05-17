import { Link } from '@components/common';
import type { PropsWithChildren } from 'react';

import Tile from './tile';

export type TileInfo = {
  id: number;
  subtitle: string;
  title: JSX.Element;
  link: string;
  icon: React.ReactNode;
  bgColor: string;
  textColor?: string;
  privateRoute?: boolean;
};

export const TileHeader = ({ children }: PropsWithChildren) => (
  <div className="font-bold">{children}</div>
);

export default function MenuTiles({ tiles }: { tiles: TileInfo[] }) {
  return (
    <div className="w-full grid grid-cols-2 grid-rows-2 gap-4 aspect-square">
      {tiles.map(({ privateRoute, ...tile }) => (
        <Link key={tile.id} href={tile.link} auth={privateRoute}>
          <Tile {...tile} />
        </Link>
      ))}
    </div>
  );
}
