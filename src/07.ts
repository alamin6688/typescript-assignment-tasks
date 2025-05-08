{
  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  function getDayType(day: Day): string {
    switch (day) {
      case Day.Sunday:
        return "Weekend";
      default:
        return "Weekday";
    }
  }
  //   const result = getDayType(Day.Sunday);
  //   console.log(result);
}
