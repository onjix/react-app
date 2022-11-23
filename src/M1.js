import { Link } from "react-router-dom";
function M1() {
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
          </div>
        </nav>
        <hr class="line"></hr>
        <div class="content">
          <h2 class="sub_title">개발동기</h2>
          <span class="write">
            우리나라 전국 해양쓰레기는 2020년 기준으로 약 13만8 천(톤)(출처 :
            해양수산부 통계 시스템)이 나왔다. 이렇게 매년 전국에서 나오는
            해양쓰레기 양이 엄청나게 많고 이로인해 해양오염이 가속화되고 있다.
            이와 반대로 해양 환경보호를 위해 힘쓰는 단체(OSEAN, GREENPEACE
            등)들이 있다. 하지만 이러한 단체들은 수가 적기도 하고 잘 알려지지도
            않는다. 이러한 단체들을 더 늘리고 사람들의 해양환경 보호에 더 관심을
            두도록 하고자 “푸른바다”를 제안하게 되었다.
          </span>
        </div>
        <footer id="main-footer"></footer>
      </div>
    </>
  );
}

export default M1;
