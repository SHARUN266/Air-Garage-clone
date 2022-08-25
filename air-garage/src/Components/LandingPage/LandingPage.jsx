import { Box } from "@chakra-ui/react";
import React from "react";
import BetterDeal from "./BetterDeal";
import Card from "./Card";
import Main from "./Dashboard/Main";
import NetRevenue from "./NetRevenue";
import PartnerSpotlight from "./PartnerSpotlight";
import Position from "./Position";
import RevenuePartner from "./RevenuePartner";
import TalkToSales from "./TalkToSales";
import TransparentData from "./TransparentData";
import WorkForYou from "./WorkForYou";

export default function LandingPage() {
  return (
    <Box m="auto" h="auto" p="1rem" width={["100%", "100%", "100%", "65%"]}>
      <TalkToSales />
      <RevenuePartner />
      <NetRevenue />
      <Position />
      <BetterDeal />
      <Card/>
      <TransparentData />
      <Main/>
      <PartnerSpotlight/>
      <WorkForYou/>
    </Box>
  );
}
