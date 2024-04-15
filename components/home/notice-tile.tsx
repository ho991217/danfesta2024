import { PropsWithChildren } from 'react';

import { Card } from '../ui/card';

export default function NoticeTile({ children }: PropsWithChildren) {
  return (
    <Card className="w-full flex flex-col items-start rounded-xl p-5 gap-2">
      <h4 className="text-sm text-neutral-500">공지</h4>
      <div className="w-full">{children}</div>
    </Card>
  );
}
