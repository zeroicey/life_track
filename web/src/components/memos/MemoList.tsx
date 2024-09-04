import MemoCard from "./MemoCard";

const memos = [
  { id: 1, text: "First Memo" },
  { id: 2, text: "Second Memo" },
  { id: 3, text: "Third Memo" },
];

export default function MemoList() {
  return memos.map((memo) => <MemoCard key={memo.id} text={memo.text} />);
}
