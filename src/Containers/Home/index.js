import React, { useState, useRef } from 'react';
import Burguer from '../../assets/burguerHome.svg';

import axios from "axios";

import { Container, Image, ContainerItens, H1, InputLabel, Input, Button, Order } from './styles';




const App = () => {

    const [orders, setOrders] = useState([]);
    const InputClientName = useRef();
    const Inputpedidos = useRef();

    async function addNewOrder() {

        const { data: newOrder } = await axios.post("http://localhost:3001/order", {
            ClientName: InputClientName.current.value,
            pedidos: Inputpedidos.current.value
        })
        setOrders([...orders, newOrder]);

    }



    return (
        <Container>
            < Image alt="logo-imagem" src={Burguer} />
            <ContainerItens>
                <H1>Faça seu pedido!</H1>

                <InputLabel>Nome do cliente</InputLabel>
                <Input ref={InputClientName}></Input>

                <InputLabel>Pedido</InputLabel>
                <Input ref={Inputpedidos} ></Input>



                <ul>
                    {orders.map((order) => (
                        <Order key={order.id}>
                            <p>{order.ClientName}</p><p>{order.pedidos}</p>



                        </Order>
                    ))}
                </ul>

                <Button onClick={addNewOrder}>Novo pedido</Button>
            </ContainerItens>

        </Container>
    );
}








export default App