// export async function getProducts(){
//     const res = await fetch('/data.json');
//     const data = await res.json()
//     return data;
// }

import fs from 'fs/promises';
import path from 'path';

export async function getProducts() {
    const filePath = path.join(process.cwd(), 'public', 'data.json');
    const file = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(file);
}