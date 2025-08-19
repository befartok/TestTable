const CONTENT1 =
        [
            ['Подтема 1.1', 'Некий текст, привязанный к Подтеме 1.1'],
            ['Подтема 1.2', 'Некий текст, привязанный к Подтеме 1.2'],
            ['Подтема 1.3', 'Некий текст, привязанный к Подтеме 1.3']
        ],
        CONTENT2 =
        [
            ['Подтема 2.1', 'Некий текст, привязанный к Подтеме 2.1'],
            ['Подтема 2.2', 'Некий текст, привязанный к Подтеме 2.2'],
            ['Подтема 2.3', 'Некий текст, привязанный к Подтеме 2.3']
        ];

const table = document.getElementById('myTable');
let activeTheme = 'theme1';

//заполнение по умолчанию столбца подтем
for (let i = 1; i < 4; i++) {
    row = table.rows[i];
    cell = row.cells[1];
    cell.innerHTML = CONTENT1[i - 1][0];
}

//заполнение по умолчанию ячейки с содержимым
row = table.rows[1];
cell = row.cells[2];
cell.innerHTML = CONTENT1[0][1];

table.addEventListener('click', function (event) {
    const cellId = event.target.id;
    clicksDetection(cellId);
});

function clicksDetection(cellId) {

    let cellsNum;
    switch (cellId) {

        case 'theme1':
            activeTheme = 'theme1';
            fillSubthemesSell(CONTENT1);
            fillThemesBackgroundColor();
            break;

        case 'theme2':
            activeTheme = 'theme2';
            fillSubthemesSell(CONTENT2);
            fillThemesBackgroundColor();
            break;

        case 'subtheme1':
            cellsNum = 0;
            fillSubthemesContentSell(activeTheme, cellsNum);
            fillSubthemesBackgroundColor();
            break;

        case 'subtheme2':
            cellsNum = 1;
            fillSubthemesContentSell(activeTheme, cellsNum);
            fillSubthemesBackgroundColor();
            break;

        case 'subtheme3':
            cellsNum = 2;
            fillSubthemesContentSell(activeTheme, cellsNum);
            fillSubthemesBackgroundColor();
            break;
    }
}

function fillThemesBackgroundColor() {
    theme1.style.backgroundColor = '';
    theme2.style.backgroundColor = '';
    subtheme1.style.backgroundColor = '';
    subtheme2.style.backgroundColor = '';
    subtheme3.style.backgroundColor = '';
    event.target.style.backgroundColor = 'yellow';
}

function fillSubthemesBackgroundColor() {
    subtheme1.style.backgroundColor = '';
    subtheme2.style.backgroundColor = '';
    subtheme3.style.backgroundColor = '';
    event.target.style.backgroundColor = 'yellow';
}


function fillSubthemesSell(content) {
//заполнение столбца подтем
    for (let i = 1; i < 4; i++) {
        row = table.rows[i];
        cell = row.cells[1];
        cell.innerHTML = content[i - 1][0];

        //заполнение ячейки с содержимым для первой субтемы.
        subthemesContent.innerHTML = content[0][1];
    }
}

//заполнение ячейки с содержимым
function fillSubthemesContentSell(activeTheme, i) {
    let content;
    
    if (activeTheme === 'theme1') {
        content = CONTENT1;
    } else
        content = CONTENT2;

    subthemesContent.innerHTML = content[i][1];
}
