export const questionType = {
    mcq: 'MCQ',
    codeItOut: 'CODE_IT_OUT'
}

export const questions = {
    1: {
        type: questionType.mcq, 
        description: "Among these ancient scrolls lies the key to thy kingdom’s prosperity. One scroll reveals the gold earned from sales, another the goods in thy inventory, and a third the cost of thy provisions. Which scroll dost thou choose to guide thy rule?",
        question: "Select the page that belongs to retail, which holds sales data, inventory data etc., with specific Distributor view.",
        options: ["good", "bad", "ugly"], 
        answer: "2"
    },
    2: {
        type: questionType.mcq, 
        description: "As thy subjects wander the market seeking thy finest wares, they find none upon the shelves. Which scroll dost thou consult to uncover why thy goods are not available to the people—sales, inventory, or cost?",
        question: "Select the page where you can find the search keywords performance",
        options: ["pink", "blue", "green"], 
        answer: "1"
    },
}

// const questions = [
//     {
//         type: questionType.mcq, 
//         leftText: "Among these ancient scrolls lies the key to thy kingdom’s prosperity. One scroll reveals the gold earned from sales, another the goods in thy inventory, and a third the cost of thy provisions. Which scroll dost thou choose to guide thy rule?",
//         rightText: "Select the page that belongs to retail, which holds sales data, inventory data etc., with specific Distributor view.",
//         options: ["good", "bad", "ugly"], 
//         answer: "2"
//     }
// ]