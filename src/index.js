import "./styles.css";

//まずは簡単な機能を作成して機能を細分化して実装していく。
//valueでinputに入力した文字列を取ってこれる。
//HTMLに全角スペースを入れないように！
const onClickAdd = () => {
  //テストボックスの値を習得し、初期化する。
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // div 生成
  const div = document.createElement("div");
  div.className = "list-row"; //クラス名を追加

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText; //liタグのテキストに入力した内容を格納

  // button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //完了したTODOリストに追加
    // div 生成
    const div2 = document.createElement("div");
    div2.className = "list-row"; //クラス名を追加
    //liタグを生成
    const completeText = inputText;
    const liComplete = document.createElement("li");
    liComplete.innerText = completeText;

    //buttonタグを生成
    const returnButton = document.createElement("button");
    returnButton.innerText = "戻す";

    //親タグ(div)にliタグとbuttonタグを追加
    div2.appendChild(liComplete);
    div2.appendChild(returnButton);

    document.getElementById("complete-list").appendChild(div2);

    //削除機能
    //押された完了ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode);
  });

  // button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.parentNode);
    //押された削除ボタンの親タグ(div)を未完了リストから削除
    //const deleteTarget = deleteButton.parentNode;
    //incomplete-list 配下の要素を消せる。
    // document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
  //console.log(div);
};

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//documentを用いてDOMにアクセスする。
//HTMLを習得する。
//document.headでheadタグを取ってこれる。
//getElementById: idを基準にタグを取ってくる。
//addEventListener: イベント処理を行う。
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
