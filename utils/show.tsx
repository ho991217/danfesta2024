type ShowProps = {
  condition: boolean;
  children: React.ReactNode;
};

export default function Show({ condition, children }: ShowProps) {
  if (condition) {
    return <>{children}</>;
  }
}
