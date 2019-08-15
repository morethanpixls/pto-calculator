// Starting balance in hours
const startingBalance = 280;

// Initialize taken pto counter
let   ptoHoursTaken = 0,
      ptoHoursPlanned = 0;

const ptoDates = [],
      ptoPlannedDates = [],
      hoursPerDay = 8;

// Calculate current balance based on 8 hours a day
let currentBalance = ( startingBalance - ptoHoursTaken ) / hoursPerDay;

// Record PTO date and update the taken PTO counter
const takePTO = (dateArray, hours) => {
  
      for ( let i = 0; i < dateArray.length; i++ ) {
        ptoDates.push(dateArray[i]);
      }

    ptoHoursTaken += hours * dateArray.length;
    currentBalance = currentBalance - ( ptoHoursTaken/hoursPerDay );
}

// Calculate planned dates
const planPTO = (dateArray, hours) => {
  ptoHoursPlanned += hours * dateArray.length;
  
  const dates = dateArray.join(", ");
  
  let futureBalance = currentBalance - (ptoHoursPlanned / hoursPerDay);
  return `If you take ${dates} off you'll have ${futureBalance} days remaining of Paid Time Off.`;
}

switch ( true ) {
    case currentBalance > 1 :
        console.log(`You have ${currentBalance} days left of Paid Time Off.`);
        break;
    case currentBalance === 1 :
        console.log(`You have ${currentBalance} day left of Paid Time Off.`);
        break;
    case currentBalance === 0 :
        console.log( 'You don\'t have any days left of Paid Time Off. However, you can borrow up to 5 days from next year\'s balance.');
        break;
    case currentBalance < 0 && currentBalance > -6 :
        console.log( `You are in borrowed territory. ${currentBalance}`);
        break;
    default: 
        console.log( `Sorry, no more Paid Time Off for you!`);
}


const takePTObtn = document.getElementsByClassName('take-pto')[0];

takePTObtn.addEventListener('click', takePTO());



