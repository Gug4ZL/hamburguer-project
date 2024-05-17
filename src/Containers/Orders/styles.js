import styled from "styled-components";

export const Container = styled.div`
 background: rgba(10, 10, 16, 1);

 display: flex;
 flex-direction: column;
 align-items: center;
 gap: 40px;
 `


export const ContainerItens = styled.div`
 background: rgba(10, 10, 16, 1);

 display: flex;
 flex-direction: column;
 gap: 30px;
 `


export const H1 = styled.h1`
font-size: 36px;
font-weight: 700;
text-align: center;
margin-top: -7px;

color: rgba(238, 238, 238, 1);
 `

export const Image = styled.img`
 width: 342px;
 height: 354px;

`

export const Button = styled.button`
width: 342px;
height: 68px;
border: none;
outline: none;

margin-top: 50px;

color:rgba(238, 238, 238, 1);
background: rgba(217, 56, 86, 1);

cursor: pointer;`

export const Order = styled.li`
display: flex;
justify-content: space-around;
margin-top: 20px;
flex-direction: column-reverse;

width: 342px;
height: 86px;
padding: 15px 20px 15px 25px;
border-radius: 14px;   
margin-bottom: 34px;

background: #FFFFFF40;
box-shadow: 0px 4px 4px 0px #00000040;

border: none;
outline: none;

p{
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 28px;

    color: #ffffff;
}

`

