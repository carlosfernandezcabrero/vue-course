export default function responseError(res, error) {
  console.log(error);
  switch (error.origin) {
    case "authentication":
    case "validation":
    case "CUSTOM":
      res.statusCode = 400;
      res.json(error);
      break;

    default:
      res.statusCode = 500;
      res.json({ message: "Internal Server Error" });
  }

  return res;
}
