function add(numbers) {
    if (numbers === "") {
        return 0;
    }

    // Split by comma and sum the numbers
    return numbers.split(',').map(Number).reduce((sum, num) => sum + num, 0);
}
