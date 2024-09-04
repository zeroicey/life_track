type Props = {
  text: string;
};

export default function MemoCard({ text }: Props) {
  return <div className="border rounded w-full p-2">{text}</div>;
}
