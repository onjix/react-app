import { Link } from "react-router-dom";
import picture from "./image/시스템구성도.png";
function M3() {
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
          <h2 class="sub_title">설계내용</h2>
          <ul>
            <li class="l_title">시스템 구성도</li>
          </ul>
          <img src={picture} width="800" heigth="400" alt="이미지" />
          <ul class="cc-all">
            <li>후원자는 자신이 원하는 캠페인에 암호화폐를 후원할 수 있다.</li>
            <li>기부단체는 후원 캠페인을 올려 후원자들의 후원을 받는다.</li>
            <li>
              캠페인을 등록하는 단체 또는 개인은 등록하기 전에 약관(기부금사용
              내역서, 확동 내역서 미제출 시 전액 환급 등)에 동의 및 법적계약서
              작성을 해야 한다.
            </li>
            <li>
              해양 환경보호 단체는 환경 캠페인을 등록하여 기부받아 해양 환경보호
              활동을 진행한다.
            </li>
            <li>
              환경보호 활동을 진행한 단체는 기부금 사용 내역서와 활동 내역서를
              공지한다.
            </li>
          </ul>
          <br></br>
          <ul>
            <li class="l_title">사용기술</li>
          </ul>
          <table class="f_table">
            <thead>
              <tr>
                <th scope="cols">기술</th>
                <th scope="cols">내용</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">solidity</th>
                <td>이더리움 기반 스마트계약 작성 언어</td>
              </tr>
              <tr>
                <th scope="row">ERC-20</th>
                <td>기부 전용 화폐 토큰</td>
              </tr>
              <tr>
                <th scope="row">REACT</th>
                <td>홈페이지 개발 및 Web3.js 라이브러리 연결</td>
              </tr>
              <tr>
                <th scope="row">Web3.js</th>
                <td>Javascript와 이더리움 네트워크 연결</td>
              </tr>
              <tr>
                <th scope="row">INFURA</th>
                <td>
                  원격으로 이더리움 노드에 접근할 수 있도록 엔드포인트를
                  제공해줌
                </td>
              </tr>
              <tr>
                <th scope="row">Gorli</th>
                <td>PoS 기반 이더리움 테스트 네트워크</td>
              </tr>
              <tr>
                <th scope="row">REMIX</th>
                <td>스마트 계약 작성, 테스트, 배포IDE</td>
              </tr>
              <tr>
                <th scope="row">METAMASK</th>
                <td>이더리움 블록체인과 상호작용하는 암호화폐 지갑</td>
              </tr>
              <tr>
                <th scope="row">MY SQL</th>
                <td>게시판 내용 저장</td>
              </tr>
            </tbody>
          </table>
        </div>
        <footer id="main-footer"></footer>
      </div>
    </>
  );
}

export default M3;
