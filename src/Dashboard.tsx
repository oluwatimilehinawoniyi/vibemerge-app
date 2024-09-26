// import { useState, useEffect } from "react";
import { fetchUserProfile } from "./api/spotifyApi";

export default function Dashboard() {
  // const [userData, setUserData] = useState();

  const handleUserData = () => {
    const data = fetchUserProfile();
    console.log(data);
  };

  return (
    <div>
      <h1 className="">welcome to the dashboard</h1>

      <p className="">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae numquam
        maiores, possimus necessitatibus inventore maxime quidem fugiat nam ipsa
        asperiores atque. Quasi voluptas commodi animi soluta in esse voluptates
        sed cumque nobis tempora veritatis minima, accusamus nam aperiam
        quisquam eligendi reprehenderit eaque debitis quod? Nemo ea fuga magnam
        voluptatum placeat.
      </p>

      <button
        className="p-4 py-2 m-4 bg-red-200 border rounded-lg"
        onClick={handleUserData}
      >
        fetch user's data
      </button>
    </div>
  );
}
