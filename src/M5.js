import { Link } from "react-router-dom";
function M5() {
  return (
    <>
      <div class="page-all">
        <h1 class="m-title">
          블록체인 기술을 이용한 해양 환경보호 기부 시스템
        </h1>
        <h2 class="m-team">By 열정너구리</h2>
        <nav id="main-nav">
          <div class="pull">
            <Link to="/M1">
              <button class="btn">개발동기</button>
            </Link>
            <span> </span>
            <Link to="/M2">
              <button class="btn">작품내용</button>
            </Link>
            <span> </span>
            <Link to="/M3">
              <button class="btn">설계내용</button>
            </Link>
            <span> </span>
            <Link to="/M4">
              <button class="btn">결과 및 기대효과</button>
            </Link>
            <Link to="/M5">
              <button class="btn">이벤트</button>
            </Link>
          </div>
        </nav>
        <hr class="line"></hr>
        <div class="content">
          <h2 class="sub_title">
            상품: 1등 문상 5000원(1명) / 2등 메가커피 아메리카노 쿠폰(2명)
          </h2>
          <span class="write">
            해양환경보호에 힘써주세요! 열정너구리팀에 스티커 붙히고 해양환경관련
            퀴즈를 풀어주세요! 그러면 응모완료! 추첨은 랜덤이며 당첨자 상품은
            공학작품 전시회 종료후 개별로 드리겠습니다!
          </span>
        </div>
        <footer id="main-footer"></footer>
      </div>
    </>
  );
}

export default M5;
