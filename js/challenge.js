let count = 0

const subtract = document.querySelector("#minus")
const add = document.querySelector("#plus")
const like = document.querySelector("#heart")
const startAndStop = document.querySelector("#pause")
let clock = document.querySelector("#counter")
const currentLikes = []
const likesList = document.querySelector(".likes")

document.addEventListener("DOMContentLoaded" , function() {
    setInterval(() => {
        clock.innterText = clock.innerText++;
    }, 1000)
    

    subtract.addEventListener("click" , function() {
        clock.innterText = clock.innerText--;
    })

    add.addEventListener("click" , function() {
        clock.innterText = clock.innerText++;
    })


    like.addEventListener("click" , function() {
        const currentCount = parseInt(counter.textContent)
        const exisitingLike = currentLikes.find(like => like.num === currentCount)
//console.log(`${exisitingLike}`)
        if (!exisitingLike) {
            //console.log("inside if statement")
            const likeObject = {num: currentCount , likeCount: 1}
            currentLikes.push(likeObject)
            const newLikeElement = document.createElement('li')
            likeObject.element = newLikeElement
            newLikeElement.textContent = `${currentCount} has been liked ${likeObject.likeCount} times`
            likesList.append(newLikeElement)

        } else{
            //console.log("inside else statement")
            exisitingLike.likeCount++
            exisitingLike.element.textContent = `${exisitingLike.num} has been liked ${exisitingLike.likeCount} times`
        }
    })
    }) 