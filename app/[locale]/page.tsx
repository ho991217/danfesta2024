import { useTranslations } from 'next-intl';
import LineupTile from '../components/home/lineup-tile';

export default function Home() {
  const t = useTranslations('Home');
  return (
    <div>
      <LineupTile />
    </div>
  );
}
