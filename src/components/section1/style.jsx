import styled from 'styled-components'

export const Body = styled.section`
    background: #a1a1a1;
    text-align: center;
    padding: 80px 0 40px;

    h3{
        font-weight: 700;
    }

    p{
        width: 60%;
        margin: auto;
        padding: 1rem;

        @media only screen and (max-width: 1200px) {
            width: 90%;
        }
    }
`