function scrollToElement(elementSelector, instance = 0) {
    // Select all elements that match the given selector
    const elements = document.querySelectorAll(elementSelector);
    // Check if there are elements matching the selector and if the requested instance exists
    if (elements.length > instance) {
        // Scroll to the specified instance of the element
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () => {
    scrollToElement('.header');
});
link2.addEventListener('click', () => {
    // Scroll to the second element with "header" class
    scrollToElement('.header', 1);
});

link3.addEventListener('click', () => {
    scrollToElement('.column');
});

const hire_me = document.getElementById('hire_me');
hire_me.addEventListener('click', () =>{
    var gmail = "https://mail.google.com/mail/u/0/#inbox";
    window.open(gmail,'_blank');
})

let get_started = document.getElementById('hire');
get_started.addEventListener('click', () =>{
    var gmail = "https://mail.google.com/mail/u/0/#inbox";
    window.open(gmail,'_blank');
})
const join_now = document.getElementById('join_now');
join_now.addEventListener('click', () =>{
    var gmail = "https://mail.google.com/mail/u/0/#inbox";
    window.open(gmail,'_blank');
})
const join_nowG = document.getElementById('join_nowG');
join_nowG.addEventListener('click', () =>{
    var gmail = "https://mail.google.com/mail/u/0/#inbox";
    window.open(gmail,'_blank');
})
const join_nowD = document.getElementById('join_nowD');
join_nowD.addEventListener('click', () =>{
    var gmail = "https://mail.google.com/mail/u/0/#inbox";
    window.open(gmail,'_blank');
})