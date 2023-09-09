import {
  Category,
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
          <div className="down-wrapper">메뉴</div>
        </WrapperWithOutCategory>
      </PrimaryHeader>
    </>
  );
}

export default Header;
