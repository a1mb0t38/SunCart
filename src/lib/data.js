import fs from 'fs/promises';
import path from 'path';

export async function getProducts(){
    const res = path.join(process.cwd(), 'public', 'data.json')
    const data = await fs.readFile(res, 'utf-8')
    return JSON.parse(data);
}
