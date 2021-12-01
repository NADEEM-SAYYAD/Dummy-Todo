import axios from "axios";

export default axios.create({
    baseURL: "https://6145a73f38339400175fc690.mockapi.io/",
    headers: {
        "Content-type": "application/json"
    }
});
