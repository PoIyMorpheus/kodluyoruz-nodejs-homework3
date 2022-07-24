function circleArea(radius){
    return(Math.PI*Math.pow(radius,2));
}

function circleCircumference(radius){
    return(2*radius*Math.PI)
}


function printCircleValues(radius){
    console.log(`Area: ${circleArea(radius)}\nCircumference: ${circleCircumference(radius)}`);
}
module.exports = {circleArea, circleCircumference, printCircleValues}