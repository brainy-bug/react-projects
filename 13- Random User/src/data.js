import React from "react";
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from "react-icons/fa";

export const icons = [
  {
    label: "name",
    icon: <FaUser />,
  },
  {
    label: "email",
    icon: <FaEnvelopeOpen />,
  },
  {
    label: "age",
    icon: <FaCalendarTimes />,
  },
  {
    label: "street",
    icon: <FaMap />,
  },
  {
    label: "phone",
    icon: <FaPhone />,
  },
  {
    label: "password",
    icon: <FaLock />,
  },
];
