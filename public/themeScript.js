const matchQuestion = document.querySelector(".matchQuestion");
const qqq = document.querySelector('.qqq');

if (matchQuestion) {
  matchQuestion.addEventListener("submit", async (e) => {
    e.preventDefault();
    const { answer, action, method } = e.target;
    const res = await fetch(action, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        answer: answer.value,
        id: e.target.dataset.questionid,
      }),
    });
    const data = await res.json();
    console.log(data);
    if (data.html) {
      qqq.insertAdjacentHTML("beforeend", data.html);
    }
    if (data.message) {
      document.querySelector(".errorAdd").innerHTML = data.message;
    }
  });
}

if (qqq) {
  qqq.addEventListener('click', async (e) => {
    
    // if (e.target.classList.contains('q-button')) {
    //   const productOne = e.target.closest('.qqq');
    //   console.log(productOne.dataset.id);
    //   const res = await fetch(`/products/${productOne.dataset.id}/delete`, {
    //     method: 'DELETE',
    //   });
    //   const data = await res.json();
    //   if (data.delProduct) {
    //     productOne.remove();
    //   }
    // }
  });
}
