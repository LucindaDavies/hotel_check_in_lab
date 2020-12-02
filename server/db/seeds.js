use hotelbookings;
db.dropDatabase();

db.bookings.insertMany([
    {
        name: "Harry Jackson",
        email: "harry.jackson@mac.com",
        checkedIn: true
    },
    {
        name: "Angela Smith",
        email: "admin@theflowershop.org",
        checkedIn: false

    }
]); 