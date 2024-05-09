type DateBlockProps = {
  date: Date;
};

export default function DateBlock({ date }: DateBlockProps) {
  return (
    <div className="flex flex-col">
      <div className="text-2xl font-bold">{date.getDate()}</div>
      <div className="text-sm font-medium">
        {date.toLocaleDateString('ko-KR', { weekday: 'short' })}
      </div>
    </div>
  );
}
