function padify(n) {
    return n.toString().padStart(2, "0");
}
export function generateEpisodeCode(episode) {
    return "S" + padify(episode.season) + "E" + padify(episode.number);
}

export function makeImageOrDefault(image) {
    if (image && image.medium) {
        return <img src={image.medium} />;
    } else {
        return <img src="https://via.placeholder.com/300x200" />;
    }
}
