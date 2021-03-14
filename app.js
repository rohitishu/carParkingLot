const readline =require('readline');
const parkingLot=require('./parkingLot');

const fs=readline.createInterface({
input:process.stdin,
output:process.stdout
});

let initMain=()=>{
    fs.on('line',async(item)=>{
     let val=item.split(" ");

     switch(val[0])
     {
         

         case 'create_parking_lot':
             try{
                 const ans=await parkingLot.createParkingLot(val[1]);
                 console.log(ans);
             }
             catch (error) {
                console.log(`error occured ==> ${error}`);
            }
            break;

            case 'park':
                 try {
                     const result = await parkingLot.park(val[1].trim(), val[2].trim());
                     console.log(result);
                 } catch (error) {
                     console.log(`error occured ==> ${error}`);
                 }
                 break;  
            
            case 'status':

                    try {
                        const result = await parkingLot.status();
                        console.log(result);
    
                    } catch (error) {
                        console.log(`error occured ==> ${error}`);
                    }
                    break;

            case 'leave':

                        try {
                            const result = await parkingLot.leave(val[1]);
                            console.log(result);
        
                        } catch (error) {
                            console.log(`error occured ==> ${error}`);
                        }
                        break;    
                        
            case 'registration_numbers_for_cars_with_colour':

                try {
                    const result = await parkingLot.getRegistrationNumbersFromColor(val[1].trim());
                    console.log(result);
                } catch (error) {
                    console.log(`error occured ==> ${error}`);
                }
                break; 
                
            case 'slot_numbers_for_cars_with_colour':

                    try {
                        const result = await parkingLot.getSlotNumbersFromColor(val[1].trim());
                        console.log(result);
                    } catch (error) {
                        console.log(`error occured ==> ${error}`);
                    }
                    break;   
                    
            case 'slot_number_for_registration_number':

                        try {
                            const result = await parkingLot.getSlotNumberFromRegNo(val[1].trim());
                            console.log(result);
                        } catch (error) {
                            console.log(`error occured ==> ${error}`);
                        }
                        break;  
                        
            case 'exit':
                    fs.pause();
                    break;            

            default:
                console.log('You entered the wrong choice please try again ');
                break;
     }

    });
}

initMain();


// sample Input
// create_parking_lot 6
// park KA-01-HH-1234 White
// park KA-01-HH-9999 White
// park KA-01-BB-0001 Black
// park KA-01-HH-7777 Red
// park KA-01-HH-2701 Blue
// park KA-01-HH-3141 Black
// leave 4
// status
// park KA-01-P-333 White
// park DL-12-AA-9999 White
// registration_numbers_for_cars_with_colour White
// slot_numbers_for_cars_with_colour White
// slot_number_for_registration_number KA-01-HH-3141
// slot_number_for_registration_number MH-04-AY-1111 