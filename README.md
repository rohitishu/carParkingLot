# carParkingLot
Parking lot generator without human interaction

I own a multi-storey parking lot that can hold up to 'n' cars at any given point in time. Each
slot is given a number starting at 1 increasing with increasing distance from the entry point in
steps of one. I want to create an automated ticketing system that allows my customers to
use my parking lot without human intervention.
When a car enters my parking lot, I want to have a ticket issued to the driver. The ticket
issuing process includes us documenting the registration number (number plate) and the
colour of the car and allocating an available parking slot to the car before actually handing
over a ticket to the driver (we assume that our customers are nice enough to always park in
the slots allocated to them). The customer should be allocated a parking slot which is
nearest to the entry. At the exit the customer returns the ticket which then marks the slot
they were using as being available.
Due to government regulation, the system should provide me with the ability to find out:

● Registration numbers of all cars of a particular colour.

● Slot number in which a car with a given registration number is parked.

● Slot numbers of all slots where a car of a particular colour is parked.

We interact with the system via a simple set of commands which produce a specific output.
Please take a look at the example below, which includes all the commands you need to
support - they're self explanatory. The system should allow input in two ways. Just to clarify,
the same codebase should support both modes of input - we don't want two distinct
submissions.
1) It should provide us with an interactive command prompt based shell where commands
can be typed in
2) It should accept a filename as a parameter at the command prompt and read the
commands from that file


Sample Input

create_parking_lot 6

park KA-01-HH-1234 White

park KA-01-HH-9999 White

park KA-01-BB-0001 Black

park KA-01-HH-7777 Red

park KA-01-HH-2701 Blue

park KA-01-HH-3141 Black

leave 4

status

park KA-01-P-333 White

park DL-12-AA-9999 White

registration_numbers_for_cars_with_colour White

slot_numbers_for_cars_with_colour White

slot_number_for_registration_number KA-01-HH-3141

slot_number_for_registration_number MH-04-AY-1111 

To Use

To clone and run this repository you'll need Node.js (which comes with npm)  installed on your computer.


Then in terminal:
Clone this repository

git clone https://github.com/rohitishu/carParkingLot.git
Go into the repository

cd carParkingLot
Install dependencies and run the app

npm install && npm start

For running all the test cases 

npm test test/run.testcases.js

for manually testing 

npm app.js
