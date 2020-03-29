import React, { useState } from "react";
import { MDBInput, MDBAlert } from "mdbreact";

const Culculate = () => {
  const [monthlyNet, setMonthlyNet] = useState(0);
  const [workedDays, setWorkedDays] = useState(0)


  const totalIncome = monthlyNet * 12 * 1.35
  const dailyPay = (totalIncome / 12 / 30) * 0.6;
  const iskurPay = dailyPay * 30 > 4381 ? 4381 : dailyPay * 30;
  const isverenPay = monthlyNet / 30 * workedDays;
  const monthlyTotal = isverenPay + iskurPay;

  return (
    <div>
      <h2 className="diplay-4">Hesaplama</h2>

      <MDBInput
            onChange={e => setMonthlyNet(e.target.value)}
            type="number"
            label="Aylık Agi Haric Net Maas"
          >
            TL
          </MDBInput>
  
     
          <MDBInput
            onChange={e => setWorkedDays(e.target.value)}
            type="number"
            label="Varsa çalışma günü sayısı "
          >
            Gün Sayısı
          </MDBInput>
       


      <MDBAlert color="info">
        <small className="d-flex justify-content-evenly">Günlük Hakediş:</small>
        {dailyPay.toFixed(1)} TL
      </MDBAlert>
      <MDBAlert color={iskurPay === 4381 ? "danger" : "primary"}>
        <small className="d-flex justify-content-evenly">
          Iskur Aylik Ödeme Tutarı:
        </small>
        {iskurPay.toFixed(1)} TL
        {iskurPay === 4381
          ? "  --IsKur un ödeme miktari brüt asgari ücretin %150 sinden fazla olamaz! "
          : ""}
      </MDBAlert>
      <MDBAlert color="warning">
        <small className="d-flex justify-content-evenly">
          Isveren Aylik Ödeme:{" "}
        </small>
        {isverenPay.toFixed(1)} TL
      </MDBAlert>
      <MDBAlert color="success">
        <small className="d-flex justify-content-evenly">Toplam Aylik: </small>
        {monthlyTotal.toFixed(1)} TL
      </MDBAlert>
    </div>
  );
};

export default Culculate;
