import styled from 'styled-components';

export default styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 700px;
  height: 600px;
  background-color: #e9ece5;
  margin: 50px auto 0;

  ul {
    display: flex;
    flex-flow: row wrap;
    width: 380px;
    padding: 10px;
    background-color: #3b3a36;
  }

  ul li {
    list-style: none;
    width: 55px;
    height: 55px;
    margin: 5px 4px;
    background-color: #b3c2bf;
    cursor: pointer;
  }

  ul li:hover {
    background-color: #e9ece5;
  }
`;
