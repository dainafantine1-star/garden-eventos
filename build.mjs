import {mkdir,copyFile,cp} from 'node:fs/promises';
await mkdir('dist',{recursive:true});for(const f of ['index.html','style.css','script.js'])await copyFile(f,'dist/'+f);await cp('assets','dist/assets',{recursive:true});
