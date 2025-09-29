"use strict";
function calculateAge(birthDate) {
    const birth = new Date(birthDate);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const monthDifference = today.getMonth() - birth.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    return age;
}
function main() {
    const testDates = [
        "1990-05-15",
        "2000-12-25",
        "1985-03-08",
        "2010-09-30"
    ];
    console.log("Age Calculator Test Results:");
    testDates.forEach((dateStr) => {
        const age = calculateAge(dateStr);
        console.log(`Birth date: ${dateStr} -> Age: ${age} years`);
    });
}
main();
