function fibonacci(n) {
    const result = [];
    for (let i = 0; i <= n; i++) {
        if (i <= 1) {
          result.push(i); // Kasus dasar: fibonacci(0) = 0 dan fibonacci(1) = 1
        } else {
          result.push(result[i - 1] + result[i - 2]); // Menambahkan angka Fibonacci ke dalam array
        }
    }
    return result;
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
