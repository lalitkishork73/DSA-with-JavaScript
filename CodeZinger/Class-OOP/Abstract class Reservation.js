/* 
Abstract class Reservation
Tags:	Abstract MethodFunction OverridingAbstract Class
Implement an abstract class Reservation and two subclasses ReserveTrain and ReserveBus


Define a Reservation abstract class with following characteristics

Method reserve which takes integer value seats and typeOfSeat as parameters and returns boolean type.
Method getAvailableSeats which return a number of seat remaining. 
 

Define a ReserveBus with following characteristics

Extends the Reservation class.
Data member totalSeats as an integer.
Parameterized constructor(int totalSeats) to initialize data member.
Method reserve to reserve the given number of seats and return true and if the required number of seats are not available return false. (typeOfSeat parameter has no importance in this method)
 

Define a ReserveTrain with following characteristics

Extends the Reservation class.
Data members upperBirthTotalSeats, middleBirthTotalSeats and lowerBirthTotalSeats as an integer.
Parameterized constructor(int lowerBirthTotalSeats, int  middleBirthTotalSeats, int upperBirthTotalSeats) to initialize data members.
Method reserve to reserve the given number of seats for given type of seat and return true and if the required number of seats are not available return false.
 

Input

    1
    10
    3
    2 3 7

 

    where,

First line represent type of reservation (1 for ReserveBus and 2 for ReserveTrain)
Second line represents the total seats for bus.
Third line represents the total number booking
Forth line represents the number of seats to be reserved.
 

Output

    Booked-2

    Booked-3
    SEATS NOT AVAILABLE FOR BUS-7

    Remaining Seats-5

 

Another example,

 

Input

    2
    10 12 40
    3
    1 7 2 15 3 1

 

    where,

First line represent type of reservation (1 for ReserveBus and 2 for ReserveTrain)
Second line represents the total seats for upperBirthTotalSeats, middleBirthTotalSeats and lowerBirthTotalSeats respectively in the train.
Third line represents the total number booking.
Forth line represents the number of seats to be reserved (combination of typeOfSeat and seats)
 

Note: Type is 1 for lower berth, type is 2 for middle birth and type is 3 for upper birth.

 

Output

    Booked-7
    SEATS NOT AVAILABLE FOR TRAIN-15
    Booked-1
    Remaining Seats-54
*/

//this given solution is not perfect i will update this code soon.

function Reservation(a, b, c, d) {
    //Write your solution here

    switch (a) {
        case 1: b = b[0];
            return ReserveBus(b, c, d);
            break;
        case 2: let rem = [], totalSeats = b.reduce((a, b) => a + b);
            return ReserveTrain(rem, totalSeats, b, c, d);
            break;
    }

    function ReserveBus(b, c, d) {
        if (c === 0 || d[0] > b) {
            if (d[0]) console.log(`SEATS NOT AVAILABLE FOR BUS-${d[0]}`); return `Remaining Seats-${b}`
        }
        else if (d[0] <= b) {
            console.log(`Booked-${d[0]}`);
            return ReserveBus(b - d[0], c - 1, d.splice(1));
        }
    }

    function ReserveTrain(rem, a, b, c, d) {
        let i = d[0];
        if (c === 0) {
            return `Remaining Seats-${a - rem.reduce((a, b) => a + b, i = 0)}`;
        } else if (d[1] > b[i - 1]) {
            console.log(`SEATS NOT AVAILABLE FOR TRAIN-${d[1]}`);
            return ReserveTrain(rem, a, b, c - 1, d.slice(2));
        }
        else if (d[1] <= b[i - 1]) {
            console.log(`Booked-${d[1]}`);
            b[i - 1] -= d[1];
            rem.push(d[1]);
            return ReserveTrain(rem, a, b, c - 1, d.slice(2))
        }
    }

}


function main() {
    var a = parseInt(readLine());
    var b = readLine().split(' ').map(Number);
    var c = parseInt(readLine());
    var d = readLine().split(' ').map(Number);

    var res = Reservation(a, b, c, d);
    console.log(res);
}

// updated code ................