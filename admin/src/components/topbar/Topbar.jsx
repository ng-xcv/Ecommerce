import React from "react";
import "./topbar.css";
import { NotificationsNone, ExitToAppTwoTone } from "@material-ui/icons";

import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { endSession } from "../../redux/apiCalls";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
`;
const UsernameContainer = styled.span`
   margin-left: 10px;
   text-transform: capitalize;
`;

const Username = styled.span`
   font-weight: bold;
`;
export default function Topbar() {
   const currentUser = useSelector((state) => state.user.currentUser);
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const handleClick = () => {
      endSession(dispatch);
      navigate("/login");
   };

   return (
      <div className="topbar">
         <div className="topbarWrapper">
            <div className="topLeft">
               <Container>
                  <img src={currentUser.img} alt="" className="topAvatar" />
                  <UsernameContainer>
                     Hi, <Username>{currentUser.username}</Username>
                  </UsernameContainer>
               </Container>
            </div>
            <div className="topCenter">
               <span className="logo">NG Admin</span>
            </div>
            <div className="topRight">
               <div className="topbarIconContainer">
                  <NotificationsNone />
                  <span className="topIconBadge">2</span>
               </div>

               <div title="Logout" className="topbarIconContainer">
                  <ExitToAppTwoTone onClick={handleClick} />
               </div>
            </div>
         </div>
      </div>
   );
}
