import styled from "styled-components";

const PrimaryHeader = styled.header`
  background: silver;
  height: 100px;
`;

function Header() {
  return (
    <>
      <PrimaryHeader>
        <div>카테고리</div>
        <h1>
          <img src="./images/logo.png" alt="" />
        </h1>
        <input type="text" placeholder="찾고 싶은 상품을 검색해 보세요!" />
      </PrimaryHeader>
    </>
  );
}

export default Header;
