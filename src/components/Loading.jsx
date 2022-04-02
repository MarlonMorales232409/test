import { css } from "@emotion/react";
import BounceLoader from "react-spinners/BounceLoader";
import styled from "styled-components"

// Loadder basic styles 
export const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export const Loading = () => {
    return (
        <LoaderContainer>
            <BounceLoader color={"#007bff"} css={override} size={150} />
        </LoaderContainer>
    );
};

// Styles (Gradient Loading Styles)

const LoaderContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items:center;
    background: rgb(244,244,244);
    background: -moz-linear-gradient(199deg, rgba(244,244,244,1) 0%, rgba(242,242,242,1) 35%, rgba(0,212,255,0.42200630252100846) 100%);
    background: -webkit-linear-gradient(199deg, rgba(244,244,244,1) 0%, rgba(242,242,242,1) 35%, rgba(0,212,255,0.42200630252100846) 100%);
    background: linear-gradient(199deg, rgba(244,244,244,1) 0%, rgba(242,242,242,1) 35%, rgba(0,212,255,0.42200630252100846) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#f4f4f4",endColorstr="#00d4ff",GradientType=1);
`