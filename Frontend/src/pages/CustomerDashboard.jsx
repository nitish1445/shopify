import React, { useState } from "react";
import {
  ShoppingBag,
  Heart,
  Package,
  User,
  Settings,
  LogOut,
  ChevronRight,
} from "lucide-react";

const CustomerDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const customerData = {
    name: "Arjun Patel",
    email: "arjun@example.com",
    joinDate: "January 2024",
    tier: "Gold",
  };

  const stats = [
    {
      label: "Total Orders",
      value: "24",
      icon: ShoppingBag,
      color: "bg-(--color-primary)",
    },
    {
      label: "Wishlist Items",
      value: "8",
      icon: Heart,
      color: "bg-(--color-secondary)",
    },
    {
      label: "Pending Delivery",
      value: "2",
      icon: Package,
      color: "bg-(--color-accent)",
    },
    {
      label: "Total Spent",
      value: "₹12,450",
      icon: ShoppingBag,
      color: "bg-(--color-primary-hover)",
    },
  ];

  const recentOrders = [
    {
      id: "#ORD001",
      date: "Mar 20, 2026",
      total: "₹3,299",
      status: "Delivered",
      items: 2,
    },
    {
      id: "#ORD002",
      date: "Mar 15, 2026",
      total: "₹1,599",
      status: "In Transit",
      items: 1,
    },
    {
      id: "#ORD003",
      date: "Mar 10, 2026",
      total: "₹2,149",
      status: "Processing",
      items: 3,
    },
  ];

  const quickActions = [
    { label: "Continue Shopping", icon: ShoppingBag },
    { label: "View Wishlist", icon: Heart },
    { label: "Track Orders", icon: Package },
    { label: "Profile Settings", icon: Settings },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Delivered":
        return "bg-(--color-accent-light) text-(--color-primary)";
      case "In Transit":
        return "bg-(--color-accent) text-white";
      case "Processing":
        return "bg-(--color-secondary) text-white";
      default:
        return "bg-(--color-border) text-(--color-text)";
    }
  };

  return (
    <div className="min-h-screen bg-(--color-background)">
      {/* Header */}
      <div className="bg-(--color-surface) border-b border-(--color-border) sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <div className="flex-1">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-(--color-text)">
                Welcome back, {customerData.name}!
              </h1>
              <p className="text-(--color-text-light) mt-1 text-sm sm:text-base">
                Here's your shopping summary
              </p>
            </div>

            <div className="flex gap-2 sm:gap-4">
              <button className="p-2 sm:p-3 hover:bg-(--color-accent-light) rounded-lg transition-colors">
                <Settings size={20} className="sm:w-6 sm:h-6 text-(--color-text-light)" />
              </button>

              <button className="p-2 sm:p-3 hover:bg-(--color-accent-light) rounded-lg transition-colors">
                <LogOut size={20} className="sm:w-6 sm:h-6 text-(--color-text-light)" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-8 sm:mb-10">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="bg-(--color-surface) rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col h-full">
                  <p className="text-(--color-text-light) text-xs sm:text-sm">
                    {stat.label}
                  </p>
                  <p className="text-lg sm:text-xl lg:text-2xl font-bold text-(--color-text) mt-2">
                    {stat.value}
                  </p>

                  <div className={`${stat.color} p-2 sm:p-3 rounded-lg mt-3 w-fit`}>
                    <Icon size={20} className="sm:w-6 sm:h-6 text-white" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* LEFT */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            {/* Quick Actions */}
            <div className="bg-(--color-surface) rounded-lg shadow-md p-4 sm:p-8">
              <h2 className="text-lg sm:text-xl font-bold text-(--color-text) mb-4 sm:mb-6">
                Quick Actions
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
                {quickActions.map((action, idx) => {
                  const Icon = action.icon;
                  return (
                    <button
                      key={idx}
                      className="flex flex-col items-center justify-center p-3 sm:p-4 bg-(--color-accent-light) hover:opacity-90 rounded-lg transition-opacity active:scale-95"
                    >
                      <Icon size={22} className="sm:w-7 sm:h-7 text-(--color-primary) mb-2" />
                      <span className="text-xs sm:text-sm text-(--color-text) text-center leading-tight">
                        {action.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Orders */}
            <div className="bg-(--color-surface) rounded-lg shadow-md p-4 sm:p-8">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 mb-4 sm:mb-6">
                <h2 className="text-lg sm:text-xl font-bold text-(--color-text)">
                  Recent Orders
                </h2>

                <span className="text-(--color-primary) flex items-center gap-1 text-sm sm:text-base hover:underline cursor-pointer">
                  View All <ChevronRight size={16} className="sm:w-5 sm:h-5" />
                </span>
              </div>

              <div className="space-y-3 sm:space-y-4 overflow-x-auto">
                {recentOrders.map((order, idx) => (
                  <div
                    key={idx}
                    className="border border-(--color-border) rounded-lg p-3 sm:p-4 hover:bg-(--color-background) transition-colors cursor-pointer"
                  >
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap gap-2 items-center">
                          <span className="font-semibold text-(--color-text) text-sm sm:text-base">
                            {order.id}
                          </span>

                          <span
                            className={`text-xs px-2 sm:px-3 py-1 rounded-full whitespace-nowrap ${getStatusColor(order.status)}`}
                          >
                            {order.status}
                          </span>
                        </div>

                        <p className="text-xs sm:text-sm text-(--color-text-light) mt-1">
                          {order.items} items • {order.date}
                        </p>
                      </div>

                      <p className="font-bold text-(--color-text) text-sm sm:text-base">
                        {order.total}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-4 sm:space-y-6">
            {/* Profile */}
            <div className="bg-(--color-primary) rounded-lg shadow-md p-4 sm:p-8 text-white">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                  <User size={24} className="sm:w-8 sm:h-8" />
                </div>

                <div className="min-w-0">
                  <p className="text-xs sm:text-sm opacity-80">Member Since</p>
                  <p className="font-semibold text-sm sm:text-base truncate">{customerData.joinDate}</p>
                </div>
              </div>

              <div className="pt-3 sm:pt-4 border-t border-white/20">
                <p className="text-xs opacity-70">MEMBERSHIP TIER</p>
                <p className="text-xl sm:text-2xl font-bold">{customerData.tier}</p>
              </div>
            </div>

            {/* Points */}
            <div className="bg-(--color-surface) rounded-lg shadow-md p-4 sm:p-6">
              <h3 className="font-bold text-(--color-text) mb-3 sm:mb-4 text-sm sm:text-base">
                Loyalty Points
              </h3>

              <div className="bg-(--color-accent-light) p-3 sm:p-4 rounded-lg mb-3 sm:mb-4">
                <p className="text-2xl sm:text-3xl font-bold text-(--color-text)">2,450</p>
                <p className="text-xs sm:text-sm text-(--color-text-light) mt-1">
                  Points available
                </p>
              </div>

              <button className="w-full bg-(--color-secondary) text-white py-2 sm:py-3 rounded-lg hover:bg-(--color-secondary-hover) transition-colors font-medium text-sm sm:text-base active:scale-95">
                Redeem Points
              </button>
            </div>

            {/* Help */}
            <div className="bg-(--color-surface) rounded-lg shadow-md p-4 sm:p-6">
              <h3 className="font-bold text-(--color-text) mb-3 sm:mb-4 text-sm sm:text-base">Need Help?</h3>

              <div className="space-y-2 text-(--color-primary) text-sm sm:text-base">
                <p className="cursor-pointer hover:underline">→ Track your order</p>
                <p className="cursor-pointer hover:underline">→ Return an item</p>
                <p className="cursor-pointer hover:underline">→ Contact support</p>
                <p className="cursor-pointer hover:underline">→ View FAQs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
