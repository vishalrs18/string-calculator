function add(numbers) {
    if (numbers === "") {
        return 0;
    }

    let negatives = [];

    if (numbers.startsWith("//")) {
        const delimiterLineEnd = numbers.indexOf("\n");
        const delimiter = numbers.slice(2, delimiterLineEnd);
        numbers = numbers.slice(delimiterLineEnd + 1);
        numbers = numbers.split(delimiter).map(Number);
    } else {
        numbers = numbers.split(/,|\n/).map(Number);
    }

    numbers.forEach(num => {
        if (num < 0) {
            negatives.push(num);
        }
    });

    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed: ${negatives.join(', ')}`);
    }

    return numbers.reduce((sum, num) => sum + num, 0);
}
