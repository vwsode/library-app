import styled from "styled-components"

const BookInfoWrapper = styled.section`
    margin-top: 20px;
    width: 100%;
    `
const BookInfoHeader = styled.div`
    padding: 20px 30px;
    position: relative;
    width: 100%;
    height: 240px;
    overflow: hidden;
    border-radius: 20px;
    color: var(--color-white);
`

const BackgroundImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    background: ${(p => `url(${p.src}) center no-repeat`)};    
`

const ImageOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
`

const HeaderContent = styled.div`
    position: relative;
    z-index: 10;
`


const Title = styled.h1`
    font-size: 30px;
    font-weight: 600;
    text-transform: uppercase;
`

const Author = styled.span`
    font-size: 18px;
    text-transform: capitalize;
`



export { BookInfoWrapper, BookInfoHeader, BackgroundImage, ImageOverlay, HeaderContent, Title, Author }