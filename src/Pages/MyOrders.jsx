

// import React, { useEffect, useState } from "react";

// const MyOrders = () => {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
//     setOrders(storedOrders);
//   }, []);

//   const getImageUrl = (images) => {
//     return images?.[0] || "/path/to/default/image.jpg"; // fallback image
//   };

//   return (
//     <div className="max-w-4xl mx-auto px-4 py-10">
//       <h1 className="text-2xl font-bold mb-6">My Orders</h1>

//       {orders.length === 0 ? (
//         <p>You haven’t placed any orders yet.</p>
//       ) : (
//         orders.map((order) => (
//           <div
//             key={order.id}
//             className="border p-4 mb-6 rounded shadow-sm bg-white"
//           >
//             <div className="flex justify-between items-center mb-2">
//               <p className="text-gray-600 text-sm">Order ID: {order.id}</p>
//               <p className="text-sm text-gray-600">{order.date}</p>
//             </div>

//             <div className="space-y-4">
//               {order.items.map((item) => (
//                 <div
//                   key={item.id}
//                   className="flex items-center justify-between gap-4 sm:gap-6"
//                 >
//                   <div className="flex items-center gap-4 sm:gap-6">
//                     <img
//                       src={getImageUrl(item.images)}
//                       alt={item.title}
//                       className="w-16 h-16 object-cover rounded sm:w-20 sm:h-20"
//                     />
//                     <div>
//                       <p className="font-medium text-sm sm:text-base">
//                         {item.title}
//                       </p>
//                       <p className="text-xs sm:text-sm text-gray-500">
//                         Qty: {item.quantity}
//                       </p>
//                     </div>
//                   </div>
//                   <span className="font-semibold text-sm sm:text-base">
//                     ${(item.price * item.quantity).toFixed(2)}
//                   </span>
//                 </div>
//               ))}
//             </div>

//             <p className="mt-4 font-bold text-right text-sm sm:text-base">
//               Total: ${order.total.toFixed(2)}
//             </p>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default MyOrders;

import React, { useEffect, useState } from "react";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  const getImageUrl = (images) => {
    return images?.[0] || "/path/to/default/image.jpg";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f9fafc] to-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-10 text-center text-gray-900 tracking-tight">
          My Orders
        </h1>

        {orders.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">You haven’t placed any orders yet.</p>
        ) : (
          orders.map((order) => (
            <div
              key={order.id}
              className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl p-6 mb-8 transition duration-300"
            >
              {/* Order Info */}
              <div className="flex justify-between items-center mb-4">
                <p className="text-sm text-gray-500">Order ID: <span className="font-medium text-gray-800">{order.id}</span></p>
                <p className="text-sm text-gray-500">{order.date}</p>
              </div>

              {/* Items */}
              <div className="space-y-5 divide-y divide-gray-200">
                {order.items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center pt-5">
                    <div className="flex items-center gap-4">
                      <img
                        src={getImageUrl(item.images)}
                        alt={item.title}
                        className="w-20 h-20 rounded-lg object-cover border border-gray-100"
                      />
                      <div>
                        <p className="text-base font-medium text-gray-900">{item.title}</p>
                        <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <span className="text-base font-semibold text-gray-800">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Total */}
              <div className="mt-6 text-right">
                <p className="text-lg font-bold text-gray-900">
                  Total: ${order.total.toFixed(2)}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyOrders;
