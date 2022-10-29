type state = "plus" | "minus";
export const Couterlogic = (num: number, _state: state): Number => {
  switch (_state) {
    case "minus":
      return num <= 1 ? 1 : (num += 1);
    case "plus":
      return num <= 10 ? (num += 1) : 10;
    default:
      return 1;
  }
};
