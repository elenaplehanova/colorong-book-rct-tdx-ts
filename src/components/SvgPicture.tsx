import { useEffect, useState } from "react";
import styled from "styled-components";
import { ReactComponent as Monkey } from "../assets/Monkey.svg";

const Container = styled.div`
    width: 100%;
    @media (min-width: 35em) {
        width: 31.5rem;
    }
    aspect-ratio: 1;
`;
interface IPictureSize {
    width: string;
    height: string;
}
interface SvgProps {
    size: IPictureSize;
}

const Svg = styled.svg<SvgProps>`
    ${({ size }) => {
        let scale = 1;
        let translateX = "0px";
        let swgWidth = Number(size.width);

        let containerWidth = document.querySelector("#svg_container")?.clientWidth;
        if (containerWidth) {
            scale = containerWidth / swgWidth;
            translateX = `${(containerWidth - swgWidth) / scale / 2}px`;
        }

        return `transform: scale(${scale}) translate(${translateX},${translateX})`;
    }}
`;

const SvgPicture = () => {
    const [pictureSize, setPictureSize] = useState<IPictureSize>({
        width: "100",
        height: "100",
    });

    useEffect(() => {
        const newPictureSize = document.querySelector("#svg_picture")?.getAttribute("viewBox");
        if (newPictureSize) {
            setPictureSize({
                width: newPictureSize.split(" ")[2],
                height: newPictureSize.split(" ")[3],
            });
        }
    }, []);

    const [pictureDs, setPictureDs] = useState<string[]>([]);
    useEffect(() => {
        const picturePaths = document.querySelectorAll("#svg_picture g g path");
        picturePaths.forEach((item) => {
            let d = item.getAttribute("d") as string;
            if (d !== null) {
                setPictureDs((prevState) => [...prevState, d]);
            }
        });
    }, []);

    return (
        <Container id="svg_container">
            <Monkey id="svg_picture" width="0" height="0"></Monkey>

            <Svg size={pictureSize} width={pictureSize.width} height={pictureSize.height}>
                {pictureDs.map((d, index) => {
                    return (
                        <path
                            key={index}
                            d={d}
                            strokeWidth="0"
                            stroke="black"
                            // onClick={() => onFill(index)}
                            fill="white"
                        />
                    );
                })}
            </Svg>
        </Container>
    );
};

export default SvgPicture;
