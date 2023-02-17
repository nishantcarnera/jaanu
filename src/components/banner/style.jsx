import styled from 'styled-components'

export const Banner = styled.section`
    background: #3c3c3c;
    width: 100%;
    height: 55vh;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        object-fit: cover;
        border-radius: 50%;
        height: 130px;
        width: 130px;
        display: block;
        margin: auto;
      }
`

export const Text = styled.p`
      color: #fff;
      margin: 20px;
      text-decoration: underline;
      cursor: pointer;
      display: inline-block;
`;