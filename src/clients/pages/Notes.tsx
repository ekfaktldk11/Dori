/**
 * [ new ] 버튼 (관리자 권한) - 이거 안만들고, html 형태의 데이터를 받아와서 렌더링만 해주기로 하자.
 * 카드 들이 있음
 * (카테고리로 나누는 것은 나중에 하더라도)
 * 카드 클릭하면 전체 크기의 노트가 팝업됨 (오버레이)
 * html 형태의 content 를 받아서 카드로 뿌려줄 것이 필요함
 * 텍스트는 두줄 넘어가면 ellipsis
 * 
 */

import MarkdownViewer from "../components/MarkdownViewer";

export default function Notes() {
  return (
    <div>
      <MarkdownViewer />
    </div>
  );
}
