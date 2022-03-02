Simple Batch Image Converter

1. Put the images to be converted in the folder `/data`
2. Create a `.env` file and pass the image formats as variables (without the `.`).
Example:

```
CONVERT_FROM=svg
CONVERT_TO=webp
```

3. Run the script `index.js`

```
$ node index.js
```

4. Once the convertion is done, the files will be in the folder `/output`