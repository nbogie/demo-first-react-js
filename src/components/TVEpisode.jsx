import { generateEpisodeCode, makeImageOrDefault } from "../episodeUtils";

export function TVEpisode(props) {
    const episodeCode = generateEpisodeCode(props.episodeData);

    const { name, image, summary } = props.episodeData;

    const imageOrDefault = makeImageOrDefault(image);

    return (
        <div className="episode">
            <h2>
                {name} - {episodeCode}
            </h2>
            {imageOrDefault}
            <div>{summary}</div>
        </div>
    );
}
