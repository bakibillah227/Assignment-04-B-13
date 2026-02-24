let interviewList = [];
let rejectedList = [];
let currentStatus = "all";

let total = document.getElementById("total-count");
let interviewCount = document.getElementById("interview-count");
let rejectedCount = document.getElementById("rejected-count");

const allCardSection = document.getElementById("allCards");
const mainContainer = document.querySelector("main");
const filterSection = document.getElementById("filtered-section");

const allFilterButton = document.getElementById("all-filter-btn");
const interviewFilterButton = document.getElementById("interview-filter-btn");
const rejectedFilterButton = document.getElementById("rejected-filter-btn");

function calculateCount() {
  total.innerText = allCardSection.querySelectorAll(".jobCard").length;
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;
}

calculateCount();

function toggleStyle(id) {
  // adding bg white for all
  allFilterButton.classList.add(
    "bg-white",
    "text-slate-500",
    "hover:bg-gray-50",
  );
  interviewFilterButton.classList.add(
    "bg-white",
    "text-slate-500",
    "hover:bg-gray-50",
  );
  rejectedFilterButton.classList.add(
    "bg-white",
    "text-slate-500",
    "hover:bg-gray-50",
  );

  // if any button has blue bg then remove
  allFilterButton.classList.remove(
    "bg-[#3B82F6]",
    "text-white",
    "hover:bg-blue-600",
  );
  interviewFilterButton.classList.remove(
    "bg-[#3B82F6]",
    "text-white",
    "hover:bg-blue-600",
  );
  rejectedFilterButton.classList.remove(
    "bg-[#3B82F6]",
    "text-white",
    "hover:bg-blue-600",
  );

  const selected = document.getElementById(id);
  currentStatus = id;

  // adding blue bg for current button
  selected.classList.remove("bg-white", "text-slate-500", "hover:bg-gray-50");
  selected.classList.add("bg-[#3B82F6]", "text-white", "hover:bg-blue-600");

  if (id == "interview-filter-btn") {
    allCardSection.classList.add("hidden");
    filterSection.classList.remove("hidden");
    renderInterview(); 
  }
  else if (id == "all-filter-btn") {
    allCardSection.classList.remove("hidden");
    filterSection.classList.add("hidden");
  }
  else if (id == "rejected-filter-btn") {
    allCardSection.classList.add("hidden");
    filterSection.classList.remove("hidden");
    renderRejected();
  }
}

mainContainer.addEventListener("click", function (event) {
  // Interview Button Logic
  if (event.target.classList.contains("interview-btn")) {
    const parentNode = event.target.parentNode.parentNode;

    const jobName = parentNode.querySelector(".jobName").innerText;
    const positionName = parentNode.querySelector(".positionName").innerText;
    const jobNature = parentNode.querySelector(".jobNature").innerText;
    const jobDetails = parentNode.querySelector(".jobDetails").innerText;

    // All section status update
    parentNode.querySelector(".jobCondition").innerText = "Interviewed";

    const cardInfo = {
      jobName,
      positionName,
      jobNature,
      jobCondition: "Interviewed",
      jobDetails,
    };

    const jobExist = interviewList.find(
      (item) => item.jobName == cardInfo.jobName,
    );
    if (!jobExist) {
      interviewList.push(cardInfo);
    }

    rejectedList = rejectedList.filter(
      (item) => item.jobName != cardInfo.jobName,
    );

    calculateCount();
    if (currentStatus == "interview-filter-btn") renderInterview();
    if (currentStatus == "rejected-filter-btn") renderRejected();
  }

  // Rejected Button Logic
  else if (event.target.classList.contains("rejected-btn")) {
    const parentNode = event.target.parentNode.parentNode;

    const jobName = parentNode.querySelector(".jobName").innerText;
    const positionName = parentNode.querySelector(".positionName").innerText;
    const jobNature = parentNode.querySelector(".jobNature").innerText;
    const jobDetails = parentNode.querySelector(".jobDetails").innerText;

    // All section status update
    parentNode.querySelector(".jobCondition").innerText = "Rejected";

    const cardInfo = {
      jobName,
      positionName,
      jobNature,
      jobCondition: "Rejected",
      jobDetails,
    };

    const jobExist = rejectedList.find(
      (item) => item.jobName == cardInfo.jobName,
    );
    if (!jobExist) {
      rejectedList.push(cardInfo);
    }

    interviewList = interviewList.filter(
      (item) => item.jobName != cardInfo.jobName,
    );

    calculateCount();

    if (currentStatus == "interview-filter-btn") renderInterview();
    if (currentStatus == "rejected-filter-btn") renderRejected();
  }
});

function renderInterview() {
  filterSection.innerHTML = "";
  for (let interview of interviewList) {
    let div = document.createElement("div");
    div.className = "jobCard";
    div.innerHTML = `
        <div class="bg-white border border-gray-100 rounded-lg shadow-sm p-6 relative">
            <div class="absolute top-6 right-6">
              <button class="p-2 text-gray-400 hover:text-red-500 border border-gray-100 rounded-full transition-colors">
                <i class="fa-regular fa-trash-can"></i>
              </button>
            </div>
            <div class="mb-4">
              <h2 class="jobName text-xl font-bold text-slate-800">${interview.jobName}</h2>
              <p class="positionName text-slate-500 font-medium">${interview.positionName}</p>
            </div>
            <span class="jobNature flex items-center gap-4 text-slate-400 text-sm mb-6">${interview.jobNature}</span>
            <div class="mb-6">
              <span class="jobCondition bg-blue-50 text-slate-700 text-xs font-bold px-3 py-1.5 rounded uppercase tracking-wider">
                ${interview.jobCondition}
              </span>
            </div>
            <p class="jobDetails text-slate-600 text-sm mb-8 leading-relaxed">${interview.jobDetails}</p>
            <div class="flex gap-3">
              <button class="interview-btn border-2 border-emerald-400 text-emerald-500 font-bold px-5 py-2 rounded-lg text-sm hover:bg-emerald-50 transition-colors uppercase tracking-wide">Interview</button>
              <button class="rejected-btn border-2 border-red-300 text-red-400 font-bold px-5 py-2 rounded-lg text-sm hover:bg-red-50 transition-colors uppercase tracking-wide">Rejected</button>
            </div>
        </div>`;
    filterSection.appendChild(div);
  }
}

function renderRejected() {
  filterSection.innerHTML = "";
  for (let reject of rejectedList) {
    let div = document.createElement("div");
    div.className = "jobCard";
    div.innerHTML = `
        <div class="bg-white border border-gray-100 rounded-lg shadow-sm p-6 relative">
            <div class="absolute top-6 right-6">
              <button class="p-2 text-gray-400 hover:text-red-500 border border-gray-100 rounded-full transition-colors">
                <i class="fa-regular fa-trash-can"></i>
              </button>
            </div>
            <div class="mb-4">
              <h2 class="jobName text-xl font-bold text-slate-800">${reject.jobName}</h2>
              <p class="positionName text-slate-500 font-medium">${reject.positionName}</p>
            </div>
            <span class="jobNature flex items-center gap-4 text-slate-400 text-sm mb-6">${reject.jobNature}</span>
            <div class="mb-6">
              <span class="jobCondition bg-blue-50 text-slate-700 text-xs font-bold px-3 py-1.5 rounded uppercase tracking-wider">
                ${reject.jobCondition}
              </span>
            </div>
            <p class="jobDetails text-slate-600 text-sm mb-8 leading-relaxed">${reject.jobDetails}</p>
            <div class="flex gap-3">
              <button class="interview-btn border-2 border-emerald-400 text-emerald-500 font-bold px-5 py-2 rounded-lg text-sm hover:bg-emerald-50 transition-colors uppercase tracking-wide">Interview</button>
              <button class="rejected-btn border-2 border-red-300 text-red-400 font-bold px-5 py-2 rounded-lg text-sm hover:bg-red-50 transition-colors uppercase tracking-wide">Rejected</button>
            </div>
        </div>`;
    filterSection.appendChild(div);
  }
}
