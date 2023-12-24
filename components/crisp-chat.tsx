"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("541a85d4-3500-4474-8a3c-47848b58a84f");
  }, []);

  return null;
};
