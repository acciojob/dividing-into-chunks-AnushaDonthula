document.getElementById('divideButton').addEventListener('click', function() {
    const arrayInput = document.getElementById('arrayInput').value;
    const maxSum = parseInt(document.getElementById('maxSum').value);
    const resultDiv = document.getElementById('result');
    
    // Parse the array input
    const arr = arrayInput.split(',').map(num => parseInt(num.trim()));
    
    // Divide into chunks function
    function divideIntoChunks(arr, n) {
        const result = [];
        let currentChunk = [];
        let currentSum = 0;
        
        for (const num of arr) {
            if (currentSum + num <= n) {
                currentChunk.push(num);
                currentSum += num;
            } else {
                if (currentChunk.length) {
                    result.push(currentChunk);
                }
                currentChunk = [num];
                currentSum = num;
            }
        }
        
        if (currentChunk.length) {
            result.push(currentChunk);
        }
        
        return result;
    }
    
    // Calculate the chunks
    const chunks = divideIntoChunks(arr, maxSum);
    
    // Display the result
    resultDiv.innerHTML = chunks.map(chunk => `<p>[${chunk.join(', ')}]</p>`).join('');
});
