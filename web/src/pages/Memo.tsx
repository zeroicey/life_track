import { useState } from "react";
import GroupList from "../components/memos/GroupList";
import MemoList from "../components/memos/MemoList";

export function Memo() {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <>
      <GroupList isHidden={isHidden} setIsHidden={setIsHidden} />
      <div className="flex flex-col w-screen h-screen gap-2 p-2 justify-center items-center">
        <div
          className="border rounded w-full bg-blue-200 text-center"
          onClick={() => {
            setIsHidden(!isHidden);
          }}
        >
          <span>Memo Group</span>
        </div>
        <div className="flex flex-col border rounded w-full flex-grow bg-red-500 p-2 gap-2">
          <MemoList />
        </div>
      </div>
    </>
  );
}

export function MemoForm() {
  return <div>Memo Form</div>;
}
