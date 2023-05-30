$("select").niceSelect()


const regForm = document.getElementById("regForm")
const subBnt = document.getElementById("subBnt")
const selectBox = document.getElementById("selectBox")




$.ajax({
    url: "/api/topics",
    method: "GET",
    success:(data)=>{
        selectBox.innerHTML = ""
        data.topics.forEach(topic=>{
            var option = document.createElement("option")
            option.value = topic._id
            option.innerText = topic.name
            selectBox.insertAdjacentElement("beforeend",option)
        })
        $("select").niceSelect('update')
    },
    error:()=>{
        console.log("ERROR")
        alert("Unable to load Topics!! Contact support team for any help")
    }
})




regForm.addEventListener("submit",(e)=>{
    e.preventDefault()
})

subBnt.addEventListener("click",(e)=>{
    if(regForm.reportValidity()){
        var DATA = {}
        $("form").serializeArray().forEach(item=>{
            DATA[item.name] = item.value
        })
    
        var FORMATED_DATA = {
            teamName: DATA['teamName'],
            mentorName: DATA['mentorName'],
            topic: DATA['topic'],
        }
    
        for (var i = 1; i <= 4; i++) {
            FORMATED_DATA[`member${i}`] = {
                name: DATA[`member-name-${i}`],
                college: DATA[`college-${i}`],
                city: DATA[`city-${i}`],
                mobile: DATA[`mobile-${i}`],
                email: DATA[`email-${i}`],
            }
        }
    
        $.ajax({
            url: "/api/team",
            method: "POST",
            data: FORMATED_DATA,
            success:(data)=>{
                // console.log(data)
                alert(`Success, This is your team id please copy/save it for future reference ${data.msg}`)
                regForm.reset()
            },
            error:()=>{
                console.log("ERROR")
                alert("Unable to save team details!! Contact support team for any help")
            }
        })
        
    }
})

