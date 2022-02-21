import React, { createContext } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [newUser, setNewuser] = React.useState({});
  const [isAuth1, setIsAuth1] = React.useState(false);
  const [isAuth2, setIsAuth2] = React.useState(false);
  const [finalAuth, setFinalAuth] = React.useState(false);
  

  const [user, setUser] = React.useState("");

  const handleChange = (e) => {
    let{name, value, type, checked} = e.currentTarget;
    console.log(name, value, type, checked);

    value = type === "checkbox" ? checked : value;

    setNewuser({
      ...newUser,
      [name]: value
    });
  }
  console.log("User = ", newUser)

  const handleSubmit = () => {
      fetch("http://localhost:3000/user", {
          method: "POST",
          body: JSON.stringify(newUser),
          headers: {
            'Content-Type': 'application/json'
          }
      })
      .then( (res) => console.log(res))
      .catch(err => console.log(err));
  }
  

  return (
    <AuthContext.Provider value={{ isAuth1, setIsAuth1, isAuth2, setIsAuth2, finalAuth, setFinalAuth, newUser, user, handleChange, handleSubmit }}>
      {children}
    </AuthContext.Provider>
  );
};
