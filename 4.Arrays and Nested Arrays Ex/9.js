function magicMatrix(matrix){
    let resultsRow = {
        0 : 0,
        1 : 0,
        2: 0,
    }
    let resultsCol = {
        0 : 0,
        1 : 0,
        2: 0,
    }
    for(let i = 0; i < matrix.length; i++){
        resultsRow[i] = matrix[i].reduce((acc, el) => acc + el)
        for(let col = 0; col < matrix.length; col++){
            resultsCol[i] += matrix[i][col]
        }
    }
    if(resultsRow[0] !== resultsRow[1] || resultsRow[0] !== resultsRow[2] || resultsCol[0] !== resultsCol[1] || resultsCol[0] !== resultsCol[2] || resultsCol[0] !== resultsCol[0]){
        return false
    }
    else{return true}
}
console.log(magicMatrix([[1, 0, 0], [0, 0, 1], [0, 1, 0]]))