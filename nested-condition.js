var danishPrice = 50;
var butterBreadPrice = 25;
var toastBiscuitPrice = 10;
var myBudget = 40;
var packedWell = true;


// if (danishPrice < myBudget) {
//     console.log('Danish kheye Denmark Jabo');
// }
// else if (butterBreadPrice < myBudget) {
//     console.log('Butter Bon diye Cha Khamu');
// }
// else if (toastBiscuitPrice < myBudget) {
//     console.log('Toast Biscuit Khamu');
// }
// else {
//     console.log('Batash diye Cha khamu');
// }

// if (danishPrice < myBudget) {
//     if (packedWell == true) {
//         console.log('Danish Khabo')
//     }
//     else {
//         console.log('Danish khamu na!')
//     }
// }

// ৩টা item এর মধ্যে যেটার দাম সবচেয়ে কম এবং আমার বাজেটের মধ্যেও আছে সেটা বের করা 
if (danishPrice < butterBreadPrice && danishPrice < toastBiscuitPrice && danishPrice < myBudget) {
    console.log('Danish diye cha khabo');
}
else if (butterBreadPrice < danishPrice && butterBreadPrice < toastBiscuitPrice && butterBreadPrice < myBudget) {
    console.log("Butter Bread diye cha khabo");
}
else if (toastBiscuitPrice < danishPrice && toastBiscuitPrice < butterBreadPrice && toastBiscuitPrice < myBudget) {
    console.log("Toast Biscuit diye cha khabo");
}
else {
    console.log("Batash diye cha Khabo");
}


// console.log(6 != 6);
// console.log(6 >= 6);
