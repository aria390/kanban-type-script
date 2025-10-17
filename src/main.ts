import type { AnymatchFn } from "vite";
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
const changeColorEl = document.getElementById("changeColor") as HTMLDivElement;
const circleEL = document.getElementById("circle") as HTMLDivElement;
const todoCountEl = document.getElementById("todoCount") as HTMLSpanElement;
const doingCountEl = document.getElementById("doingCount") as HTMLSpanElement;
const doneCountEL = document.getElementById("doneCount") as HTMLSpanElement;
const todoArray: {
  titleInput: string;
  DescriptionInput: string;
  status: string;
}[][] = [];

let countOne = 1;
let countTwo = 1;
let countThree = 1;

const json = localStorage.getItem("Todoist");
const arr = json ? JSON.parse(json) : todoArray;

console.log(arr);

arr.forEach((innerArray: any[]) => {
  innerArray.forEach((item) => {
    if (item && typeof item === "object") {
      const title = item.titleInput ?? "";
      const description = item.DescriptionInput ?? "";
      const status = item.status ?? "";

      if (status == "TODO") {
        TodoEl.innerHTML += `
          <div class="flex flex-col w-90 gap-6 rounded pb-8 border-gray-400">
            <div
              class="h-33 w-full dark:bg-[#2b2c37] flex flex-col bg-white p-6 hover:opacity-20 cursor-pointer rounded-lg shadow-md text-left"
            >
              <span class="text-lg font-bold p-2 dark:text-white"
                >${title}</span
              >
              <span class="text-[#9ca3af] p-2 text-xs font-bold"
                >${description}</span
              >
            </div>
          </div> `;
      } else if (status == "DOING") {
        DoingEl.innerHTML += `
          <div class="flex flex-col w-90 gap-6 rounded pb-8 border-gray-400">
            <div
              class="h-33 w-full dark:bg-[#2b2c37] flex flex-col bg-white p-6 hover:opacity-20 cursor-pointer rounded-lg shadow-md text-left"
            >
              <span class="text-lg font-bold p-2 dark:text-white"
                >${title}</span
              >
              <span class="text-[#9ca3af] p-2 text-xs font-bold"
                >${description}</span
              >
            </div>
          </div> `;
      } else if (status == "DONE") {
        DoneEl.innerHTML += `
          <div class="flex flex-col w-90 gap-6 rounded pb-8 border-gray-400">
            <div
              class="h-33 w-full dark:bg-[#2b2c37] flex flex-col bg-white p-6 hover:opacity-20 cursor-pointer rounded-lg shadow-md text-left"
            >
              <span class="text-lg font-bold p-2 dark:text-white"
                >${title}</span
              >
              <span class="text-[#9ca3af] p-2 text-xs font-bold"
                >${description}</span
              >
            </div>
          </div> `;
      }
    } else {
      console.warn("Unexpected item in inner array:", item);
    }
  });
});

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
    countOne++;
    todoCountEl.innerHTML = `TODO (${countOne})`;

    todoArray.push([
      {
        titleInput: titleInput,
        DescriptionInput: DescriptionInput,
        status: "TODO",
      },
    ]);

    localStorage.setItem("Todoist", JSON.stringify(todoArray));

    TodoEl.innerHTML += `
          <div class="flex flex-col w-90 gap-6 rounded pb-8 border-gray-400">
            <div
              class="h-33 w-full dark:bg-[#2b2c37] flex flex-col bg-white p-6 hover:opacity-20 cursor-pointer rounded-lg shadow-md text-left"
            >
              <span class="text-lg font-bold p-2 dark:text-white"
                >${titleInput}</span
              >
              <span class="text-[#9ca3af] p-2 text-xs font-bold"
                >${DescriptionInput}</span
              >
            </div>
          </div>
    `;
  } else if (selectStatusInput === "DOING") {
    countTwo++;
    doingCountEl.innerHTML = `DOING(${countTwo})`;

    todoArray.push([
      {
        titleInput: titleInput,
        DescriptionInput: DescriptionInput,
        status: "DOING",
      },
    ]);

    localStorage.setItem("Todoist", JSON.stringify(todoArray));

    DoingEl.innerHTML += `
    <div class="flex flex-col w-90 gap-6 rounded pb-8 border-gray-400">
            <div
              class="h-33 w-full dark:bg-[#2b2c37] flex flex-col bg-white p-6 hover:opacity-20 cursor-pointer rounded-lg shadow-md text-left"
            >
              <span class="text-lg font-bold p-2 dark:text-white"
                >${titleInput}</span
              >
              <span class="text-[#9ca3af] p-2 text-xs font-bold"
                >${DescriptionInput}</span
              >
            </div>
          </div>
    `;
  } else if (selectStatusInput === "DONE") {
    countThree++;
    doneCountEL.innerHTML = `DONE(${countThree})`;
    todoArray.push([
      {
        titleInput: titleInput,
        DescriptionInput: DescriptionInput,
        status: "DONE",
      },
    ]);

    localStorage.setItem("Todoist", JSON.stringify(todoArray));
    DoneEl.innerHTML += `
    <div class="flex flex-col w-90 gap-6 rounded pb-8 border-gray-400">
            <div
              class="h-33 w-full dark:bg-[#2b2c37] flex flex-col bg-white p-6 hover:opacity-20 cursor-pointer rounded-lg shadow-md text-left"
            >
              <span class="text-lg font-bold p-2 dark:text-white"
                >${titleInput}</span
              >
              <span class="text-[#9ca3af] p-2 text-xs font-bold"
                >${DescriptionInput}</span
              >
            </div>
          </div>
    `;
  }
  titleEl.value = "";
  DescriptionEl.value = "";
  selectStatusEL.value = "";

  hiddenBgEl.classList.add("hidden-bg");
  backdropEl.classList.add("hidden-bg");
});

backdropEl.addEventListener("click", () => {
  titleEl.value = "";
  DescriptionEl.value = "";
  selectStatusEL.value = "";
  hiddenBgEl.classList.toggle("hidden-bg");
  backdropEl.classList.toggle("hidden-bg");
});
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    titleEl.value = "";
    DescriptionEl.value = "";
    selectStatusEL.value = "";
    hiddenBgEl.classList.add("hidden-bg");
    backdropEl.classList.add("hidden-bg");
  }
});

changeColorEl.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  circleEL.classList.toggle("move");
});

circleEL.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  circleEL.classList.toggle("move");
});
