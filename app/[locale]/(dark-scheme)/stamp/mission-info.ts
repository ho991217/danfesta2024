import Stamp3Thumbnail from '@images/stamp/thumbnails/드레스코드.png';
import Stamp2Thumbnail from '@images/stamp/thumbnails/슬로건.png';
import Stamp1Thumbnail from '@images/stamp/thumbnails/타투스티커.png';
import Stamp4Thumbnail from '@images/stamp/thumbnails/포토부스.png';
import Stamp5Thumbnail from '@images/stamp/thumbnails/포토존.png';
import Stamp6Thumbnail from '@images/stamp/thumbnails/핫타임_1.png';
import Stamp7Thumbnail from '@images/stamp/thumbnails/핫타임_2.png';
import Stamp1 from '@images/stamp/스탬프판_문체-02.webp';
import Stamp2 from '@images/stamp/스탬프판_문체-03.webp';
import Stamp3 from '@images/stamp/스탬프판_문체-04.webp';
import Stamp4 from '@images/stamp/스탬프판_문체-05.webp';
import Stamp5 from '@images/stamp/스탬프판_문체-06.webp';
import Stamp6 from '@images/stamp/스탬프판_문체-07.webp';
import Stamp7 from '@images/stamp/스탬프판_문체-08.webp';
import { StaticImageData } from 'next/image';

export type MissionInfo = {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
  location: string;
  done: boolean;
  stampImage: StaticImageData;
};

export const missionInfo: MissionInfo[] = [
  {
    id: 1,
    title: '타투 스티커',
    description:
      '2024 DANFESTA: Orbit 에서 축제를 즐기시는 모든 분들이 화합할 수 있도록 타투 스티커를 제작하였습니다. \n\n 단국대학교의 타투스티커를 통해 더욱 즐거운 DANFESTA 를 즐겨보세요 💫 \n\n 🚨 타투스티커의 경우 상시 배부로, 수량 소진 시 조기 마감될 수 있습니다.',
    image: Stamp1Thumbnail,
    location: '혜당관 앞 총학생회 부스',
    done: false,
    stampImage: Stamp1,
  },
  {
    id: 2,
    title: '슬로건',
    description:
      '2024 DANFESTA: Orbit 에서 축제를 즐기시는 모든 분들이 화합할 수 있도록 슬로건을 제작하였습니다. \n\n 단국대학교의 슬로건을 통해 더욱 즐거운 DANFESTA 를 즐겨보세요 💫 \n\n 🚨 슬로건의 경우 유료 판매로 진행되는 점 양해부탁드립니다.',
    image: Stamp2Thumbnail,
    location:
      '사전 예약자 - 노천마당 총학생회 부스 10:00~15:00 \n 현장 구매자 - 혜당관 앞 총학생회 부스 14:00~15:00',
    done: false,
    stampImage: Stamp2,
  },
  {
    id: 3,
    title: '드레스 코드 & 인스타 필터',
    description:
      '2024 DANFESTA: Orbit 에서 축제를 즐기시는 모든 분들이 화합할 수 있도록 드레스코드와 인스타 필터를 선정하였습니다.\n\n단국대학교의 드레스코드와 인스타 필터를 통해 더욱 즐거운 DANFESTA 를 즐겨보세요 💫',
    image: Stamp3Thumbnail,
    location: '혜당관 앞 총학생회 부스',
    done: false,
    stampImage: Stamp3,
  },
  {
    id: 4,
    title: '포토부스',
    description:
      '2024 DANFESTA: Orbit 에서 축제를 즐기시는 모든 분들이 화합할 수 있도록 포토부스 프레임을 제작하였습니다.\n\n단국대학교의 포토부스 프레임을 통해 더욱 즐거운 DANFESTA 를 즐겨보세요 💫',
    image: Stamp4Thumbnail,
    location: '석주선기념박물관 앞 포토블링 부스',
    done: false,
    stampImage: Stamp4,
  },
  {
    id: 5,
    title: '포토존',
    description:
      '2024 DANFESTA는 Orbit(궤도)라는 타이틀을 통해 단국대학교 학우 여러분들이 서로를 끌어당기며 함께 움직일 수 있는 장을 만들고자 합니다. 더불어, Rendez-vous라는 부제처럼, 이번 DANFESTA가 서로의 만남의 광장이 될 수 있도록 하겠다는 포부를 가지고 있습니다.\n단국대학교 내의 포토존을 통해 더욱 즐거운 DANFESTA 를 즐겨보세요 💫',
    image: Stamp5Thumbnail,
    location: '학생식당 위 달 조형물',
    done: false,
    stampImage: Stamp5,
  },
  {
    id: 6,
    title: '핫타임 이벤트 1',
    description:
      '<잡아야지~못잡겠지~깡총깡총>\n단국상사란?\n\n우리에겐 보이지 않는 달의 뒷면,\n그곳에 자리 잡은 스타트업 ‘단국 상사’.\n입사를 위해 최소 외계어 2400점, 우주선 조종 면허 6종, 토성 12년제 졸업이 필수다.\n단국 상사의 수장 ‘안 드로메다’는 하한가를 달리는 회사를 보며\n스탬프에 낀 우주먼지만 하염없이 털고 있다.\n\n사실 단국 상사에는 영업 1등 공신을 희망하는 토끼가 있었으니,\n다름 아닌 ‘안 판다(a.k.a 우수 사원 호소인)’\n“24광년이 모자라!”\n단국 상사 소행성 관리부터 수·금·지·화 퀵 영업까지,\n일당백 영업사원이 되기 위해 ‘안 판다’는 1광년이 멀다 하고 뛰어다니는데......\n\n그러던 어느 날, ‘안 판다’ 앞으로 날아온 파견근무 통지서 한 장?!\n「안 판다(a.k.a 우수 사원 호소인) 단국대학교 파견근무 통보」\n저조한 영업팀의 실적으로\n결국 단국 상사 재단에 속한 단국대학교 파견,\n진리와 봉사를 중요시 하는 ‘단국대학교’ 영업사원으로 발령되고 만다.\n\n낯선 곳에 동기와 함께 떨어진 ‘안 판다’,\n인★ 게시글을 통해 팔로워들에게 전하길\n“스탬프왕을 만들어주면 사은품을 나눠줄게!”\n이에 야근각을 잰 동기 ‘난 간다(a.k.a 월급루팡)’가 도망치게 된다.\n\n도망친 ‘난 간다(a.k.a 월급루팡)’의 연장근무와\n열정맨 ‘안 판다(a.k.a 우수 사원 호소인)’의 승진을 캐리하는 단국 용사들,\n과연 두 사원은 ‘안 드로메다’의 곁으로 돌아갈 수 있을까?',
    image: Stamp6Thumbnail,
    location: '단국대학교 혜당관 건물 내부 \n (화장실 및 강의실 내부 제외)',
    done: false,
    stampImage: Stamp6,
  },
  {
    id: 7,
    title: '핫타임 이벤트 2',
    description:
      '<이달의 스탬프왕>\n단국상사란?\n\n우리에겐 보이지 않는 달의 뒷면,\n그곳에 자리 잡은 스타트업 ‘단국 상사’.\n입사를 위해 최소 외계어 2400점, 우주선 조종 면허 6종, 토성 12년제 졸업이 필수다.\n단국 상사의 수장 ‘안 드로메다’는 하한가를 달리는 회사를 보며\n스탬프에 낀 우주먼지만 하염없이 털고 있다.\n\n사실 단국 상사에는 영업 1등 공신을 희망하는 토끼가 있었으니,\n다름 아닌 ‘안 판다(a.k.a 우수 사원 호소인)’\n“24광년이 모자라!”\n단국 상사 소행성 관리부터 수·금·지·화 퀵 영업까지,\n일당백 영업사원이 되기 위해 ‘안 판다’는 1광년이 멀다 하고 뛰어다니는데......\n\n그러던 어느 날, ‘안 판다’ 앞으로 날아온 파견근무 통지서 한 장?!\n「안 판다(a.k.a 우수 사원 호소인) 단국대학교 파견근무 통보」\n저조한 영업팀의 실적으로\n결국 단국 상사 재단에 속한 단국대학교 파견,\n진리와 봉사를 중요시 하는 ‘단국대학교’ 영업사원으로 발령되고 만다.\n\n낯선 곳에 동기와 함께 떨어진 ‘안 판다’,\n인★ 게시글을 통해 팔로워들에게 전하길\n“스탬프왕을 만들어주면 사은품을 나눠줄게!”\n이에 야근각을 잰 동기 ‘난 간다(a.k.a 월급루팡)’가 도망치게 된다.\n\n도망친 ‘난 간다(a.k.a 월급루팡)’의 연장근무와\n열정맨 ‘안 판다(a.k.a 우수 사원 호소인)’의 승진을 캐리하는 단국 용사들,\n과연 두 사원은 ‘안 드로메다’의 곁으로 돌아갈 수 있을까?',
    image: Stamp7Thumbnail,
    location: '단국대학교 캠퍼스 전역 (실내제외)',
    done: false,
    stampImage: Stamp7,
  },
];
