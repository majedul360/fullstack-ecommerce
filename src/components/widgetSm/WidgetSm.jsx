import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useEffect } from "react";
import { useState } from "react";
import { userRequest } from "../../requestMethods";

export default function WidgetSm() {
  const [users, setusers] = useState([]);
  useEffect(() => {
    const getUsersData = async () => {
      try {
        const res = await userRequest.get("/users/?new=true");
        setusers(res?.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUsersData();
  }, []);
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {users?.map((user) => {
          return (
            <li className="widgetSmListItem" key={user?._id}>
              <img
                src={
                  user?.img ||
                  "https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                }
                alt=""
                className="widgetSmImg"
              />
              <div className="widgetSmUser">
                <span className="widgetSmUsername">{user?.username}</span>
              </div>
              <button className="widgetSmButton">
                <Visibility className="widgetSmIcon" />
                Display
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
