let car=[];
let maxLength=0;
let slotFill=[];
let sampleTest=require('./sample/sampleTest');

let createParkingLot=async (lotNum) => {
    try {
      maxLength = parseInt(lotNum);
    } catch (e) {
      return "Invalid input!";
    }
  
    for (let i = 1; i <= maxLength; i++) {
      slotFill.push(i);
    }

    return `Created a parking lot with ${slotFill.length} slots`;
  
  }

  let park = async (registratonNo, color) => {
    if (maxLength === 0) {
      return `parking lot is not created`;
    } else if (maxLength === car.length) {
      return `Sorry, parking lot is full`;
    } else {
      let slot = slotFill[0];
      car.push({
        'slot': slot,
        'registratonNo': registratonNo,
        'color': color
      });
      slotFill.shift();
      return `Allocated slot number: ${slot}`
    }
  }

  let status = async () => {
    if (maxLength === 0) {
      return "parking lot is not created";
    } else if (car.length > 0) {
  
      console.log("Slot No.\tRegistration No.\tColor");
      car.forEach(function (row) {
        console.log(row.slot + "\t         " + row.registratonNo + "\t         " + row.color);
      });
  
    } else {
      return `Parking lot is empty`
    }
  
  }



  let leave = async (slot) => {
    slot = parseInt(slot);
    if (maxLength === 0) {
      return "parking lot is not created";
    } else if (car.length > 0) {
  
      if (await sampleTest.search(slot, 'slot', car)) {
  
        car = await sampleTest.remove(slot, 'slot', car);
  
        // Add a the number back into slot 
        slotFill.push(slot);
        slotFill.sort();
        return `Slot  numbmer ${slot} is free`;
  
      } else {
        return ` Slot ${slot} is already empty `;
      }
  
      console.log('car ==>', car);
  
    } else {
      return `Parking lot is empty`
    }
  }

  let getRegistrationNumbersFromColor = async (color) => {

    if (maxLength === 0) {
      return "parking lot is not created";
    } else if (car.length > 0) {
      let ans= [];
      car.forEach(function (row) {
        if (row.color === color) {
          ans.push(row.registratonNo);
        }
      });
  
      let result = '';
      if (ans === undefined) return `Not found`;
      for (let i = 0; i < ans.length; i++) {
        if (!(i == ans.length - 1)) {
          result += ans[i] + ","
        } else {
          result += ans[i];
        }
      }
      return result;
  
    } else {
      return `Not found`
    }
  
  }



  let getSlotNumbersFromColor = async (color) => {
    if (maxLength === 0) {
      return "parking lot is not created";
    } else if (car.length > 0) {
      let ans= [];
      
      car.forEach(function (row) {
        if (row.color === color) {
          ans.push(row.slot);
        }
      });
  
      let result = '';
      if (ans === undefined) return `Not found`;
  
      for (let i = 0; i < ans.length; i++) {
        if (!(i == ans.length - 1)) {
          result += ans[i] + ","
        } else {
          result += ans[i];
        }
      }
      return result;
  
    } else {
      return `Not found`
    }
  }


  let getSlotNumberFromRegNo = async (registratonNo) => {
    if (maxLength === 0) {
      return "parking lot is not created";
    } else if (car.length > 0) {
      let result;
      car.forEach(function (row) {
        if (row.registratonNo === registratonNo) {
          result = row.slot;
        }
      });
      if (result === undefined) return `Not found`
      return result;
    } else {
      return `Not found`
    }
  }
  
  module.exports={createParkingLot,park,status,leave,getRegistrationNumbersFromColor,getSlotNumbersFromColor,getSlotNumberFromRegNo};