const users = [
  { name: "John", last: "Doe" },
  { name: "Jane,", last: "Doe" },
];

const schedule = [
  (room201 = [
    { start: "8:00", end: "8:59", reserved: true },
    { start: "9:00", end: "9:59", reserved: false },
    { start: "10:00", end: "10:59", reserved: false },
    { start: "11:00", end: "11:59", reserved: false },
    { start: "12:00", end: "12:59", reserved: false },
    { start: "13:00", end: "13:59", reserved: false },
    { start: "14:00", end: "14:59", reserved: false },
    { start: "15:00", end: "15:59", reserved: false },
    { start: "16:00", end: "16:59", reserved: false },
    { start: "17:00", end: "17:59", reserved: false },
    { start: "18:00", end: "18:59", reserved: false },
    { start: "19:00", end: "19:59", reserved: false },
    { start: "20:00", end: "20:59", reserved: false },
    { start: "21:00", end: "21:59", reserved: false },
    { start: "22:00", end: "22:59", reserved: false },
    { start: "23:00", end: "23:59", reserved: false },
  ]),
  ,
];

const reservation = {
  name: "John",
  last: "Doe",
  reservations: [
    {
      room: "201",
      start: "8:00",
      end: "8:59",
    },
  ],
};

const button = document.getElementById("reserva");
console.log(schedule);

button.addEventListener("click", () => {
  schedule.filter((room) => {
    room.filter((hour) => {
      if (hour.start === "8:00" && hour.end === "8:59" && !hour.reserved) {
        hour.reserved = true;
        hour.name = reservation.name;
        hour.last = reservation.last;
      } else {
        console.log("No hay horario disponible");
      }
    });
  });
  console.log(schedule);
});
