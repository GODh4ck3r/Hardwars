$("select").niceSelect()


const regForm = document.getElementById("regForm")
const subBnt = document.getElementById("subBnt")


regForm.addEventListener("submit",(e)=>{
    e.preventDefault()
})

subBnt.addEventListener("click",(e)=>{
    var DATA = {}
    $("form").serializeArray().forEach(item=>{
        DATA[item.name] = item.value
    })
    $.ajax({
        url: "",
        method: "POST",
        success:(data)=>{
            console.log(data)
        },
        error:()=>{
            console.log("ERROR")
        }
    })
})

