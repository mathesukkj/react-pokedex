import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    background-color: red;
    width: 20%;
    border-radius: 0.5rem;
    padding: 1rem;
    margin-bottom: 1rem;
    justify-content: space-between;

    > div {
        width: 30%;
    }

    img {
        width: 40%;
    }
`;

const Title = styled.h3`
    font-size: 1.1rem;
    font-family: Montserrat;
    color: white;
    margin-bottom: 1rem;
`;

const Types = styled.ul`
    color: #fefefe;
    font-weight: 600;
    font-family: Inter;
    font-size: 0.9rem;
    letter-spacing: 0.1px;

    li {
        list-style: none;
        width: 75%;
        padding: 0.1rem;
        margin-bottom: 0.5rem;
        text-align: center;
        border-radius: 1rem;
    }
`;

export default function PokemonItem({ name, url }) {
    const [data, setData] = useState([]);
    name = name.charAt(0).toUpperCase() + name.slice(1);

    const colorTypeMap = {
        normal: "#A8A77A",
        fire: "#EE8130",
        water: "#6390F0",
        electric: "#F7D02C",
        grass: "#6cda5c",
        ice: "#96D9D6",
        fighting: "#C22E28",
        poison: "#A33EA1",
        ground: "#E2BF65",
        flying: "#A98FF3",
        psychic: "#F95587",
        bug: "#A6B91A",
        rock: "#B6A136",
        ghost: "#735797",
        dragon: "#6F35FC",
        dark: "#705746",
        steel: "#B7B7CE",
        fairy: "#D685AD",
    };

    const colorPokeMap = {
        normal: "#7D7C5E",
        fire: "#B64D15",
        water: "#4D70B8",
        electric: "#C2A41C",
        grass: "#4AA543",
        ice: "#749C9A",
        fighting: "#931F1C",
        poison: "#812D7C",
        ground: "#A98E44",
        flying: "#8267D8",
        psychic: "#C73E68",
        bug: "#828D14",
        rock: "#8B7E2B",
        ghost: "#574A6F",
        dragon: "#5B2ECC",
        dark: "#4F3A33",
        steel: "#9292A9",
        fairy: "#AF5B83",
    };

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <Container
            style={{
                backgroundColor:
                    data.types && colorPokeMap[data.types[0].type.name],
            }}
        >
            <div>
                <Title>{name}</Title>
                <Types>
                    {data.types &&
                        data.types.map((item) => (
                            <li
                                style={{
                                    backgroundColor:
                                        colorTypeMap[item.type.name],
                                }}
                                key={item.type.name}
                            >
                                {item.type.name}
                            </li>
                        ))}
                </Types>
            </div>
            <img src={data.sprites && data.sprites.front_default} />
        </Container>
    );
}
