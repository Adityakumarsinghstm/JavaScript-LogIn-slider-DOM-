const slid = document.getElementById("slid")
const button = document.getElementById("button")
const cross = document.getElementById("cross")
const generateSlide = () =>
{
    slid.style.display="block"
}
const hideSlide = () =>
{
    slid.style.display="none"
    }
button.addEventListener("click", generateSlide)
cross.addEventListener("click",hideSlide)