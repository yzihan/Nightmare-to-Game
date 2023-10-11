>Note: This project creates custom character cards (like Bang!) based on users' input. It's optimized for Chinese characters, and won't work for western languages out of box. (Might work for Japanese and Korean.) Therefore only Chinese instruction is provided here. 
>

## To Start
```bash
npm install
node automation.js
```

Place the JSON files containing images and character descriptions in the ./data/ directory. The image filenames must match the 'id' in the JSON files. Supported image formats include:
- png/PNG
- jpg/jpeg/JPG/JPEG

### Example
In the ./data/ directory, there are zhangsanfeng.json and zhangsanfeng.jpg. The content of the JSON file is as follows:

```

{
"id": "zhangsanfeng",
"clan": "Wudang",
"blood_number": "4",
"nickname": "Grandmaster",
"name": "Zhang Sanfeng",
"skills_group": [
{
"title": "Assault",
"description": "During the drawing phase, you can forgo drawing cards and, instead, draw one card from up to two (at least one) characters' hands."
},
{
"title": "Cavalry",
"description": "After targeting a character with [Slash], you can make a judgment. If the result is red, this [Slash] cannot be dodged."
}
]
}
```


