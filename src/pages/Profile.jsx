import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Profile({ hovered, setShowNavAndFooter }) {
  const dispatch = useDispatch();
  const buyer = useSelector((state) => state.buyer);
  
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setShowNavAndFooter(true);
    const getOrders = async () => {
      try {
        const response = await axios({
          method: "get",
          url: `${import.meta.env.VITE_URL_BASE_API}/order/${buyer.id}`,
        });
        setOrders(response.data);
        console.log(orders);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    getOrders();
  }, []);

  return (
    <>
      <div className={hovered ? "bg-dark-hover-nav " : ""}>
        <div className="container">
          <h1 className="text-center ">Profile</h1>
          <div className="d-flex justify-content-center gap-5">
            <div>
              <h2>Orders</h2>

              {orders.map((order) => (
                <div key={order._id}>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>
                        Order id: {order._id} Date placed: {order.createdAt.substring(0,10)} Total
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              ))}
            </div>
            <div>
              <Card
                style={{ width: "18rem", backgroundColor: "rgb(58, 145, 63)" }}
              >
                <Card.Body>
                  <h3 className="text-white text-center ">
                    {buyer.firstname} {buyer.lastname}
                  </h3>
                  <p className="text-white text-center ">{buyer.email}</p>
                  <div className="rounded" style={{ backgroundColor: "white" }}>
                    <p className="m-0">Firstname:</p>
                    <small>{buyer.firstname}</small>
                    <p className="m-0">Lastname:</p>
                    <small>{buyer.lastname}</small>
                    <p className="m-0">Email</p>
                    <small>{buyer.email}</small>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
