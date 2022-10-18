import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";

export default function Home() {
  const [stats, setStats] = useState([]);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  useEffect(() => {
    const getUserStates = async () => {
      try {
        const res = await userRequest.get("/users/stats");
        res?.data?.map((iteam) => {
          setStats((prev) => [
            ...prev,
            { name: months[iteam._id - 1], "Active User": iteam.total },
          ]);
        });
      } catch (err) {}
    };
    getUserStates();
  }, []);
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={stats} title="User Analytics" grid dataKey="Active User" />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
