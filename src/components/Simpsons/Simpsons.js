import {Simpson} from "./Simpson";

const Simpsons = () => {
    const simpsons = [
        {
            name: 'Homer',
            img: 'https://static.wikia.nocookie.net/simpsons/images/b/bd/Homer_Simpson.png'
        },
        {
            name: 'Marge',
            img: 'https://static.wikia.nocookie.net/simpsons/images/4/4d/MargeSimpson.png'
        },
        {
            name: 'Bart',
            img: 'https://static.wikia.nocookie.net/simpsons/images/6/65/Bart_Simpson.png'
        },
        {
            name: 'Lisa',
            img: 'https://static.wikia.nocookie.net/simpsons/images/d/d5/Lisa_Simpson_official.png'
        },
        {
            name: 'Maggie',
            img: 'https://static.wikia.nocookie.net/simpsons/images/9/9d/Maggie_Simpson.png'
        },
    ]

    return (
        <div>
            {simpsons.map((simpson, index) => <Simpson key={index} simpson={simpson}/>)}
        </div>
    );
};

export {Simpsons};