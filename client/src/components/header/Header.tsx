import {
  Category,
  GnbNavigationWrapper,
  InputWrapper,
  PrimaryHeader,
  Snb,
  WrapperWithOutCategory,
} from "../../style/header";

function Header() {
  return (
    <>
      <PrimaryHeader>
        <Snb>
          <nav>
            <ul>
              <li>즐겨찾기</li>
              <li>입점신청▼</li>
            </ul>
          </nav>
          <nav>
            <ul>
              <li>로그인</li>
              <li>회원가입</li>
              <li>고객센터</li>
            </ul>
          </nav>
        </Snb>
        <Category>
          <img src="./images/icon-hamburger.png" alt="" />
          카테고리
        </Category>
        <WrapperWithOutCategory>
          <div className="up-wrapper">
            <h1>
              <img src="./images/logo.png" alt="" />
            </h1>
            <InputWrapper>
              <div className="search-wrapper">
                <select>
                  <option value="">전체</option>
                  <option value="">여성패션</option>
                  <option value="">남성패션</option>
                  <option value="">남녀 공용 의류</option>
                  <option value="">유아동 패션</option>
                  <option value="">뷰티</option>
                  <option value="">출산/유아동</option>
                </select>
                <input
                  type="text"
                  placeholder="찾고 싶은 상품을 검색해 보세요!"
                />
                <div className="iconInSearch">
                  <img src="./images/icon-mike.png" alt="" />
                </div>
                <div className="iconInSearch">
                  <img src="./images/icon-zoom.png" alt="" />
                </div>
              </div>
            </InputWrapper>
            <div className="right-icon-wrapper">
              <img src="./images/icon-account.png" alt="" />
              <p>마이쿠팡</p>
            </div>
            <div className="right-icon-wrapper">
              <img src="./images/icon-cart.png" alt="" />
              <p>마이쿠팡</p>
            </div>
          </div>
          <GnbNavigationWrapper>
            <div>
              <img src="./images/icon-left-arr.png" alt="" />
            </div>
            <nav>
              <ul>
                <li>
                  <div>
                    <img src="./images/gnb-menu-item01.png" alt="" />
                  </div>
                  <p>로켓배송</p>
                </li>
                <li>
                  <div>
                    <img src="./images/gnb-menu-item02.png" alt="" />
                  </div>
                  <p>로켓프레시</p>
                  <span>
                    <img src="./images/icon-new.png" alt="" />
                  </span>
                </li>
                <li>
                  <div>
                    <img src="./images/gnb-menu-item03.png" alt="" />
                  </div>
                  <p>2023 추석</p>
                  <span>
                    <img src="./images/icon-new.png" alt="" />
                  </span>
                </li>
                <li>
                  <div>
                    <img src="./images/gnb-menu-item04.png" alt="" />
                  </div>
                  <p>쿠팡비즈</p>
                  <span>
                    <img src="./images/icon-new.png" alt="" />
                  </span>
                </li>
                <li>
                  <div>
                    <img src="./images/gnb-menu-item05.png" alt="" />
                  </div>
                  <p>로켓직구</p>
                </li>
                <li>
                  <p>골드박스</p>
                </li>
                <li>
                  <p>와우회원할인</p>
                </li>
                <li>
                  <p>이벤트/쿠폰</p>
                </li>
                <li>
                  <div>
                    <img src="./images/gnb-menu-item06.png" alt="" />
                  </div>
                  <p>반품마켓</p>
                </li>
                <li>
                  <div>
                    <img src="./images/gnb-menu-item07.png" alt="" />
                  </div>
                  <p>착한상점</p>
                  <span>
                    <img src="./images/icon-new.png" alt="" />
                  </span>
                </li>
                <li>
                  <p>기획전</p>
                </li>
                <li>
                  <div>
                    <img src="./images/gnb-menu-item08.png" alt="" />
                  </div>
                  <p>여행/티켓</p>
                  <span>
                    <img src="./images/icon-new.png" alt="" />
                  </span>
                </li>
              </ul>
            </nav>
            <div>
              <img src="./images/icon-right-arr.png" alt="" />
            </div>
          </GnbNavigationWrapper>
        </WrapperWithOutCategory>
      </PrimaryHeader>
    </>
  );
}

export default Header;
