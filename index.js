const burger=document.querySelector(".burger")
const navlinks=document.querySelector(".nav-links")
const links= document.querySelectorAll(".nav-links li")
const nav= document.querySelector("nav")
const join=document.querySelector(".heading > .contain > a > span")

burger.addEventListener('click',()=>{
    navlinks.classList.toggle("open")
    nav.classList.toggle("open")
    links.forEach(link=>{
        link.classList.toggle("fade")
    })
})


const width=window.innerWidth
const thirdPara=document.querySelector(".third-card-content ")
const contain= document.querySelector(".contain > a")
const footerContent= document.querySelector(".footer-content")
const firstHead= document.querySelector(".first-sec-content > h2")
const card41=document.querySelector(".card-41 > .content > p")
const card42=document.querySelector(".card-42 > .content > p")
if(width<=760){
    thirdPara.innerHTML= "<p>Match your goals to your programs, explore your options, and map out your  path to success. I plan to use skillfy for along time!.</p>"
    contain.classList.add("btn-2")
    contain.classList.add("effect02")
    contain.classList.remove("effect01")
    contain.classList.remove("btn")
    firstHead.innerHTML="Got a question about using Skillfy?"
    card41.innerHTML="Teach what you love. Coursector gives you the tools to create a course"
    card42.innerHTML="Get uinlimited access to 3,000+ of Coursector's top courses for your team"
    footerContent.innerHTML=`<div class="company" onmouseover="company()" onmouseout="company2()">
    <h3>Company</h3>
    <ul>
      <li>
        About
      </li>
      <li>
        Careers
      </li>
      <li>
        Press
      </li>
      <li>
        Blog
      </li>
      <li>
        Affiliates
      </li>
    </ul>
  </div>

  <div class="community" onmouseover="community()" onmouseout="community2()">
    <h3>Community</h3>
    <ul>
      <li>
        Go Premium
      </li>
      <li>
        Team Plans
      </li>
      <li>
        Refer a Friend
      </li>
      <li>
        Gift Cards
      </li>
      <li>
        Scholarships
      </li>
      <li>
        Free Classes
      </li>
    </ul>
  </div>
  <div class="teaching" onmouseover="teaching()" onmouseout="teaching2()">
    <h3>Teaching</h3>
    <ul>
      <li>
        Become a Teacher
      </li>
      <li>
        Teaching Academy
      </li>
      <li>
        Teacher Handbook
      </li>
      <li>
        Partnerships
      </li>
    </ul>
  </div>
  <div class="support"onmouseover="support()" onmouseout="support2()">
    <h3>Support</h3>
    <ul>
      <li>
        Support
      </li>
      <li>
        Contact Us
      </li>
      <li>
        System Requirements
      </li>
      <li>
        Register Activation Key
      </li>
      <li>
        Site feedback
      </li>
    </ul>
  </div>`
}

if (width<400){
    join.innerHTML="Join"
}
function company(){
    const company=document.querySelector(".company > ul")
    company.style.display="block"
    const footer= document.querySelector(".footer")
    footer.style.height="600px"
}
function company2(){
    const company=document.querySelector(".company > ul")
    company.style.display="none"
    const footer= document.querySelector(".footer")
    footer.style.height="450px"
}
function community(){
    const company=document.querySelector(".community > ul")
    company.style.display="block"
    const footer= document.querySelector(".footer")
    footer.style.height="600px"
}
function community2(){
    const company=document.querySelector(".community > ul")
    company.style.display="none"
    const footer= document.querySelector(".footer")
    footer.style.height="450px"
}
function teaching(){
    const company=document.querySelector(".teaching > ul")
    company.style.display="block"
    const footer= document.querySelector(".footer")
    footer.style.height="600px"
}
function teaching2(){
    const company=document.querySelector(".teaching > ul")
    company.style.display="none"
    const footer= document.querySelector(".footer")
    footer.style.height="450px"
}
function support(){
    const company=document.querySelector(".support > ul")
    company.style.display="block"
    const footer= document.querySelector(".footer")
    footer.style.height="600px"
}
function support2(){
    const company=document.querySelector(".support > ul")
    company.style.display="none"
    const footer= document.querySelector(".footer")
    footer.style.height="450px"
}