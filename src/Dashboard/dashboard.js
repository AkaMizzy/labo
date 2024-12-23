import React from "react";
import Sidebar from "./Sidebar";
import Card from "./Card";
import { membersData } from "../Members/members";

function Dashboard() {
  return (
    <div className="d-flex mt-5">
      <Sidebar />
      <main className="content p-4 mt-5">
        <div className="container-fluid">
          <div className="row">
            <Card
              title="Membres de l'Équipe"
              value={membersData.length}
              percentage="22%"
              icon="fa-users"
              iconColor="primary"
              direction="success"
            />
            <Card
              title="Revenue"
              value="$43,594"
              percentage="2%"
              icon="fa-dollar-sign"
              iconColor="success"
              direction="danger"
            />
            <Card
              title="Taux d'Échec"
              value="15%"
              percentage="5%"
              icon="fa-chart-line"
              iconColor="warning"
              direction="success"
            />
            <Card
              title="Évènements"
              value="12"
              percentage="10%"
              icon="fa-calendar-check"
              iconColor="info"
              direction="success"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
