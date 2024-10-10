import { motion } from "framer-motion";
import { CheckCircle, Clock, JapaneseYen, ShoppingBag } from "lucide-react";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import DailyOrders from "../components/orders/DailyOrders";
import OrderDistribution from "../components/orders/OrderDistribution";
import OrdersTable from "../components/orders/OrdersTable";


const orderStats = {
  totalOrders: "1, 234",
  pendingOrders: "567",
  completeOrders: "1,178",
  totalRevenue: "¥1,125,000",
};

const OrdersPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Orders Dashboard" />
      <main className="max-x-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            icon={ShoppingBag}
            name="Total Orders"
            value={orderStats.totalOrders}
            color="#6366f1"
          />
          <StatCard
            icon={Clock}
            name="Pending Orders"
            value={orderStats.pendingOrders}
            color="#8b5cf6"
          />
          <StatCard
            icon={CheckCircle}
            name="Complete Orders"
            value={orderStats.completeOrders}
            color="#ec4899"
          />
          <StatCard
            icon={JapaneseYen}
            name="Total Revenue"
            value={orderStats.totalRevenue}
            color="#10b981"
          />
                    </motion.div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                          <DailyOrders />
                          <OrderDistribution/>
                          
                    </div>
                    <OrdersTable />
      </main>
    </div>
  );
};

export default OrdersPage;
