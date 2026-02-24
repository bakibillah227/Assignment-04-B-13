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

// Count update function
function updateJobCount() {
  const totalJobCountDisplay = document.querySelector(".total-job-badge");
  if (!totalJobCountDisplay) return;

  const totalCards = allCardSection.querySelectorAll(".jobCard").length;
  const filteredCards = filterSection.querySelectorAll(".jobCard").length;

  const isFilterActive = !filterSection.classList.contains("hidden");

  if (isFilterActive) {
    totalJobCountDisplay.innerText = `${filteredCards} of ${totalCards} Jobs`;
  } else {
    totalJobCountDisplay.innerText = `${totalCards} Jobs`;
  }
}

function calculateCount() {
  total.innerText = allCardSection.querySelectorAll(".jobCard").length;
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;
  updateJobCount();
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
  } else if (id == "all-filter-btn") {
    allCardSection.classList.remove("hidden");
    filterSection.classList.add("hidden");
  } else if (id == "rejected-filter-btn") {
    allCardSection.classList.add("hidden");
    filterSection.classList.remove("hidden");
    renderRejected();
  }
  updateJobCount();
}

mainContainer.addEventListener("click", function (event) {
  // Interview Button Logic
  if (event.target.classList.contains("interview-btn")) {
    const parentNode = event.target.parentNode.parentNode;
    const jobName = parentNode.querySelector(".jobName").innerText;
    const positionName = parentNode.querySelector(".positionName").innerText;
    const jobNature = parentNode.querySelector(".jobNature").innerText;
    const jobDetails = parentNode.querySelector(".jobDetails").innerText;

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

//  Delete Logic
document.addEventListener("click", function (event) {
  const deleteBtn = event.target.closest(".delete-btn");
  if (deleteBtn) {
    const jobCard = deleteBtn.closest(".jobCard");
    if (jobCard) {
      const jobTitle = jobCard.querySelector(".jobName").innerText;

      interviewList = interviewList.filter((item) => item.jobName !== jobTitle);
      rejectedList = rejectedList.filter((item) => item.jobName !== jobTitle);

      jobCard.remove();
      calculateCount();
    }
  }
});

// "No jobs available" HTML Variable preview
const emptyStateHTML = `
    <div class="text-center py-20 bg-white border-[#E5E7EB] rounded-lg border mx-auto mb-20">
        <div class="mx-auto flex justify-center mb-6 text-[#7DA8FF] text-8xl">
            <i class="fa-solid fa-file-lines"></i>
        </div>
        <h3 class="text-2xl font-semibold text-[#002C5C] mb-2">No jobs available</h3>
        <p class="text-[#64748B] text-lg">
            Check back soon for new job opportunities
        </p>
    </div>
`;

function renderInterview() {
  filterSection.innerHTML = "";

  // Checking if interview list is empty
  if (interviewList.length === 0) {
    filterSection.innerHTML = emptyStateHTML;
    return;
  }

  for (let interview of interviewList) {
    let div = document.createElement("div");
    div.className = "jobCard";
    div.innerHTML = `
        <div class="bg-white border border-gray-100 rounded-lg shadow-sm p-6 relative">
            <div class="absolute top-6 right-6">
              <button class="delete-btn p-2 text-gray-400 hover:text-red-500 border border-gray-100 rounded-full transition-colors">
                <i class="fa-regular fa-trash-can"></i>
              </button>
            </div>
            <div class="mb-4">
              <h2 class="jobName text-xl font-bold text-slate-800">${interview.jobName}</h2>
              <p class="positionName text-slate-500 font-medium">${interview.positionName}</p>
            </div>
            <span class="jobNature flex items-center gap-4 text-slate-400 text-sm mb-6">${interview.jobNature}</span>
            <div class="mb-6">
              <span class="jobCondition bg-blue-50 text-slate-700 text-xs font-bold px-3 py-1.5 rounded uppercase tracking-wider">${interview.jobCondition}</span>
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

  // Checking if rejected list is empty
  if (rejectedList.length === 0) {
    filterSection.innerHTML = emptyStateHTML;
    return;
  }

  for (let reject of rejectedList) {
    let div = document.createElement("div");
    div.className = "jobCard";
    div.innerHTML = `
        <div class="bg-white border border-gray-100 rounded-lg shadow-sm p-6 relative">
            <div class="absolute top-6 right-6">
              <button class="delete-btn p-2 text-gray-400 hover:text-red-500 border border-gray-100 rounded-full transition-colors">
                <i class="fa-regular fa-trash-can"></i>
              </button>
            </div>
            <div class="mb-4">
              <h2 class="jobName text-xl font-bold text-slate-800">${reject.jobName}</h2>
              <p class="positionName text-slate-500 font-medium">${reject.positionName}</p>
            </div>
            <span class="jobNature flex items-center gap-4 text-slate-400 text-sm mb-6">${reject.jobNature}</span>
            <div class="mb-6">
              <span class="jobCondition bg-blue-50 text-slate-700 text-xs font-bold px-3 py-1.5 rounded uppercase tracking-wider">${reject.jobCondition}</span>
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

function updateDashboard() {
  const totalJobs = document.querySelectorAll("#allCards .jobCard").length;
  document.getElementById("total-count").innerText = totalJobs;
  document.getElementById("interview-count").innerText = interviewList.length;
  document.getElementById("rejected-count").innerText = rejectedList.length;


}
