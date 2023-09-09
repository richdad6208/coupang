import styled from "styled-components";
export const PrimaryHeader = styled.header`
  display: flex;
  flex-wrap: wrap;
  h1 {
    display: flex;
    align-items: center;
    padding: 0.7em;
    img {
      width: 170px;
    }
  }
  .search-wrapper {
    display: flex;
    gap: 10px;
    align-items: center;
    border: 2px solid dodgerblue;
    font-size: 14px;
    select,
    input {
      padding: 0.7em 0.5em;
      border: none;
    }
    input {
      width: 300px;
      border-left: 1px solid lightgray;
      &:focus {
        outline: none;
      }
    }
    .iconInSearch {
      padding: 0.6em 0.4em;
      cursor: pointer;
    }
  }
  .right-icon-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 1em;
    font-size: 13px;
    word-break: keep-all;
    & > img {
      width: 30px;
      aspect-ratio: 1;
    }
  }
`;

export const Category = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  background: dodgerblue;
  color: white;
  font-size: 13px;
  width: 110px;
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WrapperWithOutCategory = styled.div`
  display: flex;
  flex-direction: column;
  .up-wrapper {
    display: flex;
  }
`;

export const Snb = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: gray;
  flex-shirink: 0;
  flex-basis: 100%;
  background: whitesmoke;
  box-shadow: -10rem 0 0 0 whitesmoke, 10rem 0 0 0 whitesmoke;
  ul {
    display: flex;
    li {
      padding: 0.7em;
    }
  }
`;

export const GnbNavigationWrapper = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  padding-inline: 1em;
  word-break: keep-all;
  & > div {
    width: 20px;
  }
  nav {
    width: 830px;
    overflow: hidden;
  }
  ul {
    display: flex;
    gap: 20px;
    li {
      display: flex;
      align-items: center;
      gap: 5px;
      font-size: 12px;
      div {
        width: 20px;
      }
      p {
        width: max-content;
      }
      span {
        width: 12px;
        margin-left: -2px;
      }
    }
  }
`;
