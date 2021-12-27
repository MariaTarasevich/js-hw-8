let body = document.body;

let html = document.querySelector('html');
html.setAttribute('lang', 'en');
let title = document.createElement('title');
title.innerHTML= 'Layout';
let metaUtf8 = document.createElement('meta');
metaUtf8.setAttribute('charset', 'UTF-8');

document.head.appendChild(metaUtf8);
document.head.appendChild(title);


let app = document.createElement('div');
app.classList.add('app');

let headline = document.createElement('div');
headline.classList.add('header-wrapper');

let h1 = document.createElement('h1');
h1.innerHTML = 'Choose Your Option';
h1.classList.add('main-title');

let p1 = document.createElement('p');
p1.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
p1.classList.add('header-p');

let blocksWrap = document.createElement('div');
blocksWrap.classList.add('blocks-wrap');

let leftBlock = document.createElement('div');
leftBlock.classList.add('left-block','block_item')

let rightBlock = document.createElement('div');
rightBlock.classList.add('right-block','block_item')

let blockHighLine1 = document.createElement('p');
blockHighLine1.classList.add('block_high-line', 'left-high-line');
blockHighLine1.innerHTML = 'FREELANCER'

let blockHighLine2 = document.createElement('p');
blockHighLine2.classList.add('block_high-line', 'right-high-line');
blockHighLine2.innerHTML = 'STUDIO'

let blockHeadline = document.createElement('h3');
blockHeadline.classList.add('block_headline');
blockHeadline.innerHTML = 'Initially designed to';

let blockHeadline2 = blockHeadline.cloneNode(true);
blockHeadline2.classList.add('right_headline')

let blockP = document.createElement('p');
blockP.classList.add('block_p');
blockP.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';

let blockP2 = blockP.cloneNode(true);
blockP2.classList.add('block_p-right')

let button = document.createElement('button');
button.classList.add('button');
button.innerHTML = `<a class = "link">START HERE</a>`

let button2 = button.cloneNode(true)
button2.classList.add('button-right')


headline.appendChild(h1);
headline.appendChild(p1);
app.appendChild(headline);
app.appendChild(blocksWrap);
blocksWrap.appendChild(leftBlock);
blocksWrap.appendChild(rightBlock);
leftBlock.appendChild(blockHighLine1);
rightBlock.appendChild(blockHighLine2);
leftBlock.appendChild(blockHeadline);
rightBlock.appendChild(blockHeadline2)
leftBlock.appendChild(blockP);
rightBlock.appendChild(blockP2);
leftBlock.appendChild(button);
rightBlock.appendChild(button2);

document.body.appendChild(app);

let style = document.createElement('style');
style.innerHTML = `
    @import url('https://fonts.googleapis.com/css2?family=Arvo&family=Montserrat:wght@700&family=Open+Sans&display=swap');
    body {
        margin: 0;
        padding: 0;
    }
    .app {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .header-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 55px;
    }
    .main-title {
        margin: 0;
        font-weight:normal;
        font-family: Arvo;
    }
    .header-p {
        color: #9FA3A7;
        font-family: Open Sans;
    }
    .blocks-wrap {
        display: flex;
        border: 1px solid #E8E9ED;
        width: 800px;
        height: 480px;
    }
    .block_item {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 80px 95px;
    }
    .right-block {
        background-color: #8F75BE;
    }
    .block_high-line {
        font-size: 12px;
        font-weight: bold;
        text-transform: uppercase;
        font-family: Montserrat;
    }
    .left-high-line {
        color: #9FA3A7;
    }
    .right-high-line {
        color: #FFC80A;
    }
    .block_headline {
        font-size: 36px;
        font-family: Arvo;
        text-align: center;
        font-weight: normal;
        margin-bottom: 15px;
    }
    .right_headline {
        color: white;
    }
    .block_p {
        color: #9FA3A7;
        font-size: 12px;
        text-align: center;
        font-family: Open Sans;
    }
    .block_p-right {
        color: white;
    }
    .button {
        margin-top: 40px;
        height: 50px;
        width: 150px;
        color: black;
        font-size: 12px;
        font-weight: bold;
        font-family: Montserrat;
        border-radius: 30px;
        border: 3px solid  #FFC80A;
        background: none;
        cursor: pointer;
    }
    .button:hover{
        background: #FFC80A;
    }
    .button-right{
        color: white;
    }
`
document.head.appendChild(style)