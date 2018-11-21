import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID ee141cafbc018b1e5ea366b81cff73285ca37e90f3afb9c7fda4edb1cf011a30"
  }
});
