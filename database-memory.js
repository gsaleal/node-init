import { randomUUID } from "crypto";

export class DatabaseMemory {
    //somente visualizavel dentro da classe #
    #videos = new Map();

    list(search) {
        return Array.from(this.#videos.entries()).map((videoArray) => {
            const id = videoArray[0];
            const data = videoArray[1];
            return {
                id,
                ... data,
            }
        }).filter(video => {
            if(search) {
                return video.title.includes(search);
            }
            return true;
        });
    }

    create(videos) {
        const videoId = randomUUID();
        this.#videos.set(videoId, videos);
    }

    update(id, video) {
        this.#videos.set(id, video);
    }

    delete(id) {
        this.#videos.delete(id);
    }
}
