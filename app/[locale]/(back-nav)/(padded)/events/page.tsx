import { Card, CardContent, CardHeader } from '@/app/components/ui/card';

export default function EventsPage() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader>행사1</CardHeader>
        <CardContent className="flex flex-col items-center justify-center">
          <p>행사1 설명</p>
        </CardContent>
      </Card>
    </div>
  );
}
