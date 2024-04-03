import { TicketTile, MenuTiles, LineupTile } from '@/components/home';

export default function Home() {
  return (
    <div className='flex flex-col gap-4 mb-20 px-5'>
      <LineupTile />
      <TicketTile />
      <MenuTiles />
    </div>
  );
}
