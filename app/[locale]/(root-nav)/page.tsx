import { AdBanner } from '@components/common';
import { LineupTile, MenuTiles } from '@components/home';

export default function Home() {
    return (
        <div className="mb-20 flex flex-col gap-4 px-5">
            <LineupTile />
            <AdBanner />
            <MenuTiles />
        </div>
    );
}
