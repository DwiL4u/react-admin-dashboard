import React from "react";
import { motion } from "framer-motion";
import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import { UserCheck, UserPlus, Users as UsersIcon, UserX } from "lucide-react";
import UsersTable from "../assets/users/UsersTable";
import UserGrowChart from "../assets/users/UserGrowChart";
import UserActivityHeatmap from "../assets/users/UserActivityHeatmap";
import UserDemographicsChart from "../assets/users/UserDemographicsChart";


const userStats = {
  totalUsers: 152845,
  newUsersToday: 243,
  activeUsers: 98520,
  churnRate: "2.4%",
};

const UsersPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Users Dashboard" />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* stats */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Users"
            icon={UsersIcon}
            value={userStats.totalUsers.toLocaleString()}
            color="#6366F1"
          />
          <StatCard
            name="New Users Today"
            icon={UserPlus}
            value={userStats.newUsersToday}
            color="#10B981"
          />
          <StatCard
            name="Active Users"
            icon={UserCheck}
            value={userStats.activeUsers.toLocaleString()}
            color="#F59E0B"
          />
          <StatCard
            name="Churn Rate"
            icon={UserX}
            value={userStats.churnRate}
            color="#EF4444"
          />
                    </motion.div>
                    <UsersTable />
                    {/* user chart */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 mt-8 gap-6">
                          <UserGrowChart />
                          <UserActivityHeatmap />
                          <UserDemographicsChart />
                    </div>
      </main>
    </div>
  );
};

export default UsersPage;
