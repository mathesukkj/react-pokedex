import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 60%;
    background-color: white;
    margin: 0 auto;
    padding: 1rem 5rem;
    border-radius: 0 0 1rem 1rem;
`;

const Title = styled.h1`
    font-family: Inter, sans-serif;
    font-weight: 700;
`;

export default function Card(props) {
    return (
        <Container>
            <Title>Pokedex</Title>
            {props.children}
        </Container>
    );
}
