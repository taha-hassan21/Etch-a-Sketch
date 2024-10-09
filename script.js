const container=document.querySelector('#containerGrid');

for (let row=0;row<16;row++) {
    for (let col=0;col<16;col++) {
        const gridSquares=document.createElement('div');
        gridSquares.classList.toggle('squares');
        container.appendChild(gridSquares);
    }
}
