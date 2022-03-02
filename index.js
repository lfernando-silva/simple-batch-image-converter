const dotenv = require('dotenv');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs/promises');
const Promise = require('bluebird');

dotenv.config();

const inputPath = path.join(__dirname, 'data');
const outputPath = path.join(__dirname, 'output');
const inputFormat = process.env.CONVERT_FROM;
const outputFormat = process.env.CONVERT_TO;

function convertOne(file){
    const filePath = path.join(inputPath, file);
    const outputFilePath = path.join(outputPath, file.replace(inputFormat,outputFormat));
    return sharp(filePath)
        .webp({ lossless: true })
        .toFile(outputFilePath);
}

async function convertMultiple(){
    const files = (await fs.readdir(inputPath)).filter(e => e.endsWith(inputFormat));
    return Promise.each(files, async (file, index) => {
        console.log(`Converting ${index+1} of ${files.length}`)
        await convertOne(file);
    });
}

convertMultiple();
