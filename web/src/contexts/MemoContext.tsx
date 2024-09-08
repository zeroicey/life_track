import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const MemoContext = createContext({});

type Props = {
  children: any;
};

export function MemoContextProvider({ children }: Props) {
  const [memos, setMemos] = useState([]);
  const [texts, setTexts] = useState("");
  const [isInputHide, setIsInputHide] = useState(false);
  const [editingIndex, setEditingIndex] = useState({});
  const [editing, setEditing] = useState(false);
  const load_more = () => {
    get_memos(memos.length);
  };
  const delete_memo = (index) => {
    axios
      .delete(`/memo/${memos[index]._id}`)
      .then((res) => {
        res.status === 200 &&
          setMemos((memos) => {
            return memos.filter((_, _index) => index !== _index);
          });
      })
      .catch((err) => console.log(err));
  };
  const update_memo = () => {
    setTexts("");
    if (texts.trim() === "") {
      return;
    }
    axios
      .put(`/memo/${memos[editingIndex]._id}`, {
        texts,
      })
      .then((res) => {
        res.status === 200 &&
          setMemos((_memos) => {
            _memos[editingIndex].update_time = res.data.update_time;
            _memos[editingIndex].texts = res.data.texts;
            return [..._memos];
          });
      });
    setTexts("");
    setEditing(false);
  };
  const get_memos = (num) => {
    axios
      .get(`/memos/${num}`)
      .then((res) => {
        if (res.status === 200) {
          setMemos((_memos) => [..._memos, ...res.data]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const add_memo = () => {
    setTexts("");
    if (texts.trim() === "") {
      return;
    }
    axios.post("/memo", { texts }).then((res) => {
      if (res.status === 200) {
        setMemos((memos) => {
          return [res.data, ...memos];
        });
      }
    });
  };
  useEffect(() => {
    get_memos(0);
  }, []);

  return (
    <MemoContext.Provider
      value={{
        add_memo,
        memos,
        setMemos,
        texts,
        setTexts,
        isInputHide,
        setIsInputHide,
        delete_memo,
        editing,
        setEditing,
        setEditingIndex,
        update_memo,
        load_more,
      }}
    >
      {children}
    </MemoContext.Provider>
  );
}
