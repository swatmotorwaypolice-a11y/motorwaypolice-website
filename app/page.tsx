"use client"

import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import DrivingLicenseVerification from "./driving-license/page";

export default function SomePage() {
  return (
    <div>
      <DrivingLicenseVerification />
    </div>
  );
}
