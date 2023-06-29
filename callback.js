function step1(image) {
    setTimeout(() => {
        console.log("image select")
        step2("select image")
    }, 4000);

}
function step2(image) {
    setTimeout(() => {
        console.log("Filtered image")
        step3("filteredimage")
    }, 3000);

}
function step3(Filteredimage) {
    setTimeout(() => {
        console.log(`cation image ${Filteredimage}`);
        step4("captionimage")
    }, 2000);

}
function step4() {
    setTimeout(() => {
        console.log("upload successfully")

    }, 1000);

}
step1((image) => {
    step2(image, (Filteredimage) => {
        step3(captionimage), (captionimage) => {
            step4(captionimage)
        }
    })
})
