const count_btn = document.getElementById("counter_btn");
const label_count = document.getElementById("label_count"); 
let i = 0; 

label_count.innerHTML = `${i}`; 

count_btn.addEventListener("click", () => {
    i = i + 1; 
    label_count.innerHTML = `${i}`; 
});
