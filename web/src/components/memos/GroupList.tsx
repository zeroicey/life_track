type Props = {
  isHidden: boolean;
  setIsHidden: (hidden: boolean) => void;
};

function GroupCard() {
  return (
    <div className="flex flex-row justify-between gap-2">
      <span>Group Name</span>
      <div className="flex gap-2">
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
}

export default function GroupList({ isHidden, setIsHidden }: Props) {
  if (isHidden)
    return (
      <div
        className="absolute right-0 left-0 bottom-0 top-0 m-auto w-full h-full flex justify-center items-center"
        onClick={() => {
          setIsHidden(false);
        }}
      >
        <div
          className="border p-2 overflow-y-scroll no-scrollbar h-2/3 w-auto rounded-md bg-gray-800"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col">
            <GroupCard />
            <GroupCard />
            <GroupCard />
            <GroupCard />
          </div>
        </div>
      </div>
    );
  else return <></>;
}
