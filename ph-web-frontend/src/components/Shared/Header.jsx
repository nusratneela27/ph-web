import { Avatar, Button, Navbar, Tooltip } from "flowbite-react";
import Container from "./Container";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";
import logo from "../../assets/header_logo.webp";
import { FaCoins } from "react-icons/fa";
import { saveUser } from "../../api/auth";

const Header = () => {
  const { user, signInWithGoogle, logOut, coin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  // console.log(coin);

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        // console.log(result.user);
        toast.success("Google Login successful");
        //save user in DB
        saveUser(result.user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  const handleLogOut = () => {
    logOut()
      .then(() => toast.success("successfully Logout"))
      .catch((err) => toast.error(err));
  };

  return (
    <div className="bg-slate-100">
      <Container>
        <Navbar fluid rounded className="bg-slate-100">
          <Navbar.Brand>
            <NavLink to="/">
              <img src={logo} alt="" />
            </NavLink>
          </Navbar.Brand>
          <div className="flex md:order-2">
            {user ? (
              <>
                <div>
                  <Tooltip content={user?.email} placement="left">
                    <Avatar
                      img={user?.photoURL}
                      className="mx-2"
                      status="online"
                    />
                  </Tooltip>
                </div>
                <Button onClick={handleLogOut} gradientDuoTone="tealToLime">
                  <NavLink>LogOut</NavLink>
                </Button>
              </>
            ) : (
              <Button onClick={handleGoogleSignIn} gradientDuoTone="tealToLime">
                Google Login
              </Button>
            )}
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <NavLink
              to={"/"}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#646e19] border-b-4 border-[#646e19]"
                  : "hover:text-[#646e19]"
              }
            >
              Home
            </NavLink>
            <NavLink
              to={"/recipes"}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#646e19] border-b-4 border-[#646e19]"
                  : "hover:text-[#646e19]"
              }
            >
              Recipes
            </NavLink>
            {user && (
              <>
                <NavLink
                  to={"/add-recipes"}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-[#646e19] border-b-4 border-[#646e19]"
                      : "hover:text-[#646e19]"
                  }
                >
                  Add Recipes
                </NavLink>
                <NavLink
                  to={"/coins"}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-[#646e19] border-b-4 border-[#646e19]"
                      : "hover:text-[#646e19]"
                  }
                >
                  <div className="flex items-center gap-2">
                    {" "}
                    Coins <FaCoins></FaCoins> {coin}
                  </div>
                </NavLink>
              </>
            )}
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default Header;
