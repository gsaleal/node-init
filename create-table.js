import { sql } from './db.js'


sql`
CREATE TABLE videos (
    id TEXT,
    title TEXT,
    description TEXT,
    duration INTEGER NOT NULL
);
`.then(() => {
    console.log('Table created')
})