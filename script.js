let c = document.getElementById("btn");

c.addEventListener("submit", function(event) {
    event.preventDefault();
    
    let a = document.getElementById("age").value;
    let b = document.getElementById("name").value;
    
    let promise1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            if(a >= 18) {
                resolve(`Welcome, ${b}. You can vote`);	
            } else if(a < 18) {
                reject(`Oh sorry ${b}. You aren't old enough.`);
            }
        }, 4000);
    });
    
    promise1.then((data) => {
        alert(data);
    }).catch((err) => {
        alert(err);
    });
});