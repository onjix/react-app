import { Link } from "react-router-dom";
import display1 from "./image/화면1.png";
import display2 from "./image/화면2.png";
import display3 from "./image/화면3.png";
function M4() {
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
          <h2 class="sub_title">결과 및 기대효과</h2>
          <ul>
            <li class="l_title">서비스 사진</li>
            <img src={display1} width="280" heigth="500" alt="이미지" />
            <img src={display2} width="290" heigth="500" alt="이미지" />
            <img src={display3} width="290" heigth="500" alt="이미지" />
            <br></br>
            <br></br>
            <li class="l_title">결과</li>
            <ul class="cc-all">
              <li>
                블록체인 기술을 이용해 해양 환경보호를 위한 기부를 하거나 기부를
                받을 수 있는 플랫폼인 "BlueSea"을 개발하였다.
              </li>
              <li>
                블록체인 기술을 통해 후원자는 자신이 원하는 캠페인에 기부를 할
                수 있다.
              </li>
              <li>
                캠페인을 등록하는 단체 또는 개인은 후원자들에게 후원받을 수
                있다.
              </li>
              <li>
                후원자들은 자신이 기부한 금액을 블록체인 기술을 통해 투명하게
                확인할 수 있다.
              </li>
            </ul>
            <br></br>
            <br></br>
            <li class="l_title">기대효과</li>
            <ul class="cc-all">
              <li>젊은 세대의 해양 환경문제 인식 강화</li>
              <li>해양 환경보호 단체 증가</li>
              <li>
                추후 해양환경 관련 정부 기관과 연계하여 기부단계부터 기부금 집행
                후 결과까지 모든 과정이 투명하게 이용자들에 의해 관리되는 플랫폼
                서비스 기대
              </li>
              <li>추후 기부자들에게 특전 제공(NFT 등)</li>
            </ul>
          </ul>
        </div>
        <footer id="main-footer"></footer>
      </div>
    </>
  );
}

export default M4;
