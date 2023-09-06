// JavaScript for Dropdown Menus
const menu1 = document.getElementById("menu1");
const menu2 = document.getElementById("menu2");

menu1.addEventListener("change", function () {
    const selectedValue = menu1.value;
    // You can add logic to perform actions based on the selected value here
    console.log("Selected Value from Menu 1: " + selectedValue);
});

menu2.addEventListener("change", function () {
    const selectedValue = menu2.value;
    // You can add logic to perform actions based on the selected value here
    console.log("Selected Value from Menu 2: " + selectedValue);
});
