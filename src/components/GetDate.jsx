import { useState } from "react";
const GetDate = () => {
  const [date, setDate] = useState("");

  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");

  // setDate(`${day}-${month}-${year} ${hours}:${minutes}`);

  return <span>{date}</span>;
};

export default GetDate;
