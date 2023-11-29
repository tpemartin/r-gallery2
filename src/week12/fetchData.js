import axios from "axios";

const dataUrl = "https://script.googleusercontent.com/macros/echo?user_content_key=b9oW1CFo48oGmq1-8EtR2dbz125HViqc5tdCj5BNuCsk8zITRGsNtdzB9rzyJckuK24R1nPzkjEgNZOk2GUYUKNgj0oN_2uzm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnIoTkjF-pGmTRCkbwvN7ld4yvK06nzaq3ORXKHduEplsXgtfzFWD7hELUDh5ZziLjL2pSy5UkE9nQtQKHaDUWDSfSb8-dVSzBw&lib=MQNqBE03-Z35YX4RPP2zGdtmFulhg_8-J";

export default async function fetchData() {
  try {
    const response = await axios.get(dataUrl);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

