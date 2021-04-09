import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { ImcompleteTodos } from "./components/ImcompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  // 入力した値のstate化　inputのvalueに変数設定  入力内容をstate保持
  const [todoText, setTodoText] = useState("");

  // 未完了TODOの初期値　imcompleteTodos配列に値を追加していく
  const [imcompleteTodos, setImcompleteTodos] = useState([]);
  // 完了したTODOの初期値
  const [completeTodos, setCompleteTodos] = useState([]);

  // 引数(event) 入力値を取得                             値が入る
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  // 追加ボタンクリックしたときの処理
  const onClickAdd = () => {
    //　空文字の場合、何も起こらない
    if (todoText === "") return;
    // ...imcopleteTodosで配列コピー, 行を追加
    const newTodos = [...imcompleteTodos, todoText];

    //　入力値を配列に追加して送る
    setImcompleteTodos(newTodos);
    // 初期化
    setTodoText("");
  };

  //　削除処理
  const onClickDelete = (index) => {
    //　配列取得
    const newTodos = [...imcompleteTodos];

    newTodos.splice(index, 1);
    // メソッド呼び出して配列を返す
    setImcompleteTodos(newTodos);
  };

  // 完了処理
  const onClickComplete = (index) => {
    //　未完了配列取得
    const newImCompleteTodos = [...imcompleteTodos];
    // 未完了配列から(何番目, いくつ削除)削除
    newImCompleteTodos.splice(index, 1);
    //　配列を返す
    setImcompleteTodos(newImCompleteTodos);

    //　完了配列に完了した行を追加
    const newCompleteTodos = [...completeTodos, imcompleteTodos[index]];
    setCompleteTodos(newCompleteTodos);
  };

  // 戻す処理
  const onClickBack = (index) => {
    // 完了Todoから削除
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    setCompleteTodos(newCompleteTodos);

    // 未完了TODOに追加
    const newImCompleteTodos = [...imcompleteTodos, completeTodos[index]];
    setImcompleteTodos(newImCompleteTodos);
  };

  return (
    <>
      {/* component化 */}
      {/* propsでInputTodoに渡す */}
      {/* 入力コンポーネント */}
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      {/* 完了　削除コンポーネント */}
      <ImcompleteTodos
        imcompleteTodos={imcompleteTodos}
        clickComplete={onClickComplete}
        clickDelete={onClickDelete}
      />
      {/* 戻すコンポーネント */}
      <CompleteTodos completeTodos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
