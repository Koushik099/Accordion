const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

let accordianBody;
const faqs = [];

function showFaq() {
  let btn = document.querySelectorAll(".show_btn");

  for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", () => {
      btn[i].classList.toggle("btn");
      let p = document.querySelectorAll("p");
      p[i].classList.toggle("hidden");
    });
  }
  // btn.forEach((ele) => {
  //   ele.addEventListener("click", (e) => {
  //     let p = document.querySelectorAll("p");
  //     console.log(e.currentTarget.nextElementSibling);
  //     p[0].classList.toggle("hidden");
  //     // p.forEach((ele) => {
  //     //   let para = e.currentTarget;
  //     //   // console.log(para);
  //     //   // ele.currentTarget.classList.toggle("hidden");
  //     // });
  //   });
  // });
}

function createFaq(title, desc) {
  // let accbody = document.querySelector(".accordian_body");
  let div = document.createElement("div");
  let header = document.createElement("div");
  let h3 = document.createElement("h3");
  let button = document.createElement("button");
  let p = document.createElement("p");
  p.textContent = desc;
  h3.textContent = title;
  button.textContent = "+";

  div.classList.add("faq");
  header.classList.add("faq_header");
  button.classList.add("show_btn");
  p.classList.add("hidden");

  header.appendChild(h3);
  header.appendChild(button);
  div.appendChild(header);
  div.appendChild(p);
  document.body.appendChild(div);
  // accbody.appendChild(div);
}

function btnStatusUpdate() {
  let btns = document.querySelectorAll(".show_btn");
  btns.forEach((items) => {
    items.addEventListener("click", (e) => {
      let style = e.currentTarget.classList;
      if (style.contains("btn")) {
        items.textContent = "-";
      } else {
        items.textContent = "+";
      }
    });
  });
}

for (let i = 0; i < faqData.length; i++) {
  createFaq(faqData[i].question, faqData[i].answer);
}

showFaq();

btnStatusUpdate();
