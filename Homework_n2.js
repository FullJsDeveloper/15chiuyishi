console.clear()
function generate(rows) {
    if (rows <= 0) {
        return []
    }

    const result = [[1]]

    for (let c = 1; c < rows; c++) {
        const row = result[c - 1]
        const new_rows = [1]

        for (let i = 1; i < row.length; i++) {
            new_rows.push(row[i - 1] + row[i])
        }
        new_rows.push(1)
        result.push(new_rows)
    }
    return result
}
console.log(generate(4))