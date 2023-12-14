import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
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
import Footer from "../components/Footer";
import EditProfile from "../components/EditProfile";
import DeleteButton from "../components/DeleteButton";
import { useNavigate } from "react-router-dom";

function Profile({ hovered, setShowNavAndFooter }) {
  const navigate = useNavigate();
  const Buyer = useSelector((state) => state.buyer);
  const [editProfile, setEditProfile] = useState(false);
  const [refresh, setRefresh] = useState(true);
  const [buyer, setBuyer] = useState("");

  useEffect(() => {
    !Buyer && navigate("/");
    setShowNavAndFooter(true);
    const getBuyer = async () => {
      try {
        const response = await axios({
          method: "get",
          url: `${import.meta.env.VITE_URL_BASE_API}/buyer/${Buyer.id}`,
          headers: {
            Authorization: `Bearer ${Buyer.token}`,
          },
        });
        setBuyer(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    getBuyer();
  }, [refresh]);

  const handleEdit = () => {
    setEditProfile(true);
  };

  return (
    <>
      {" "}
      {buyer != null && buyer.length != 0 ? (
        <div>
          <ButtonUp />

          <div> </div>

          <div style={{ backgroundColor: "#F5F4EB" }}>
            {Buyer && buyer ? (
              <div className={hovered ? "bg-dark-hover-nav " : ""}>
                <div className="container " style={{ paddingTop: "4rem" }}>
                  <h1
                    className="text-center woolwich "
                    style={{ paddingBottom: "2rem" }}
                  >
                    Profile
                  </h1>
                  <div className="displayProfile gap-5 mt-4">
                    <div>
                      {editProfile ? (
                        <EditProfile
                          buyer={buyer}
                          refresh={refresh}
                          setRefresh={setRefresh}
                          editProfile={editProfile}
                          setEditProfile={setEditProfile}
                        />
                      ) : (
                        <Card
                          style={{
                            width: "18rem",
                            backgroundColor: "rgb(58, 145, 63)",
                          }}
                          className="widthCard"
                        >
                          <Card.Body>
                            <h3 className="text-white text-center ">
                              {buyer.firstname} {buyer.lastname}
                            </h3>
                            <p className="text-white text-center ">
                              {buyer.email}
                            </p>
                            <div
                              className="rounded p-2"
                              style={{ backgroundColor: "white" }}
                            >
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
                              <div className="d-flex justify-content-center gap-2 pb-2 pt-2">
                                <div className="d-flex flex-column gap-2 ">
                                  <button
                                    onClick={handleEdit}
                                    className="btn btnColorEdit btnProfile fs-5"
                                  >
                                    Edit
                                  </button>
                                  <DeleteButton />
                                </div>
                              </div>
                            </div>
                          </Card.Body>
                        </Card>
                      )}
                    </div>{" "}
                    <div className="orderClass">
                      <h2>Orders</h2>
                      {buyer.orders[0] ? (
                        <div>
                          {buyer.orders.map((order) => (
                            <div key={order._id}>
                              <Accordion>
                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel1a-content"
                                  id="panel1a-header"
                                >
                                  <Typography>
                                    Order id: {order._id} Date placed:{" "}
                                    {order.createdAt.substring(0, 10)} Total
                                    value: ${order.totalValue}
                                  </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                  <TableContainer>
                                    <Table
                                      sx={{ minWidth: 700 }}
                                      aria-label="spanning table"
                                    >
                                      <TableHead>
                                        <TableRow>
                                          <TableCell>Products</TableCell>
                                          <TableCell>Price</TableCell>
                                          <TableCell>Quantity</TableCell>
                                          <TableCell>Total</TableCell>
                                        </TableRow>
                                      </TableHead>
                                      <TableBody>
                                        {order.items.map((item) => (
                                          <TableRow key={item.item._id}>
                                            <TableCell>
                                              <div className="d-flex gap-5 align-items-center">
                                                <img
                                                  className="orderImg"
                                                  src={item.item.image}
                                                  alt=""
                                                />
                                                <p className="m-0">
                                                  {item.item.name}
                                                </p>
                                              </div>
                                            </TableCell>
                                            <TableCell>
                                              <div className="d-flex align-items-center  priceFix">
                                                <p className="m-0">
                                                  ${item.item.price}
                                                </p>
                                              </div>
                                            </TableCell>
                                            <TableCell>
                                              <div className="d-flex align-items-center ">
                                                <p className="m-0">
                                                  {item.qty}
                                                </p>
                                              </div>
                                            </TableCell>
                                            <TableCell>
                                              <div className="d-flex align-items-center   gap-5 ">
                                                <div className="priceFix">
                                                  <p className="d-inline ">
                                                    ${item.total}
                                                  </p>
                                                </div>
                                              </div>
                                            </TableCell>
                                          </TableRow>
                                        ))}
                                      </TableBody>
                                    </Table>
                                  </TableContainer>
                                </AccordionDetails>
                              </Accordion>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div>
                          <p>You haven't placed any orders yet.</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div></div>
            )}
            <Footer />
          </div>
        </div>
      ) : (
        <div
          className="w-100 d-flex justify-content-center align-items-center"
          style={{ height: "50vh" }}
        >
          <span className="loader"></span>
        </div>
      )}
    </>
  );
}

export default Profile;
