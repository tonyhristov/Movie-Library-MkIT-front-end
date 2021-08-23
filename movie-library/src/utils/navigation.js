const getNavigation = (user) => {
    const guestLinks = [
      {
        title: "My Movie Collection",
        link: "/",
      },
      {
        title: "Register",
        link: "/register",
      },
      {
        title: "Login",
        link: "/login",
      },
      
    ];
    const authLinks = [
        {
          title: "My Movie Collection",
          link: `/my-profile/${user && user.id}`,
        },
      ];
    
      const loggedIn = user && user.loggedIn;
      return loggedIn ? authLinks : guestLinks;
    };

    export default getNavigation;