//import FirstItem from "./components/FirstItem";
import NewUser from "./components/NewUser/NewUser";
import React, { useState } from "react";
const PROFILE_DATA = [{ key:1,name: "Manjiri", date: new Date(2021, 4, 15) }];
function App() {
  const [profileData, profileDataUpdater] = useState(PROFILE_DATA);
  const clickHandler = () => {
    console.log("here");
    // f
  };
  const newUserDataHandler = (data) => {console.log(data);
    // profileDataUpdater([data, ...profileData]);
    console.log(profileData);
    profileDataUpdater((prevData) => {
      // console.log(prevData);
      return [data, ...prevData];
    });
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
console.log(profileData);
    // f
  };
  return (
    <div>
      <h2>Let's get started!</h2>
      {profileData.map((item) => (
        <FirstItem
          date={item.date}
          name={item.name}
          eventHandler={clickHandler}
        ></FirstItem>
      ))}

      <NewUser newUserData={newUserDataHandler} />
    </div>
  );
}

export default App;
