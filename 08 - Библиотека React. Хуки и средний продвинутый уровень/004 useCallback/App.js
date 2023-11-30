import { Component, useState, useEffect, useCallback, useMemo } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';

const countTotal = (num) => {
    console.log('counting...');
    return num + 10;
}

const Slider = (props) => {
    const [slide, setSlide] = useState(0);
    const [autoplay, setAutoplay] = useState(false);

    const getSomeImages = useCallback(() => {
        console.log('fetching');
        return ["https://img2.joyreactor.cc/pics/post/%D0%B7%D0%B0%D0%BA%D0%B0%D1%82-%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D0%BE-%D0%BC%D0%BE%D1%80%D0%B5-%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%8B%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-4678200.jpeg", "https://img2.joyreactor.cc/pics/comment/%D0%B7%D0%B0%D0%BA%D0%B0%D1%82-%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D0%BE-%D0%BC%D0%BE%D1%80%D0%B5-%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%8B%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-3089361.jpeg"]
    }, []);


    return (
        <Container>
            <div className="slider w-50 m-auto">
                <Slide getSomeImages={getSomeImages} />

                <div className="text-center mt-5">Active slide {slide} <br />{autoplay ? 'auto' : null} </div>
                <div style={style} className="text-center mt-5">Total slides: {total}</div>
                <div className="buttons mt-3">
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(-1)}>-1</button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(1)}>+1</button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={toggleAutoplay}>toggle autoplay</button>
                </div>
            </div>
        </Container>
    )
}

const Slide = ({ getSomeImages }) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        setImages(getSomeImages())
    }, [getSomeImages])

    return (
        <>
            {images.map((url, i) => <img key={i} className="d-block w-100" src={url} alt="slide" />)}
        </>
    )
}


function App() {
    const [slider, setSlider] = useState(true);


    return (
        <>
            <button onClick={() => setSlider(false)}>Click</button>
            {slider ? <Slider /> : null}
        </>
    );
}

export default App;
