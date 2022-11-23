import { Link } from "react-router-dom";
function M2() {
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
          <h2 class="sub_title">작품내용</h2>
          <div class="cc-all">
            <ul class="cc">
              <li>자신의 암호화폐 지갑을 통해 사이트 가입</li>
              <ul>
                <li>
                  개인의 암호화폐 지갑을 통해 사이트에 회원 가입과 로그인 가능.
                </li>
                <li>회원은 기부자 회원과 모금 단체(또는 개인)회원으로 구분.</li>
              </ul>
            </ul>
            <ul class="cc">
              <li>해양환경 캠페인 공고</li>
              <ul>
                <li>
                  모금 단체(또는 회원)은 캠페인에 대한 설명 등이 포함된 모금
                  게시물 작성.
                </li>
                <li>
                  게시물 작성 시 약관(기부금 사용 내역서, 활동 내역서 미제출 시
                  전액 환급 등)에 동의해야 함.
                </li>
                <li>
                  법적 계약서(기부금 사용 내역서, 활동 내역서 미제출 시 전액
                  환급 등)를 사이트에 제출.
                </li>
              </ul>
            </ul>
            <ul class="cc">
              <li>기부자들은 암호화폐를 기부해 참여</li>
              <ul>
                <li>자신이 원하는 해양환경 캠페인을 찾아서 기부할 수 있음.</li>
                <li>
                  전체 모금액에 자신이 얼마만큼 기여 했는지 확인할 수 있음.
                </li>
              </ul>
            </ul>
            <ul class="cc">
              <li>모금이 종료되면 환경사업 진행</li>
              <ul>
                <li>
                  모금이 종료되면 모금 단체(또는 회원)은 환경사업을 진행 함.
                </li>
                <li>모금액을 사용할 때마다 사용 내역서, 활동 내역서 제출</li>
              </ul>
            </ul>
          </div>
        </div>
        <footer id="main-footer"></footer>
      </div>
    </>
  );
}

export default M2;
