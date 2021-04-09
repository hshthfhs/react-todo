import React from "react";

export const ImcompleteTodos = (props) => {
  const { imcompleteTodos, clickComplete, clickDelete } = props;
  return (
    /* 未完了 */
    <div className="imcomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {/* map関数ループ処理 最初のdivにkeyの設定が必要 */}
        {/* imcompleteの中身がtodoに入っている */}
        {imcompleteTodos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => clickComplete(index)}>完了</button>
              <button onClick={() => clickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
