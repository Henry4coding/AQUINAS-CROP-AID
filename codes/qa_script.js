function submitQuestion() {
    const question = document.getElementById("question").value;
    if (question.trim() === "") {
        alert("Please enter a question.");
        return;
    }
    // Placeholder: Simulate an AI response
    const simulatedAnswer = "This is a simulated answer. Detailed responses will be powered by AI.";
    document.getElementById("answer").innerHTML = `<h3>Your Question:</h3><p>${question}</p><h3>Answer:</h3><p>${simulatedAnswer}</p>`;
}
