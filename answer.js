let submit_but = document.getElementById("text");
let ans = `
def calculate_average(numbers):
    if not numbers:  # Check if the list is empty
        return "No numbers provided"
    total = sum(numbers)
    avg = total / len(numbers)
    return avg

data = [10, 20, 30, 40]
result = calculate_average(data)
print("The average is: " + str(result))
`;

document.getElementById("but").addEventListener("click", function() {
    if (ans.trim() === submit_but.value.trim()) {
        window.location.href = "https://forms.gle/Nt5FB4Zkg9Fzoffo9"  
    }   
});
