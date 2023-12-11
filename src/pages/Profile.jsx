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
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import AddToCart from "../components/AddToCart";
import CancelIcon from "@mui/icons-material/Cancel";
import IconButton from "@mui/material/IconButton";

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
                      <TableContainer >
              <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                <TableHead>
                  <TableRow>
                    <TableCell>Products</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Total</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {orders.item.map((item) => (
                    <TableRow key={item._id}>
                      <TableCell >
                        <div className="d-flex gap-5 align-items-center">
                          <img
                            className="cartImg"
                            src={item.image}
                            alt=""
                          />
                          <p>{item.name}</p>
                        </div>
                      </TableCell>
                      <TableCell >
                        <div className="d-flex align-items-center heightCart priceFix">
                          <p>${item.price}</p>
                        </div>
                      </TableCell>
                      <TableCell >
                        <div className="d-flex align-items-center heightCart">
                          <p>{qty}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex align-items-center heightCart  gap-5 ">
                          <div className="priceFix">
                            <p className="d-inline ">
                              ${total}
                            </p>
                          </div>
                          
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
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
                    <p className="m-0">Phone</p>
                    <small>{buyer.phone}</small>
                    <p className="m-0">Email</p>
                    <small>{buyer.email}</small>
                    <p className="m-0">Address</p>
                    <small>{buyer.direction}</small>
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
