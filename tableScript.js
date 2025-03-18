document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("classForm");
    const tableBody = document.getElementById("classTable").getElementsByTagName("tbody")[0];
    
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const className = document.getElementById("className").value;
        const numPeople = document.getElementById("numPeople").value;
        const description = document.getElementById("description").value;
        
        const newRow = tableBody.insertRow();
        newRow.insertCell(0).textContent = className;
        newRow.insertCell(1).textContent = numPeople;
        newRow.insertCell(2).textContent = description;
        
        // Click event: Log row details and highlight the row
        newRow.addEventListener("click", function () {
            console.log(`Class: ${className}, People: ${numPeople}, Description: ${description}`);
            newRow.classList.toggle("highlight");
        });
        
        // Hover event: Change background color
        newRow.addEventListener("mouseover", function () {
            newRow.style.backgroundColor = "#a3a2a2";
        });
        newRow.addEventListener("mouseout", function () {
            newRow.style.backgroundColor = "";
        });
        
        form.reset();
    });
    
    // Focus event: Highlight input field
    const inputs = form.querySelectorAll("input, textarea");
    inputs.forEach(input => {
        input.addEventListener("focus", function () {
            input.style.borderColor = "blue";
        });
        input.addEventListener("blur", function () {
            input.style.borderColor = "";
        });
    });
});
//Tıklandığında satır silme
document.addEventListener('DOMContentLoaded', function() {
    const table = document.getElementById('classTable');

    table.addEventListener('click', function(event) {
        const target = event.target;
        if (target.tagName === 'TD') {
            const row = target.parentNode;
            row.parentNode.removeChild(row);
        }
    });
});


