function findMax(numbers){
    for(let i = 0; i < numbers.length; i++){
        let tallest = numbers[0];
        const index = i;
        const element = numbers[index]
        if(element > tallest){
           tallest = element;
           return tallest;
        }
    }
}
const heights = [165, 212, 123, 145, 156]
const tallest = findMax(heights);
console.log(tallest);