import React, { useState } from "react";
import { MDBInput, MDBAlert, MDBRow, MDBCol } from "mdbreact";

const Culculate = () => {
  const [totalIncome, setTotalIncome] = useState(0);
  const [monthlyNet, setMonthlyNet] = useState(0);
  const [workedDays, setWorkedDays] = useState(0)

  const dailyPay = (totalIncome / 12 / 30) * 0.6;
  const iskurPay = dailyPay * 30 > 4381 ? 4381 : dailyPay * 30;
  const isverenPay = monthlyNet / 30 * workedDays;
  const monthlyTotal = isverenPay + iskurPay;

  return (
    <div>
      <h2 className="diplay-4">Hesaplama</h2>
      <MDBInput
        onChange={e => setTotalIncome(e.target.value)}
        type="number"
        label="Son 12 aylık primi ödenmiş toplam kazançınız"
      >
        TL
      </MDBInput>
      <MDBRow>
        <MDBCol>
          <MDBInput
            onChange={e => setMonthlyNet(e.target.value)}
            type="number"
            label="Aylık net maaşınız"
          >
            TL
          </MDBInput>
        </MDBCol>
        <MDBCol>
          <MDBInput
            onChange={e => setWorkedDays(e.target.value)}
            type="number"
            label="Çalıştığınız / Çalışacağınız Gün Sayısı"
          >
            TL
          </MDBInput>
        </MDBCol>
      </MDBRow>

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
