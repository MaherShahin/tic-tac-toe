const container = document.querySelector('.container');

function createDefaultGrid() {
    createRows(16);
    createCols(16);
}

function createRows(rowNum) {
    for (i=0; i<rowNum;i++){
        const row = document.createElement('div')
        row.className = 'row';
        container.appendChild(row);
    }
}

function createCols(colNum) {
    let rowNodeList = document.querySelectorAll('.row');
    for (r=0; r<rowNodeList.length; r++){
        for (c=0; c<colNum; c++){
            const box = document.createElement('div');
            box.className= 'box';
            const currentRow  = rowNodeList[r];
            currentRow.append(box);
        }
    }
}


    let boxNodeList = document.querySelectorAll('.box');
    for (i=0;i<boxNodeList.length;i++){
        let item = boxNodeList[i];
        item.addEventListener('click', function handleMouseOver(){
            item.className = 'box-black'
        })
    }

createDefaultGrid();

function clearGrid() {
    container.textContent = '';
}

container.addEventListener('mouseover', function(e) {
    if (e.target.matches('.box')) {
        e.target.classList.add('active');
    }
})

const reset = document.querySelector('.reset-btn')
reset.addEventListener('click', () => {
    clearGrid();
    createDefaultGrid();
} )

const newGridBtn = document.querySelector('.create-grid-btn');
newGridBtn.addEventListener('click', () => {
    let gridSize = prompt('What is the desired grid Size? i.e. x*x');
    clearGrid();
    createRows(gridSize);
    createCols(gridSize);
} )
