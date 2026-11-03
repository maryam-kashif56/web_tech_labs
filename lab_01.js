
console.log("Task 01")

function addition(a, b) {
    return a + b;
}
console.log( addition(5, 10));


// TASK 2: Bitwise AND, OR, XOR
console.log("Task 02")

function bitwiseAND(a, b) {
    return a & b;
}
function bitwiseOR(a, b) {
    return a | b;
}
function bitwiseXOR(a, b) {
    return a ^ b;
}
console.log( bitwiseAND(5, 3));
console.log( bitwiseOR(5, 3));
console.log( bitwiseXOR(5, 3));


// TASK 3: Add Up Numbers

console.log("Task 03")

function addUp(a) {
    let sum = 0;
    for (let i = 1; i <= a; i++) {
        sum = sum + i;
    }
    return sum;
}
console.log( addUp(4));


// TASK 4: Progress Bar
console.log("Task 04")
function progressBar(a) {
    let filled = Math.floor(a / 10);
    let result = "";
    for (let i = 1; i <= 10; i++) {
        if (i <= filled) {
            result = result + "#";
        }
        else {
            result = result + "-";
        }

    }
    return result;
}
console.log(progressBar(10));


// TASK 5: Minimum and Maximum
console.log("Task 05")

function minMax(arr) {
    var min = arr[0];
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return [min, max];
}

console.log( minMax([1, 2, 3, 4, 5, 6]));


// TASK 6: Repository Statistics
console.log("Task 06")
function calculateRepoStats(repos) {
    let stars = repos.map(function(repo) {
        return repo.stars;
    });
    if (stars.length === 0) {
        return {
            maxStars: 0,
            minStars: 0,
            avgStars: 0,
            varianceScore: 0
        };
    }
    let maxStars = Math.max(stars);
    let minStars = Math.min(stars);
    let totalStars = stars.reduce(function(total, current) {
        return total + current;
    }, 0);
    let avgStars = Math.floor(totalStars / stars.length);
    let varianceScore = Math.abs(maxStars - minStars);
    return {
        maxStars: maxStars,
        minStars: minStars,
        avgStars: avgStars,
        varianceScore: varianceScore
    };
}
const repos = [
    { name: 'repo-a', stars: 12 },
    { name: 'repo-b', stars: 45 },
    { name: 'repo-c', stars: 3 }
];

console.log( calculateRepoStats(repos));


// TASK 7: Calculate Final Price
console.log("Task 07")

function calculateFinalPrice(basePrice, taxRate, discountPercentage) {
    var discountedPrice = basePrice * (1 - discountPercentage / 100);
    var finalCalculatedPrice = discountedPrice * (1 + taxRate / 100);
    var finalPrice = Math.round(finalCalculatedPrice * 100) / 100;
    var loyaltyPoints = Math.ceil(finalPrice);
    return {
        finalPrice: finalPrice,
        loyaltyPoints: loyaltyPoints
    };
}
console.log( calculateFinalPrice(1000, 10, 20));


// TASK 8: Pagination
console.log("Task 8")

function paginateData(items, pageNumber, pageSize = 5) {
    let totalPages = Math.ceil(items.length / pageSize);
    let currentPage = pageNumber;
    if (currentPage < 1) {
        currentPage = 1;
    }
    if (totalPages > 0 && currentPage > totalPages) {
        currentPage = totalPages;
    }
    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = startIndex + pageSize;
    let data = items.slice(startIndex, endIndex);
    return {
        data: data,
        currentPage: currentPage,
        totalPages: totalPages,
        hasNext: currentPage < totalPages,
        hasPrev: currentPage > 1 && totalPages > 0
    };
}
const allProducts = [
    'Laptop',
    'Mouse',
    'Keyboard',
    'Monitor',
    'Desk',
    'Chair',
    'Webcam',
    'Headphones'
];

const result = paginateData(allProducts, 2, 3);

console.log( result);
