import dynamic from 'next/dynamic';
import { TicketTile } from '../../../components/home';
const LineupTile = dynamic(
  () => import('../../../components/home/lineup-tile')
);

export default function Home() {
  return (
    <div className='flex flex-col gap-4'>
      <LineupTile />
      <TicketTile />
    </div>
  );
}
