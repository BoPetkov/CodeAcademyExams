function Classes (classes, sessions, academyLasts, lostSessions){

    result= classes*sessions*academyLasts-(lostSessions*classes);
    result1= classes*sessions*academyLasts;
    console.log("Sum classes", result1);
    console.log("minus lost classes ", result);
    
}