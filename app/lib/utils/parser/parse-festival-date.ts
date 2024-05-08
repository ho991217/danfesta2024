import { FestivalDate } from '@/app/[locale]/(back-nav)/lineup/page';

export default function parseFestivalDate(date: FestivalDate): number {
  switch (date) {
    case 'FIRST_DAY':
      return 1;
    case 'SECOND_DAY':
      return 2;
    case 'THIRD_DAY':
      return 3;
    default:
      throw new Error('Invalid date');
  }
}
