// JS projects n_1
const pOneVideo = document.getElementById("video");
const pOneSwitch = document.querySelector(".pro-1 .switch");
const pOnePlaySwitch = document.querySelector(".pro-1 .p-switch");
const pLoader = document.querySelector(".pro-1 .p1-loader");
pOneSwitch.addEventListener("click", () => {
  if (!pOnePlaySwitch.classList.contains("move-switch")) {
    pOnePlaySwitch.classList.add("move-switch");
    pOneVideo.pause();
  } else {
    pOnePlaySwitch.classList.remove("move-switch");
    pOneVideo.play();
  }
});
window.addEventListener("load", function () {
  pLoader.classList.add("display-loader");
});
// JS projects n_2
const tabs = document.querySelectorAll(".p2-button");
const pTwoText = document.querySelectorAll(".p2-text-con");
tabs.forEach((tab, index) => {
  tab.addEventListener("click", function (e) {
    if (!e.target.classList.contains("active-but")) {
      tabs.forEach((tabItem) => {
        tabItem.classList.remove("active-but");
      });
      pTwoText.forEach((textItem) => {
        textItem.classList.remove("active-text");
      });
      tabs[index].classList.add("active-but");
      pTwoText[index].classList.add("active-text");
    }
  });
});

// JS projects n_3

const itemsData = new Date("Aug 1, 2022 2:30:30").getTime();
const pThreeDays = document.querySelector(".days");
const pThreeHours = document.querySelector(".hours");
const pThreeMins = document.querySelector(".mins");
const pThreeSecs = document.querySelector(".secs");

let counterDownData = setInterval(() => {
  let dataNow = new Date().getTime();
  let timeDiff = itemsData - dataNow;
  let days = Math.floor(timeDiff / 1000 / 60 / 60 / 24);
  let hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
  pThreeDays.innerHTML = days < 10 ? `0${days}` : days;
  pThreeHours.innerHTML = hours < 10 ? `0${hours}` : hours;
  pThreeMins.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  pThreeSecs.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
  if (timeDiff < 0) clearInterval(counterDownData);
}, 1000);

// JS projects n_4

const PFourText = [
  `Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton candy gummi bears chocolate bar cake cookie. Cupcake muffin danish muffin cookie gummies. Jelly beans tiramisu pudding. Toffee soufflé chocolate cake pastry brownie. Oat cake halvah sweet roll cotton candy croissant lollipop. Macaroon tiramisu chocolate bar candy candy carrot cake jelly sweet. Gummies croissant macaroon dessert. Chocolate cake dragée pie.`,
  `Next level tbh everyday carry, blog copper mug forage kitsch roof party pickled hammock kale chips tofu. Etsy shoreditch 8-bit microdosing, XOXO viral butcher banh mi humblebrag listicle woke bicycle rights brunch before they sold out ramps. Twee shabby chic taiyaki flannel, enamel pin venmo vape four loko. Hexagon kale chips typewriter kitsch 8-bit organic plaid small batch keffiyeh ethical banh mi narwhal echo park cronut.`,
  `Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.`,
  `Cat gets stuck in tree firefighters try to get cat down firefighters get stuck in tree cat eats firefighters' slippers kitty power ignore the squirrels, you'll never catch them anyway for what a cat-ass-trophy! or purr as loud as possible, be the most annoying cat that you can, and, knock everything off the table. Pretend you want to go out but then don't bite off human's toes, yet disappear for four days and return home with an expensive injury; bite the vet so catch eat throw up catch eat throw up bad birds. `,
  `This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel. That makes me feel angry! Anyhoo, your net-suits will allow you to experience Fry's worm infested bowels as if you were actually wriggling through them.
I just told you! You've killed me! Fry! Quit doing the right thing, you jerk! Michelle, I don't regret this, but I both rue and lament it. Morbo can't understand his teleprompter because he forgot how you say that letter that's shaped like a man wearing a hat.`,
  `Airedale hard cheese mozzarella. Pecorino melted cheese port-salut emmental babybel cheese and wine melted cheese manchego. Everyone loves blue castello everyone loves fromage cheese slices airedale cheddar cream cheese. Bavarian bergkase who moved my cheese halloumi port-salut gouda jarlsberg ricotta rubber cheese. Stinking bishop smelly cheese brie.`,
  `Salvia glossier subway tile, leggings mustache YOLO semiotics chia. Pitchfork tbh af blog church-key meggings vaporware PBR&B master cleanse post-ironic man bun pabst mustache letterpress synth. Snackwave raw denim godard, 3 wolf moon shaman offal kitsch unicorn live-edge selvage schlitz fashion axe vaporware drinking vinegar prism. Shabby chic tacos artisan, chambray chicharrones cardigan leggings typewriter af pop-up williamsburg meditation PBR&B viral. You probably haven't heard of them DIY jean shorts subway tile fashion axe bushwick kitsch tumeric cloud bread vaporware freegan franzen pork belly chicharrones banh mi.`,
  `Man braid celiac synth freegan readymade, pitchfork fam salvia waistcoat lomo bitters gentrify four loko. Pitchfork semiotics post-ironic vegan. Tofu meditation microdosing hashtag semiotics venmo. Flexitarian vape tilde taiyaki. Prism poutine farm-to-table, messenger bag vegan taxidermy tattooed sartorial squid jean shorts fixie selvage trust fund vape.`,
  `Rutters Plate Fleet boom chandler Brethren of the Coast handsomely lookout marooned brigantine knave. Buccaneer gangway jack rum loot spyglass line Jack Tar fore gaff. Gaff topmast scuttle ballast swab draught measured fer yer chains dance the hempen jig Chain Shot yardarm.`,
];

const pFourForm = document.querySelector(".pro-4 .p4-form");
const pFourValue = pFourForm.querySelector('[type="number"]');
const pFourBut = pFourForm.querySelector('[type="submit"]');
const pFourtextArea = document.querySelector(".p4-textarea");
pFourForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let pFourNumber = pFourValue.value;
  if (pFourNumber < 0 || pFourNumber > 9) {
    pFourtextArea.innerHTML = `<p>${
      PFourText[Math.floor(Math.random() * PFourText.length)]
    }</p>`;
  } else {
    let arrText = PFourText.slice(0, pFourNumber)
      .map(function (e) {
        return `<p>${e}</p>`;
      })
      .join("");
    pFourtextArea.innerHTML = arrText;
  }
});
// JS projects n_5
const pFiveForm = document.querySelector(".form-5");
const taskText = document.querySelector('[type="text"]');
const taskSubmit = pFiveForm.querySelector('[type="submit"]');
const pFiveCon = document.querySelector(".p5-con");
const alertBox = document.querySelector(".alert-box");
let arrTasks = [];
let editTask = false;
pFiveForm.addEventListener("submit", playNewTask);

if (localStorage.getItem("tasks")) {
  arrTasks = JSON.parse(localStorage.getItem("tasks"));
  for (let j = 0; j < arrTasks.length ; j++) {
    let newTaskItem = document.createElement("div");
    newTaskItem.classList.add("task-item");
    newTaskItem.setAttribute("data-id", arrTasks[j].id);
    let parTask = document.createElement("p");
    parTask.classList.add("task-value");
    let textTask = document.createTextNode(arrTasks[j].value);
    parTask.appendChild(textTask);
    newTaskItem.appendChild(parTask);
    let taskControl = document.createElement("div");
    taskControl.classList.add("task-control");
    let butEdit = document.createElement("button");
    butEdit.classList.add("edit-task");
    butEdit.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
    taskControl.appendChild(butEdit);
    let butDelete = document.createElement("button");
    butDelete.classList.add("delete-task");
    butDelete.innerHTML = `<i class="fa-solid fa-trash"> </i>`;
    taskControl.appendChild(butDelete);
    newTaskItem.appendChild(taskControl);
    pFiveCon.appendChild(newTaskItem);
    butDelete.onclick = function () {
      alertBoxShow("Item Deleted", "rgb(255, 193, 240)");
      for(let i = 0;i < arrTasks.length; i++) {
        if (arrTasks[i].id == newTaskItem.getAttribute('data-id')) {
          arrTasks.splice(i,1)
        }
      }
      localStorage.setItem("tasks", JSON.stringify(arrTasks));
      newTaskItem.remove();
      if (editTask) {
        taskText.value = "";
        taskSubmit.value = "Submit";
        editTask = false;
      }
    };
    butEdit.onclick = function() {
      editTask = true;
      valueToEdit = butEdit.parentElement.parentElement.firstChild;
      parentId = butEdit.parentElement.parentElement.dataset.id;
      taskSubmit.value = "Edit";
      taskText.value = valueToEdit.textContent;
    }
  }
}


function playNewTask(e) {
  e.preventDefault();
  let taskValue = taskText.value;
  // pFiveCon
  if (taskValue == "") {
    alertBoxShow("Field Is Empty", "rgb(252, 149, 183)");
  } else if (cheakTaskWriten(taskValue) && !editTask) {
    alertBoxShow("Task Is already Writen", "rgb(161, 241, 255)");
  } else if (taskValue !== "" && !cheakTaskWriten(taskValue) && !editTask) {
    const taskId = new Date().getTime();

    let newTaskItem = document.createElement("div");
    newTaskItem.classList.add("task-item");
    newTaskItem.setAttribute("data-id", taskId);
    let parTask = document.createElement("p");
    parTask.classList.add("task-value");
    let textTask = document.createTextNode(taskValue);
    parTask.appendChild(textTask);
    newTaskItem.appendChild(parTask);
    let taskControl = document.createElement("div");
    taskControl.classList.add("task-control");
    let butEdit = document.createElement("button");
    butEdit.classList.add("edit-task");
    butEdit.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
    taskControl.appendChild(butEdit);
    let butDelete = document.createElement("button");
    butDelete.classList.add("delete-task");
    butDelete.innerHTML = `<i class="fa-solid fa-trash"> </i>`;
    taskControl.appendChild(butDelete);
    newTaskItem.appendChild(taskControl);
    pFiveCon.appendChild(newTaskItem);
    let taskObj = {
      id: taskId,
      value: taskValue,
    };
    arrTasks.push(taskObj);
    taskText.value = "";
    localStorage.setItem("tasks", JSON.stringify(arrTasks));
    alertBoxShow("Item Added To The List", "rgb(183, 241, 183)");
    // Delete
    butDelete.onclick = function () {
      alertBoxShow("Item Deleted", "rgb(255, 193, 240)");
      console.log(arrTasks)
      for(let i = 0;i < arrTasks.length; i++) {
        if (arrTasks[i].id == newTaskItem.getAttribute('data-id')) {
          arrTasks.splice(i,1)
        }
      }
      localStorage.setItem("tasks", JSON.stringify(arrTasks));
      newTaskItem.remove();
      if (editTask) {
        taskText.value = "";
        taskSubmit.value = "Submit";
        editTask = false;
      }
    };
    butEdit.onclick = function() {
      editTask = true;
      valueToEdit = butEdit.parentElement.parentElement.firstChild;
      parentId = butEdit.parentElement.parentElement.dataset.id;
      taskSubmit.value = "Edit";
      taskText.value = valueToEdit.textContent;
      for(let i = 0;i < arrTasks.length; i++) {
        if (arrTasks[i].id == parentId) {
        }
      }
      localStorage.setItem("tasks", JSON.stringify(arrTasks));
    }
  } else if (editTask) {
    valueToEdit.textContent = taskText.value;
    alertBoxShow("Value Changed", "rgb(188, 245, 218)");
    for(let i = 0;i < arrTasks.length; i++) {
      if (arrTasks[i].id == parentId) {
        arrTasks[i].value = taskText.value;
      }
    }
    localStorage.setItem("tasks", JSON.stringify(arrTasks));
    taskText.value = "";
    taskSubmit.value = "Submit";
    editTask = false;
  }
}

function cheakTaskWriten(checkTask) {
  allTasks = document.querySelectorAll(".task-value");
  foundTask = false;
  allTasks.forEach((e) => {
    if (e.textContent === checkTask) {
      foundTask = true;
    }
  });
  return foundTask;
}
function alertBoxShow(textAlertBox, alertBoxBg) {
  alertBox.textContent = textAlertBox;
  alertBox.style.backgroundColor = alertBoxBg;
  setTimeout(function () {
    alertBox.textContent = ``;
    alertBox.style.backgroundColor = `transparent`;
  }, 3000);
}