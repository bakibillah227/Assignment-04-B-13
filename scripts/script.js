let interviewList = [];
let rejectedList = [];

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
  total.innerText = allCardSection.children.length;
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

  // adding blue bg for current button

  selected.classList.remove("bg-white", "text-slate-500", "hover:bg-gray-50");
    selected.classList.add("bg-[#3B82F6]", "text-white", "hover:bg-blue-600");
    
    if (id == 'interview-filter-btn') {
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
    }
    else if (id == 'all-filter-btn') {
        allCardSection.classList.remove('hidden');
        filterSection.classList.add("hidden");
    }
}

mainContainer.addEventListener("click", function (event) {
    console.log(event.target.classList.contains("interview-btn"));

  if (event.target.classList.contains("interview-btn")) {
    const parentNode = event.target.parentNode.parentNode;

    const jobName = parentNode.querySelector(".jobName").innerText;
    const positionName = parentNode.querySelector(".positionName").innerText;
    const jobNature = parentNode.querySelector(".jobNature").innerText;
    const jobCondition = parentNode.querySelector(".jobCondition").innerText;
    const jobDetails = parentNode.querySelector(".jobDetails").innerText;

    const cardInfo = {
      jobName,
      positionName,
      jobNature,
      jobCondition,
      jobDetails,
    };

    const jobExist = interviewList.find(
      (item) => item.jobName == cardInfo.jobName,
      );
      parentNode.querySelector('.jobCondition').innerText = "Interview";

    if (!jobExist) {
      interviewList.push(cardInfo);
    }

    renderInterview();
  }
});

function renderInterview() {
  filterSection.innerHTML = "";

  for (let interview of interviewList) {
    console.log(interview);

    let div = document.createElement("div");
    div.className = "jobCard";
      div.innerHTML = `
        <div
            class="bg-white border border-gray-100 rounded-lg shadow-sm p-6 relative"
          >
            <div class="absolute top-6 right-6">
              <button
                class="p-2 text-gray-400 hover:text-red-500 border border-gray-100 rounded-full transition-colors"
              >
                <i class="fa-regular fa-trash-can"></i>
              </button>
            </div>

            <div class="mb-4">
              <h2 class="jobName text-xl font-bold text-slate-800">
                ${interview.jobName}
              </h2>
              <p class="positionName text-slate-500 font-medium">React Native Developer</p>
            </div>

            <div class="jobNature flex items-center gap-2 text-slate-400 text-sm mb-6">
              <span>Remote</span>
              <span>•</span>
              <span>Full-time</span>
              <span>•</span>
              <span>$130,000 - $175,000</span>
            </div>

            <div class="mb-6">
              <span
                class="jobCondition bg-blue-50 text-slate-700 text-xs font-bold px-3 py-1.5 rounded uppercase tracking-wider"
              >
                Not Applied
              </span>
            </div>

            <p class="jobDetails text-slate-600 text-sm mb-8 leading-relaxed">
              Build cross-platform mobile applications using React Native. Work
              on products used by millions of users worldwide.
            </p>

            <div class="flex gap-3">
              <button
                class="border-2 border-emerald-400 text-emerald-500 font-bold px-5 py-2 rounded-lg text-sm hover:bg-emerald-50 transition-colors uppercase tracking-wide"
              >
                Interview
              </button>
              <button
                class="border-2 border-red-300 text-red-400 font-bold px-5 py-2 rounded-lg text-sm hover:bg-red-50 transition-colors uppercase tracking-wide"
              >
                Rejected
              </button>
            </div>
          </div>
        `;
      filterSection.appendChild(div);
  }
}
