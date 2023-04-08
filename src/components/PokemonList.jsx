import React, { useEffect, useState } from "react";
import PokemonItem from "./PokemonItem";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export default function PokemonList() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=16")
            .then((res) => res.json())
            .then((data) => setData(data.results))
            .catch((err) => console.log(err));
    }, []);

    return (
        <Container>
            {data.map((item) => (
                <PokemonItem key={item.name} name={item.name} url={item.url} />
            ))}
        </Container>
    );
}
