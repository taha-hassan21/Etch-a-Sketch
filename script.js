const container=document.querySelector('#containerGrid');
const gridMaker=document.querySelector('#gridMaker');

function createGrid(size) {
    container.innerHTML='';
    const squareSize=960/size;
    for (let row=0;row<size;row++) {
        for (let col=0;col<size;col++) {
            const gridSquares=document.createElement('div');
            gridSquares.classList.add('squares');
            gridSquares.style.width=`${squareSize}px`;
            gridSquares.style.height=`${squareSize}px`;
            container.appendChild(gridSquares);
    
            gridSquares.addEventListener('mouseenter', ()=>{
                gridSquares.style.backgroundColor=getRandomColor();
            });
    
            // gridSquares.addEventListener('mouseleave', ()=>{
            //     gridSquares.style.backgroundColor='red';
            // });
        }
    }
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

gridMaker.addEventListener('click', ()=>{
    let gridLength;

    do {
        gridLength= +prompt("How many squares you want (1-100)", 16);
    }while (isNaN(gridLength) || gridLength<1 || gridLength >100);

    createGrid(gridLength);
});

createGrid(16);