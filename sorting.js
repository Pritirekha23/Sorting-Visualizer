// swaping values
function swap(el1, el2) {
  let temp = el1.style.height;
  el1.style.height = el2.style.height;
  el2.style.height = temp;
}


// Insertion sort
async function insertion() {
    const ele = document.querySelectorAll(".bar"); 
    // color
    ele[0].style.background = "linear-gradient(316deg, #4062bb 0%, #5200ae 74%)"; //initial color before sorting
    for (let i = 1; i < ele.length; i++) {
      let j = i - 1;
      let selected = ele[i].style.height; 
      ele[i].style.background =
        "linear-gradient(315deg, #f9d29d 0%, #ffd8cb 74%)"; //Changes the background color to visualize the comparison phase 
  
      while (j > -1 && parseInt(ele[j].style.height) > parseInt(selected)) {
        ele[j].style.background =
          "linear-gradient(315deg, #f9d29d 0%, #ffd8cb 74%)";
        ele[j + 1].style.height = ele[j].style.height;
        j--;
        await insertDelay(delay);
        for (let k = i; k >= 0; k--) {
          ele[k].style.background =
            "linear-gradient(316deg, #4062bb 0%, #5200ae 74%)";
        }
      }
      ele[j + 1].style.height = selected;
      ele[i].style.background =
        "linear-gradient(316deg, #4062bb 0%, #5200ae 74%)";
    }
    enableSortingBtn()
  }




// bubble sort

async function bubble() {
  disableSortingBtn();
  const ele = document.querySelectorAll(".bar");
  for (let i = 0; i < ele.length - 1; i++) {
    for (let j = 0; j < ele.length - i - 1; j++) {
      ele[j].style.background =
        "linear-gradient(315deg, #f9d29d 0%, #ffd8cb 74%)";
      ele[j + 1].style.background =
        "linear-gradient(315deg, #f9d29d 0%, #ffd8cb 74%)";
      if (parseInt(ele[j].style.height) > parseInt(ele[j + 1].style.height)) {
        await insertDelay(delay);
        swap(ele[j], ele[j + 1]);
      }
      ele[j].style.background =
        "linear-gradient(315deg, #00bfb2 0%, #028090 74%)";
      ele[j + 1].style.background =
        "linear-gradient(315deg, #00bfb2 0%, #028090 74%)";
    }
    ele[ele.length - 1 - i].style.background =
      "linear-gradient(316deg, #4062bb 0%, #5200ae 74%)";
  }
  ele[0].style.background = "linear-gradient(316deg, #4062bb 0%, #5200ae 74%)";
  enableSortingBtn()
}

function insertDelay(milisec) {
  disableSortingBtn();
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, milisec);
  });
}

//selection sort
async function selection() {
  disableSortingBtn();
  //console.log('sel');
  const ele = document.querySelectorAll(".bar");
  for (let i = 0; i < ele.length; i++) {
    let min_index = i;

    ele[i].style.background =
      "linear-gradient(315deg, #fbb034 0%, #ffdd00 74%)";
    for (let j = i + 1; j < ele.length; j++) {
      ele[j].style.background =
        "linear-gradient(315deg, #f9d29d 0%, #ffd8cb 74%)";

      await insertDelay(delay);
      if (
        parseInt(ele[j].style.height) < parseInt(ele[min_index].style.height)
      ) {
        if (min_index !== i) {
          ele[min_index].style.background =
            "linear-gradient(315deg, #00bfb2 0%, #028090 74%)";
        }
        min_index = j;
      } else {
        ele[j].style.background =
          "linear-gradient(315deg, #00bfb2 0%, #028090 74%)";
      }
    }
    await insertDelay(delay);
    swap(ele[min_index], ele[i]);
    // change the min element index back to normal as it is swapped
    ele[min_index].style.background =
    "linear-gradient(315deg, #ff6392 0%, #ff7e5f 74%)"; // Change sorted elements color to pink
    ele[i].style.background =
    "linear-gradient(316deg, #ff6392 0%, #ff7e5f 74%)"; 
  }
  enableSortingBtn()
}

//quicksort
async function quickSort() {
  disableSortingBtn();
  const bars = document.querySelectorAll(".bar");
  await performQuickSort(bars, 0, bars.length - 1);
  enableSortingBtn();
}
async function performQuickSort(bars, low, high) {
  if (low < high) {
      let pivot = await partition(bars, low, high);
      await performQuickSort(bars, low, pivot - 1);
      await performQuickSort(bars, pivot + 1, high);
  }
}
async function partition(bars, low, high) {
  let pivot = parseInt(bars[high].style.height);
  bars[high].style.background = "linear-gradient(316deg, #f9d29d 0%, #ffd8cb 74%)";
  let i = low - 1;

  for (let j = low; j < high; j++) {
      bars[j].style.background = "linear-gradient(315deg, #fbb034 0%, #ffdd00 74%)";
      await insertDelay(delay);
      if (parseInt(bars[j].style.height) < pivot) {
          i++;
          swap(bars[i], bars[j]);
      }
      bars[j].style.background = "linear-gradient(315deg, #00bfb2 0%, #028090 74%)";
  }
  swap(bars[i + 1], bars[high]);
  bars[high].style.background = "linear-gradient(315deg, #00bfb2 0%, #028090 74%)";
  return i + 1;
}


//merger sort
async function mergeSort() {
  disableSortingBtn();
  const bars = document.querySelectorAll(".bar");
  await performMergeSort(bars, 0, bars.length - 1);
  enableSortingBtn();
}

async function performMergeSort(bars, low, high) {
  if (low < high) {
      const mid = Math.floor((low + high) / 2);
      await performMergeSort(bars, low, mid);
      await performMergeSort(bars, mid + 1, high);
      await merge(bars, low, mid, high);
  }
}

async function merge(bars, low, mid, high) {
  const left = [];
  const right = [];

  for (let i = low; i <= mid; i++) {
      left.push(parseInt(bars[i].style.height));
      bars[i].style.background = "linear-gradient(315deg, #fbb034 0%, #ffdd00 74%)";
      await insertDelay(delay);
  }

  for (let i = mid + 1; i <= high; i++) {
      right.push(parseInt(bars[i].style.height));
      bars[i].style.background = "linear-gradient(315deg, #fbb034 0%, #ffdd00 74%)";
      await insertDelay(delay);
  }

  let i = 0,
      j = 0,
      k = low;

  while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
          bars[k].style.height = `${left[i]}px`;
          i++;
      } else {
          bars[k].style.height = `${right[j]}px`;
          j++;
      }
      k++;
      await insertDelay(delay);
  }

  while (i < left.length) {
      bars[k].style.height = `${left[i]}px`;
      i++;
      k++;
      await insertDelay(delay);
  }

  while (j < right.length) {
      bars[k].style.height = `${right[j]}px`;
      j++;
      k++;
      await insertDelay(delay);
  }

  for (let i = low; i <= high; i++) {
      bars[i].style.background = "linear-gradient(315deg, #00bfb2 0%, #028090 74%)";
  }
}



function disableSortingBtn(){
  document.querySelector("#bubbleSort").disabled = true;
  document.querySelector("#insertionSort").disabled = true;
  document.querySelector("#mergeSort").disabled = true;
  document.querySelector("#quickSort").disabled = true;
  document.querySelector("#selectionSort").disabled = true;
}


function enableSortingBtn(){
  document.querySelector("#bubbleSort").disabled = false;
  document.querySelector("#insertionSort").disabled = false;
  document.querySelector("#mergeSort").disabled = false;
  document.querySelector("#quickSort").disabled = false;
  document.querySelector("#selectionSort").disabled = false;
}

 
//  Designed by:- Pritirekha Panda 