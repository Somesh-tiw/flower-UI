// document.querySelector('.menu').addEventListener('click', () => {
//     const links = document.querySelector('.links');
//     links.style.display = links.style.display === 'none' || !links.style.display ? 'block' : 'none';
// });
let line =document.querySelector('.line')
console.log(line)
line.value

const loginPage=(()=>{
    // console.log(e.target.parentElement)
    let page=document.createElement('div')
    page.className="StylePage"
    page.style.width="500px"
    page.style.height="450px"
    page.style.backgroundColor="Red"
    page.innerText="Login page"
    // page.innerText=line.value
    // console.log("sklcmskm")
    line.appendChild(page)
})
line.addEventListener('click',loginPage)