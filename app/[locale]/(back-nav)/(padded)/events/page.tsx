import { Carousel } from '@components/common';
import { Card, CardContent, CardHeader } from '@components/ui/card';
import StampTour1 from '@images/events/hottime_1.jpeg';
import StampTour2 from '@images/events/hottime_2.jpeg';
import StampTour3 from '@images/events/hottime_3.jpeg';
import StampTour4 from '@images/events/hottime_4.jpeg';
import StampTour5 from '@images/events/hottime_5.jpeg';
import StampTour6 from '@images/events/hottime_6.jpeg';
import Image from 'next/image';

const StampTours = [
  StampTour1,
  StampTour2,
  StampTour3,
  StampTour4,
  StampTour5,
  StampTour6,
];

const events = [
  {
    title: '핫타임 이벤트 : 스탬프투어',
    description: (
      <div className="relative w-full aspect-square">
        <Carousel>
          {StampTours.map((image, index) => (
            <Image
              className="rounded-xl"
              key={index}
              src={image}
              alt={`스탬프투어 이벤트 ${index + 1}`}
              width={600}
              height={600}
            />
          ))}
        </Carousel>
      </div>
    ),
  },
  {
    title: '랑데부 : 만남의 우편함',
    description: (
      <div>
        <span>이용 안내 :</span>
        <ol className="mb-6 list-decimal list-inside li:mb-2">
          <li>DANFESTA 기간 동안 익명으로 편지를 남긴다.</li>
          <li>
            편지를 남길 때 자신의 연락처(이메일, 인스타그램, 카카오톡
            아이디-선택사항)를 함께 남긴다.
          </li>
          <li>편지를 남긴 사람은 총 세 개의 익명의 편지를 열람할 수 있다.</li>
          <li>
            익명으로 편지를 남긴 다른 사람과 만나고 싶다면, 궁금하다면,
            개인적으로 연락해 만남을 추진한다.
          </li>
        </ol>
        <span className="text-neutral-500">주의사항 :</span>
        <ol className="text-neutral-500 list-decimal list-inside li:mb-2">
          <li>
            총학생회 계정으로 로그인한 단국대학교 학생만 글을 남기실 수
            있습니다.
          </li>
          <li>연락처를 남기는 것은 자유입니다.</li>
          <li>
            DANFESTA 기간 동안 새로운 만남을 원하는, 새로운 사람이 궁금한
            사람들에게 추천합니다.
          </li>
        </ol>
      </div>
    ),
  },
];

export default function EventsPage() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {events.map((event) => (
        <Card key={event.title}>
          <CardHeader>{event.title}</CardHeader>
          <CardContent className="flex flex-col items-center justify-center overflow-hidden">
            {event.description}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
