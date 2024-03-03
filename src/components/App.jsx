import episodes from "../data/episodes.json";
import { Footer } from "./Footer";
import { Greeting } from "./Greeting";
import { TVEpisode } from "./TVEpisode";
import { Fragment } from "react";
function Sum(props) {
    return (
        <p>
            {props.num1} + {props.num2}= {props.num1 + props.num2}
        </p>
    );
}

function MyHeader() {
    return (
        <header>
            <h1>Welcome to my first React app</h1>
        </header>
    );
}

export default function App() {
    return <div>Hello app</div>;
}

export function Demo1() {
    return (
        <Fragment>
            <MyHeader />

            <Greeting names={["dani", "bob", "ross", "huss"]} />
            <Greeting names={["a", "b", "c"]} />
            <Sum num1={100} num2={2010} />
            <Sum num1={39} num2={3} />
            <div className="episodesList">
                <TVEpisode episodeData={episodes[0]} />
                <TVEpisode episodeData={episodes[1]} />
                <TVEpisode episodeData={episodes[0]} />
                <TVEpisode episodeData={episodes[1]} />
                <TVEpisode episodeData={episodes[0]} />
                <TVEpisode episodeData={episodes[1]} />
            </div>
            <Footer />
        </Fragment>
    );
}
