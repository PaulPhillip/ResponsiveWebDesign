// let options = {
//     root: document.querySelector('body'),
//     rootMargin: '0px',
//     threshold: 1.0
// }



// function whenInView(val){
//     for(let entry of val){
//         if(entry.isIntersecting){
//             const elem = entry.target;
//             elem.classList.add('fadein');
//         }
//     }
// }

// const observer = new IntersectionObserver(whenInView, options);
// const element = document.getElementById('main-image');
// observer.observe(element);

const callback = (entries) => {

    // The entries variable will contain the list of
    // elements that you are observing. When ever 
    // intersection occurs, you need to do forEach loop 
    // to find which one intersected. 
    // For this we check a flag on the element called "isIntersecting"
    entries.forEach(
        (entry) => {
            if (entry.isIntersecting) {
                console.log("The element is intersecting >");
                //If intersecting then attach keyframe animation.
                //We do this by assigning the data attribute 
                //we coded in the markup to the style.animation 
                //of the element
                entry.target.style.animation =
                    entry.target.dataset.animate;
            } else {
                //We take of the animation if not in view
                entry.target.style.animation = "none";
            }
        }
    );
}



let observer = new IntersectionObserver(callback);




const animationItems = document.querySelectorAll('.animate');


//3]Loop through selected elements and add to the
//observer watch list.      

animationItems.forEach(item => {
    observer.observe(item)
})