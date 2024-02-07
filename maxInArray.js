function findMax(numbers){
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const elements = numbers[index]
        console.log(elements);
    }
}
const heights = [165, 212, 123, 145, 156]
const tallest = findMax(heights);
console.log(tallest);