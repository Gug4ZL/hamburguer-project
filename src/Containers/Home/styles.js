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


export const InputLabel = styled.p`
font-size: 18px;
font-weight: 700;
line-height: 22px;

color: rgba(238, 238, 238, 1);
margin-bottom: -27px;
margin-left: 10px;

`


export const Input = styled.input`
width: 342px;
height: 58px;
border-radius: 14px;
padding: 15px 20px 15px 25px;

border: none;
outline: none;

background-color: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
color: rgba(238, 238, 238, 1);

`


export const Button = styled.button`
width: 342px;
height: 68px;
border: none;
outline: none;

margin-top: 50px;

color:rgba(238, 238, 238, 1);
background: rgba(217, 56, 86, 1);

cursor: pointer;

transition: .3s ease-in-out;    


&:hover{
    background: linear-gradient(79deg, rgba(0,0,0,1) 0%, rgba(217,56,86,1) 0%, rgba(128,0,0,1) 77%);
 
}
`

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
}`




