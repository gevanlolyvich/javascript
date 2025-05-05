function generateArray(n) {
    if (n < 0) {
        return [];
    }

    return [...generateArray(n-1), n];// memanggil dirinya sendiri
}

console.log(generateArray(5));