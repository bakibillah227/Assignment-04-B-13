let interviewList = [];
let rejectedList = [];

let total = document.getElementById("total-count");
let interviewCount = document.getElementById("interview-count");
let rejectedCount = document.getElementById("rejected-count");

const allCardSection = document.getElementById("allCards");
const mainContainer = document.querySelector("main");

const allFilterButton = document.getElementById("all-filter-btn");
const interviewFilterButton = document.getElementById("interview-filter-btn");
const rejectedFilterButton = document.getElementById("rejected-filter-btn");


function calculateCount() {
    total.innerText = allCardSection.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}

calculateCount();

function toggleStyle(id) {

    // adding bg white for all

    allFilterButton.classList.add('bg-white', 'text-slate-500', 'hover:bg-gray-50');
    interviewFilterButton.classList.add("bg-white", "text-slate-500", "hover:bg-gray-50");
    rejectedFilterButton.classList.add("bg-white", "text-slate-500", "hover:bg-gray-50");

    // if any button has blue bg then remove

    allFilterButton.classList.remove('bg-[#3B82F6]', 'text-white', 'hover:bg-blue-600');
    interviewFilterButton.classList.remove('bg-[#3B82F6]', 'text-white', 'hover:bg-blue-600');
    rejectedFilterButton.classList.remove('bg-[#3B82F6]', 'text-white', 'hover:bg-blue-600');

    const selected = document.getElementById(id);
    
    // adding blue bg for current button
    
    selected.classList.remove("bg-white", "text-slate-500", "hover:bg-gray-50");
    selected.classList.add("bg-[#3B82F6]", "text-white", "hover:bg-blue-600");
}