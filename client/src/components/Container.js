import styled from "@emotion/styled";

const Container = styled.div`
  #home,
  #about,
  #register,
  #error {
    margin-top: 80px;
    padding: 0 80px;
    position: absolute;
    width: 100%;

    .hero {
      font-family: "Libre Baskerville", serif;
      font-size: 45px;
      font-weight: bold;
      margin: 60px 0 50px 0;
    }

    h4 {
      font-size: 20px;
      margin-bottom: 20px;
      width: 60%;
    }
  }

  .italic {
    font-style: italic;
  }

  #about,
  #register,
  #error {
    background-color: #e2e6e5;
    padding-bottom: 50px;

    ol {
      list-style-type: decimal;
      padding: 0 20px;
      margin-bottom: 80px;
      font-size: 20px;

      li {
        padding-left: 20px;
        margin-bottom: 20px;
      }
    }

    mark {
      background: #5cffa0;
      border-radius: 3px;
      padding: 0px 3px;
    }

    .href {
      color: #00ab6b;
      border-bottom: 2px solid #e2e6e5;
      transition: all 0.3s;

      :hover {
        border-bottom: 2px solid #00ab6b;
      }
    }
  }

  #error {
    height: 89.2vh;
  }
`;

export default Container;
