import { createClient } from 'contentful';

interface fieldsData {
    body: string,
    description: string,
    publishDate: string,
    title: ""

}

const client = createClient({
    space: 'cthqv4jheukp',
    accessToken: 'oJcJEUN_KPUQWiap4WRAlveuHLGqMazIaIXy2YHZ1t8',
})


export async function contentSample() {
    const {items} =  await client.getEntries();

    const posts = items.map(i => i.fields);
    return posts;
}
