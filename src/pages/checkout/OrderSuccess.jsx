import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";

const OrderSuccess = () => {

  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-100 min-h-screen">

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ delay: 0.2,duration: 0.4, type: "spring" }}
  className="bg-white space-y-5 shadow-2xl hover:shadow-gray-400  transition-all ease-in-out rounded-2xl p-4 sm:p-12 text-center max-w-lg w-full"
      >
        {/* <div className="bg-white space-y-5 shadow-2xl hover:shadow-gray-400  transition-all ease-in-out rounded-2xl p-8 md:p-12 text-center max-w-lg w-full "> */}

        <FaCheckCircle className="text-green-500 text-5xl sm:text-7xl mx-auto animate-bounce " />

        <h1 className="text-2xl md:text-[2rem] font-bold text-gray-800 whitespace-nowrap ">
          Order Placed Successfully 🎉
        </h1>

        <p className="text-gray-600 text-sm sm:text-lg font-[500] ">
          Thank you for your purchase. Your order has been confirmed and will be processed shortly.
        </p>

        <div className="space-y-3">

          <button
            onClick={() => navigate('/confirm/orderPage')}
            className="w-full cursor-pointer bg-violet-600 text-white py-2 sm:py-3 rounded-xl font-medium hover:bg-violet-700 transition"
          >
            View Orders
          </button>

          <button
            onClick={() => navigate('/')}
            className="w-full cursor-pointer border border-gray-300 py-2 sm:py-3 rounded-xl font-medium hover:bg-gray-100 transition"
          >
            Continue Shopping
          </button>

        </div>

      {/* </div> */}
      </motion.div>

    </div>
  )
}

export default OrderSuccess