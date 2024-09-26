import { randomUUID } from "crypto";
import { sql } from "./db.js";

export class DatabasePostgres {
    //somente visualizavel dentro da classe #
    #videos = new Map();

    async list(search = '') {
        return await sql`select * from videos where title like ${'%' + search + '%'} order by title`;
    }

    async create(video) {
        const { title, description, duration } = video;
        const videoId = randomUUID();
        await sql`insert into videos values(${videoId}, ${title}, ${description}, ${duration})`;
    }

    async update(id, video) {
        const { title, description, duration } = video;
        await sql`update videos set title = ${title}, description = ${description}, duration = ${duration} where id = ${id}`;
    }

    async delete(id) {
       await sql`delete from videos where id = ${id}`;
    }
}
