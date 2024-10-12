import "./styles.css";
import React from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useFollowPointer } from "./use-follow-pointer";

const Cursor = () => {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return ( 
    <>
  <div>
  <motion.div ref={ref} className="box" style={{ x, y }} />
  </div>
  </>
  );
}

export default Cursor;
