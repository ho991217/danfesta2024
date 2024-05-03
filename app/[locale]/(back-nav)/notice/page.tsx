import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/app/components/ui/accordion';

type Notice = {
  id: string;
  title: string;
  content: string[];
};

const data: Notice[] = [
  {
    id: 'notice-1',
    title: '축제 중 사고 발생 시 비상 연락처',
    content: [
      '총학생회장 박성헌 : 010-8984-7734',
      '부총학생회장 박범성 : 010-5246-3764',
      '문화체육국장 손효빈 : 010-4499-5494',
    ],
  },
  {
    id: 'notice-2',
    title: '종합 운영 시간 안내',
    content: [
      '축제 기간 : 5/16~5/18',
      '부스 운영 시간(주점 제외) : 12:00~17:00',
    ],
  },
  {
    id: 'notice-3',
    title: 'F&B 및 주류 판매 부스 안내',
    content: [
      '[5/16]',
      'F&B 운영시간 : 12:00 ~ 23:00',
      '주류 판매시간 : 17:00 ~ 23:00',
      '',
      '[5/17, 5/18]',
      'F&B 운영시간 : 12:00 ~ 24:00',
      '주류 판매시간 : 17:00 ~ 24:00',
    ],
  },
  {
    id: 'notice-4',
    title: '주점 이용 주의사항 안내',
    content: [
      '1. 곰상에서 운영되는 주점에서는 외부 음식 및 외부 주류의 반입을 제한합니다.',
      '2. 학생운영 주점에서의 주류 판매 및 배부는 주세법 등의 법령에 의거하여 금지됩니다.',
      '3. 주점 별 자릿세를 지출할 수 있습니다.',
    ],
  },
  {
    id: 'notice-5',
    title: '축제 기간 중 버스 운행구간 변경 안내',
    content: [
      '[셔틀버스 및 일반버스]',
      '변경 전: 치대병원 - 종합 실험동 - 평화의 광장 - 인문관',
      '',
      '변경 후: 상징탑 - 중앙 도서관 - 테니스장 - 인문관 - 정문',
    ],
  },
  {
    id: 'notice-6',
    title: 'Q1. 단국존 오프라인 예매는 없나요?',
    content: [
      '<2024 DANFESTA>의 단국존 예매는 전면 온라인으로 진행됩니다.',
      '오프라인 티켓 예매 진행 시, 야간 대기 도중 발생할 수 있는 안정상의 사고를 미연에 방지하기 위하여 티켓의 수량 모두 온라인으로 진행하게 된 점 양해 부탁드립니다.',
    ],
  },
  {
    id: 'notice-7',
    title: 'Q2. 단국존 입장 기준은 무엇인가요?',
    content: [
      '단국대학교 죽전캠퍼스 축제는 현재 단국대학교 죽전캠퍼스 재학생분들의 등록금과 학생회비를 통해 준비된 행사입니다.',
      '따라서 해당 재학생들의 무대 관람을 위하여 단국존을 설치하게 되었습니다.',
      '',
      '하지만 공연이 진행되는 노천마당의 특성상, 관람석이 계단식으로 되어 있어 단국존이 아니더라도 원활한 무대 관람이 가능한 점 알려드립니다.',
    ],
  },
  {
    id: 'notice-8',
    title: 'Q3. 외부인도 축제 참여가 가능한가요?',
    content: [
      '가능합니다.',
      '2024 DANFESTA는 외부인의 출입을 제한하지 않습니다. 단, 체험 부스 등의 일부 콘텐츠나 상품 수령에 관해서는 재학생만을 대상으로 진행하는 점 양해 부탁드립니다.',
    ],
  },
  {
    id: 'notice-9',
    title: 'Q4. 팔찌 없이 무대관람이 가능한가요?',
    content: [
      '공연이 진행되는 노천마당의 특성상, 관람석이 계단식으로 되어 있어 단국존이 아니더라도 원활한 무대 관람이 가능한 점 알려드립니다.',
      '',
      '따라서 무대 관람을 위한 티켓은 별도로 필요하지 않습니다.',
    ],
  },
  {
    id: 'notice-10',
    title: 'Q5. 단국존 팔찌를 양도해도 되나요?',
    content: [
      '총학생회는 단국존 팔찌 매매 및 양도를 금지하며, 매매 및 양도 행위 발견 즉시 회수 및 폐기 처분 예정입니다.',
      '',
      '신청한 정보와 수령인이 제시하는 웹정보는 수령인 본인이 모두 동일인이어야만 하며, 캡처본 제시는 불가능합니다.',
      '',
      '예매 팔찌 배부 시 수령인이 예매인과 동일인인지 의심되는 경우, 몇 가지 개인정보에 관한 내용 확인을 요구할 수 있습니다.',
    ],
  },
  {
    id: 'notice-11',
    title: 'Q6. 축제중 흡연부스는 어디인가요?',
    content: [
      '노천마당, 혜당관, 곰상, 폭포공원 등 축제 콘텐츠가 진행되는 곳 모두 금연 구역입니다.',
      '이외의 기존 흡연구역과 축제 당일 추가적으로 설치 예정인 임시 흡연구역을 이용해 주시기 바랍니다.',
    ],
  },
  {
    id: 'notice-12',
    title: 'Q7. 축제에서 음주가 가능한가요?',
    content: [
      '가능합니다.',
      '주류 판매 라이선스를 소유하고 있는 업체가 입점하여 주류를 판매할 예정입니다.',
      '주류의 원활한 구매를 위해 법정 신분증을 지참해 주시기 바랍니다.',
      '',
      '*학생운영 주점에서의 주류 판매 및 배부는 관련 법령에 근거하여 금지됩니다.',
      '병으로 된 주류는 사고 예방을 위해 축제위로부터 제지할 수 있습니다.',
    ],
  },
  {
    id: 'notice-13',
    title: 'Q8. 축제 당일에는 휴강 안하나요?',
    content: [
      '축제 당일 학교 본부 주관 휴강은 예정되어 있지 않습니다.',
      '당일 강의 일정은 교수님의 재량에 따라 변동될 수 있습니다.',
    ],
  },
];

export default async function Page() {
  return (
    <Accordion type="single" className="px-5 mb-20">
      {data.map((notice) => (
        <Notice key={notice.id} {...notice} />
      ))}
    </Accordion>
  );
}

function Notice({ title, content, id }: Notice) {
  return (
    <AccordionItem value={id}>
      <AccordionTrigger>
        <h4 className="font-bold px-2">{title}</h4>
      </AccordionTrigger>
      <AccordionContent className="px-2 text-neutral-500">
        <ul className="flex flex-col gap-2">
          {content.map((line, index) => (
            <li key={index}>{line}</li>
          ))}
        </ul>
      </AccordionContent>
    </AccordionItem>
  );
}
