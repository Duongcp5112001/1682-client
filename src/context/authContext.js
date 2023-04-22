import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = () => {
    //TO DO
    setCurrentUser({
      id: 2,
      name: "AnhPhuong1",
      profilePic:
        "https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-1/277109173_1887746408083196_2354229315891508890_n.jpg?stp=dst-jpg_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_ohc=exxqwW37rn4AX_R7dd7&_nc_ht=scontent.fhan2-3.fna&oh=00_AfAeEkLcAW3LgunJ1zra86ziOKRaDDUdSFqCXBpF3ZZBTg&oe=644759F8",
    });
    
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);
  

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};