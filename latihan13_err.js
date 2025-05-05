//try catch
try {
    console.log('memulai');
    throw new Error('Error : program berhenti'); //memberikan sebuah error
    console.log('mengakhiri program'); //karena ada error diatas, ini akan diabaikan  
} catch {
    console.log('karena ada error, blok ini akan dieksekusi');
}

//finally
try {
    console.log('ini try block');
    throw new Error('Error : program berhenti'); //memberikan sebuah error
    console.log('mengakhiri program'); //karena ada error diatas, ini akan diabaikan  
} catch {
    console.log('catch block');
} finally {
    console.log('ini finally block');
}