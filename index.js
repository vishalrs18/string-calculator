function add(numbers) {
    if (numbers === "") {
        return 0;
    }

    let negatives = [];

    const numArray = numbers.split(/,|\n/).map(Number);

    numArray.forEach(num => {
        if (num < 0) {
            negatives.push(num);
        }
    });

    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed: ${negatives.join(', ')}`);
    }

    return numArray.reduce((sum, num) => sum + num, 0);
}
