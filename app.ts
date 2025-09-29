function calculateAge(birthDate: string): number {
    const birth: Date = new Date(birthDate);
    const today: Date = new Date();
    
    let age: number = today.getFullYear() - birth.getFullYear();
    const monthDifference: number = today.getMonth() - birth.getMonth();
    
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    
    return age;
}

function main(): void {
    const testDates: string[] = [
        "1990-05-15",
        "2000-12-25",
        "1985-03-08",
        "2010-09-30"
    ];
    
    console.log("Age Calculator Test Results:");
    testDates.forEach((dateStr: string) => {
        const age: number = calculateAge(dateStr);
        console.log(`Birth date: ${dateStr} -> Age: ${age} years`);
    });
}

main();