let scores = [35, 85, 92, 28, 47, 99, 60, 39, 74, 88];
let passCount = 0;

for (let i = 0; i < scores.length; i++) {
    if (scores[i] < 40) scores[i] += 20;
    if (scores[i] > 90) scores[i] = 90;
    if (scores[i] >= 50) passCount++;
}

console.log("Final adjusted scores:", scores);
console.log("Number of students who passed:", passCount);
