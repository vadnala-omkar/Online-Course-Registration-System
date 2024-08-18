$(function() {
    $('[data-toggle="popover"]').popover()
})
$(function() {
    $('.example-popover').popover({
        container: 'body'
    })
})
let billtoName = document.getElementById("billtoName");
let emailTo = document.getElementById("emailTo");
let phoneTo = document.getElementById("phoneTo");
let courseitemTO = document.getElementById("courseitem");



let registername = document.getElementById("name")
let registeremail = document.getElementById("email");
let registercourse = document.getElementById("course");

function register() {
    billtoName.textContent = registername.value;
    emailTo.textContent = registeremail.value;
    phoneTo.textContent = "9347640227";
    courseitemTO.textContent = registercourse.value;
}