
const raspSvg = document.getElementById("raspSvg")
const headerRegisterBnt = document.querySelector("header .bnt-style-1")

headerRegisterBnt.classList.add('hidden')
raspSvg.querySelectorAll("path").forEach(path=>{
    path.style.strokeDasharray = path.getTotalLength() + 'px'
    path.style.strokeDashoffset = path.getTotalLength() + 'px'
})

raspSvg.classList.add('startAnim')
