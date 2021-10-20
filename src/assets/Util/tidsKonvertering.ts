export const tidsKonvertering = (tid: Date) => {
  let dag = tid.getDay();
  let måned = "";
  let år = tid.getFullYear();

  switch (tid.getMonth() + 1) {
    case 1:
      måned = "januar";
      break;
    case 2:
      måned = "februar";
      break;
    case 3:
      måned = "mars";
      break;
    case 4:
      måned = "april";
      break;
    case 5:
      måned = "mai";
      break;
    case 6:
      måned = "juni";
      break;
    case 7:
      måned = "juli";
      break;
    case 8:
      måned = "august";
      break;
    case 9:
      måned = "september";
      break;
    case 10:
      måned = "oktober";
      break;
    case 11:
      måned = "november";
      break;
    case 12:
      måned = "desember";
      break;
  }

  return { dag, måned, år };
};
