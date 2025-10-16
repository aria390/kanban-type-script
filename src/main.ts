import "./style.css";

const newTaskAddEl = document.getElementById("newTaskAdd") as HTMLButtonElement;
const hiddenBgEl = document.getElementById("modalNewTask") as HTMLDivElement;
const backdropEl = document.getElementById("backdrop") as HTMLDivElement;
const makeNewTaskBtnEl = document.getElementById(
  "makeNewTaskBtn"
) as HTMLButtonElement;
const titleEl = document.getElementById("title") as HTMLInputElement;
const DescriptionEl = document.getElementById(
  "Description"
) as HTMLTextAreaElement;
const selectStatusEL = document.getElementById(
  "selectStatus"
) as HTMLSelectElement;
const TodoEl = document.getElementById("Todo") as HTMLDivElement;
const DoingEl = document.getElementById("Doing") as HTMLDivElement;
const DoneEl = document.getElementById("Done") as HTMLDivElement;

newTaskAddEl.addEventListener("click", () => {
  hiddenBgEl.classList.toggle("hidden-bg");
  backdropEl.classList.toggle("hidden-bg");
});
makeNewTaskBtnEl.addEventListener("click", () => {
  const titleInput = titleEl.value;
  const DescriptionInput = DescriptionEl.value;
  const selectStatusInput = selectStatusEL.value;
  console.log(titleInput, selectStatusInput, DescriptionInput);
  if (selectStatusInput === "TODO") {
    TodoEl.innerHTML += `
          <div class="flex flex-col w-90 gap-6 rounded pb-8 border-gray-400">
            <div
              class="h-33 w-full flex flex-col bg-white p-6 hover:opacity-20 cursor-pointer rounded-lg shadow-md text-left"
            >
              <span class="text-lg font-bold p-2"
                >${titleInput}</span
              >
              <span class="text-[#9ca3af] p-2 text-xs font-bold"
                >${DescriptionInput}</span
              >
            </div>
          </div>
    `;
  } else if (selectStatusInput === "DOING") {
    DoingEl.innerHTML += `
    <div class="flex flex-col w-90 gap-6 rounded pb-8 border-gray-400">
            <div
              class="h-33 w-full flex flex-col bg-white p-6 hover:opacity-20 cursor-pointer rounded-lg shadow-md text-left"
            >
              <span class="text-lg font-bold p-2"
                >${titleInput}</span
              >
              <span class="text-[#9ca3af] p-2 text-xs font-bold"
                >${DescriptionInput}</span
              >
            </div>
          </div>
    `;
  } else if (selectStatusInput === "DONE") {
    DoneEl.innerHTML += `
    <div class="flex flex-col w-90 gap-6 rounded pb-8 border-gray-400">
            <div
              class="h-33 w-full flex flex-col bg-white p-6 hover:opacity-20 cursor-pointer rounded-lg shadow-md text-left"
            >
              <span class="text-lg font-bold p-2"
                >${titleInput}</span
              >
              <span class="text-[#9ca3af] p-2 text-xs font-bold"
                >${DescriptionInput}</span
              >
            </div>
          </div>
    `;
  }

  hiddenBgEl.classList.add("hidden-bg");
  backdropEl.classList.add("hidden-bg");
});
