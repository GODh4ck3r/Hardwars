
const raspSvg = document.getElementById("raspSvg")
const topicLink = document.getElementById("topicLink")
const section1__left__buttongroup = document.getElementById("section1__left__buttongroup")
const headerRegisterBnt = document.querySelector("header .bnt-style-1")

// headerRegisterBnt.classList.add('hidden')
// topicLink.classList.add('hidden')

raspSvg.querySelectorAll("path").forEach(path=>{
    path.style.strokeDasharray = path.getTotalLength() + 'px'
    path.style.strokeDashoffset = path.getTotalLength() + 'px'
})

raspSvg.classList.add('startAnim')



const linkAndBnt_OBS = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            headerRegisterBnt.classList.add('allHidden')
            topicLink.classList.add('allHidden')
        }else{
            headerRegisterBnt.classList.remove('allHidden')
            topicLink.classList.remove('allHidden')
        }
    })
},{
    threshold: [0.1]
})



const pageTransition_OBS = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.querySelector('.transitionDIV').classList.remove('hidden')
            pageTransition_OBS.unobserve(entry.target)
        }else{
            entry.target.querySelector('.transitionDIV').classList.add('hidden')
        }
    })
},{
    threshold: [0.2]
})


linkAndBnt_OBS.observe(section1)
pageTransition_OBS.observe(section2)
pageTransition_OBS.observe(section3)
pageTransition_OBS.observe(section4)



