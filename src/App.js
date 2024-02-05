import {Simpsons} from "./components/Simpsons/Simpsons";
import {Characters} from "./components/RickAndMorty/Characters";

const App = () => {
    return (
        <div>
            <Simpsons/>
            <hr/>
            <Characters/>
        </div>
    );
};

export {App};