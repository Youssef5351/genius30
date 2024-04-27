"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("b8ddf54b-ef92-4da4-baad-9ffb5629b561");
  }, []);

  return null;
};