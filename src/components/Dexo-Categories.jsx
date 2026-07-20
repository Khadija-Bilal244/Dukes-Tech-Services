// DexoCategories.jsx - DEXO POS & ERP Categories with Dark Mode
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Cloud, 
  WifiOff, 
  CheckCircle, 
  ArrowRight,
  ShoppingCart,
  Users,
  BarChart3,
  Printer,
  Smartphone,
  CreditCard,
  Package,
  Gift,
  Clock,
  Shield,
  Download,
  Zap,
  Globe,
  Database,
  RefreshCw,
  Settings,
  Bell,
  FileText,
  Layers,
  Monitor,
  Tablet,
  Wallet,
  Receipt,
  Truck,
  Building2,
  UserCircle,
  PieChart,
  TrendingUp,
  Briefcase,
  Calendar,
  DollarSign,
  Barcode,
  Boxes
} from "lucide-react";
import dexoLogo from "../assets/dexologo.png";

const posFeatures = {
  online: [
    { icon: Cloud, title: "Cloud Sync", description: "Real-time data synchronization across all devices" },
    { icon: Globe, title: "Multi-Store Management", description: "Manage multiple locations from one dashboard" },
    { icon: Database, title: "Automatic Backup", description: "Secure cloud backup for all your data" },
    { icon: RefreshCw, title: "Real-Time Updates", description: "Instant inventory and sales updates" },
    { icon: Smartphone, title: "Mobile Access", description: "Access your store from anywhere" },
    { icon: BarChart3, title: "Analytics Dashboard", description: "Comprehensive sales and performance reports" },
  ],
  offline: [
    { icon: WifiOff, title: "Works Offline", description: "Full functionality without internet connection" },
    { icon: Shield, title: "Local Storage", description: "Secure local data storage" },
    { icon: Clock, title: "Sync When Online", description: "Automatic sync when internet is restored" },
    { icon: Printer, title: "Receipt Printing", description: "Direct receipt and invoice printing" },
    { icon: Package, title: "Inventory Management", description: "Complete offline inventory control" },
    { icon: Settings, title: "Standalone Operation", description: "Works independently without internet" },
  ]
};

// ERP Modules
const erpModules = [
  { icon: Wallet, title: "Accounts Receivable", description: "Manage customer payments and outstanding invoices" },
  { icon: DollarSign, title: "Accounts Payable", description: "Track supplier payments and manage expenses" },
  { icon: Receipt, title: "Expense Tracking", description: "Monitor and categorize business expenses" },
  { icon: TrendingUp, title: "Income Tracking", description: "Track all revenue streams and income sources" },
  { icon: FileText, title: "Financial Statements", description: "Generate comprehensive financial reports" },
  { icon: PieChart, title: "Profit & Loss Reports", description: "Analyze business profitability" },
  { icon: BarChart3, title: "Balance Sheet", description: "View complete financial position" },
  { icon: Layers, title: "Trial Balance", description: "Ensure accurate bookkeeping" },
];

// POS Features
const posModules = [
  { icon: ShoppingCart, title: "Fast Invoice Generation", description: "Create invoices quickly and efficiently" },
  { icon: Barcode, title: "Barcode Support", description: "Scan and manage products with barcodes" },
  { icon: Printer, title: "Receipt Printing", description: "Print receipts and invoices" },
  { icon: CreditCard, title: "Multiple Payment Methods", description: "Accept various payment types" },
  { icon: Gift, title: "Discount Management", description: "Apply and manage discounts" },
  { icon: RefreshCw, title: "Sales Returns", description: "Handle returns and exchanges" },
  { icon: Users, title: "Customer Billing", description: "Manage customer billing history" },
  { icon: FileText, title: "Daily Sales Reports", description: "Track daily sales performance" },
  { icon: Settings, title: "Tax Management", description: "Handle tax calculations and reporting" },
];

// Inventory Modules
const inventoryModules = [
  { icon: Package, title: "Product Management", description: "Add, edit, and manage products" },
  { icon: Layers, title: "Category Management", description: "Organize products by categories" },
  { icon: Building2, title: "Brand Management", description: "Manage product brands" },
  { icon: Monitor, title: "Stock Monitoring", description: "Monitor stock levels in real time" },
  { icon: Bell, title: "Low Stock Alerts", description: "Get notified when stock is low" },
  { icon: Clock, title: "Batch Tracking", description: "Track product batches and expiry" },
  { icon: Boxes, title: "Product Variants", description: "Manage products with multiple variants" },
  { icon: Globe, title: "Warehouse Management", description: "Manage multiple warehouses" },
  { icon: Database, title: "Inventory Valuation", description: "Track inventory value" },
  { icon: RefreshCw, title: "Stock Transfers", description: "Transfer stock between locations" },
  { icon: Truck, title: "Purchase Order Integration", description: "Sync inventory with purchase orders" },
];

// Purchase Modules
const purchaseModules = [
  { icon: Truck, title: "Purchase Orders", description: "Create and manage purchase orders" },
  { icon: Users, title: "Supplier Database", description: "Maintain supplier information" },
  { icon: Package, title: "Goods Receiving", description: "Receive and verify goods" },
  { icon: RefreshCw, title: "Purchase Returns", description: "Handle purchase returns" },
  { icon: DollarSign, title: "Outstanding Payments", description: "Track pending payments" },
  { icon: FileText, title: "Supplier Statements", description: "Generate supplier statements" },
  { icon: TrendingUp, title: "Vendor Performance Tracking", description: "Evaluate and track supplier performance" },
];

// Sales Modules
const salesModules = [
  { icon: FileText, title: "Customer Quotations", description: "Create and manage quotes" },
  { icon: ShoppingCart, title: "Sales Orders", description: "Process and track sales orders" },
  { icon: Receipt, title: "Sales Invoices", description: "Generate and manage invoices" },
  { icon: CreditCard, title: "Customer Payments", description: "Process customer payments" },
  { icon: RefreshCw, title: "Sales Returns", description: "Handle sales returns" },
  { icon: DollarSign, title: "Outstanding Receivables", description: "Track pending customer receivables" },
  { icon: Users, title: "Customer History", description: "View complete customer history" },
];

// Employee Modules
const employeeModules = [
  { icon: UserCircle, title: "Employee Profiles", description: "Manage employee information" },
  { icon: Calendar, title: "Attendance Tracking", description: "Track employee attendance" },
  { icon: BarChart3, title: "Employee Performance Records", description: "Monitor employee performance" },
  { icon: Building2, title: "Department Management", description: "Organize by departments" },
  { icon: Shield, title: "User Roles", description: "Set role-based permissions" },
  { icon: Clock, title: "Activity Monitoring", description: "Track user activities" },
];

// Reports
const reportModules = [
  { icon: BarChart3, title: "Sales Reports", description: "Comprehensive sales analysis" },
  { icon: Truck, title: "Purchase Reports", description: "Detailed purchase history" },
  { icon: Package, title: "Inventory Reports", description: "Inventory status and valuation" },
  { icon: Users, title: "Customer Reports", description: "Customer insights and analytics" },
  { icon: Building2, title: "Supplier Reports", description: "Supplier performance tracking" },
  { icon: DollarSign, title: "Financial Reports", description: "Complete financial overview" },
  { icon: UserCircle, title: "Employee Reports", description: "Employee performance metrics" },
  { icon: TrendingUp, title: "Profit Analysis", description: "Detailed profit analysis" },
  { icon: Receipt, title: "Expense Reports", description: "Track and analyze business expenses" },
  { icon: Briefcase, title: "Business Performance Dashboard", description: "Monitor overall business performance" },
];

const onlineBenefits = [
  "Real-time inventory tracking",
  "Multi-store synchronization",
  "Cloud-based reporting",
  "Remote access and management",
  "Automatic software updates",
  "24/7 customer support"
];

const offlineBenefits = [
  "No internet connection needed",
  "Uninterrupted operations",
  "Secure local data storage",
  "Works in remote locations",
  "Automatic sync when online",
  "Faster transaction processing"
];

export default function DexoCategories() {
  const [activeTab, setActiveTab] = useState("online");
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = activeTab === "online" ? posFeatures.online : posFeatures.offline;
  const benefits = activeTab === "online" ? onlineBenefits : offlineBenefits;

  return (
    <section id="dexoservices" className="bg-white dark:bg-[#0a1628] py-16 md:py-20 lg:py-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-5">
            <motion.img 
              src={dexoLogo} 
              alt="DEXO Logo" 
              className="h-18 w-18 sm:h-16 sm:w-16 rounded-xl shadow-md shadow-[#1CA7B8]/20 cursor-pointer"
              whileHover={{ scale: 1.15, rotate: 5 }}
              transition={{ duration: 0.3 }}
            />
            <span className="inline-block rounded-full bg-[#F2FAFB] dark:bg-[#0e1f3a] px-4 py-1.5 text-base font-bold uppercase tracking-[0.15em] text-[#1CA7B8] font-sans border border-[#1CA7B8]/20 dark:border-[#1CA7B8]/40">
              DEXO Desktop ERP & POS
            </span>
          </div>
          <h2 className="mt-4 font-sans text-3xl sm:text-4xl md:text-5xl font-bold text-[#0E2A43] dark:text-white transition-colors duration-300">
            Choose Your <span className="text-[#1CA7B8]">POS Solution</span>
          </h2>
          <div className="flex justify-center gap-2 mt-3">
            <span className="inline-block h-1 w-12 rounded-full bg-[#1CA7B8]" />
            <span className="inline-block h-1 w-6 rounded-full bg-[#1CA7B8]/30" />
          </div>
          <p className="mt-4 text-[#0E2A43]/60 dark:text-white max-w-2xl mx-auto font-sans text-lg sm:text-lg leading-relaxed transition-colors duration-300">
            Whether you need cloud-based management or reliable offline operations, 
            we have the perfect POS solution for your business.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-[#F2FAFB] dark:bg-[#0e1f3a] rounded-full p-1 border border-[#1CA7B8]/10 dark:border-[#1CA7B8]/20 transition-colors duration-300">
            <button
              onClick={() => setActiveTab("online")}
              className={`px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 ${
                activeTab === "online"
                  ? "bg-gradient-to-r from-[#1CA7B8] to-[#0E2A43] text-white shadow-lg shadow-[#1CA7B8]/25"
                  : "text-[#0E2A43]/60 dark:text-gray-400 hover:text-[#0E2A43] dark:hover:text-white"
              }`}
            >
              <Cloud className="inline-block h-5 w-5 mr-2" />
              Online POS
            </button>
            <button
              onClick={() => setActiveTab("offline")}
              className={`px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 ${
                activeTab === "offline"
                  ? "bg-gradient-to-r from-[#1CA7B8] to-[#0E2A43] text-white shadow-lg shadow-[#1CA7B8]/25"
                  : "text-[#0E2A43]/60 dark:text-gray-400 hover:text-[#0E2A43] dark:hover:text-white"
              }`}
            >
              <WifiOff className="inline-block h-5 w-5 mr-2" />
              Offline POS
            </button>
          </div>
        </div>

        {/* POS Features Grid */}
        <div ref={ref} className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.05 }}
                  className="group bg-white dark:bg-[#142a4a] p-4 sm:p-5 rounded-xl shadow-md dark:shadow-[#0a1628] hover:shadow-xl dark:hover:shadow-[#1CA7B8]/20 transition-all duration-300 hover:-translate-y-1 border border-[#0E2A43]/5 dark:border-[#1a3a5a] hover:border-[#1CA7B8]/40 dark:hover:border-[#1CA7B8]/50"
                >
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#1CA7B8]/10 dark:bg-[#1CA7B8]/20 text-[#1CA7B8] transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-[#1CA7B8] group-hover:to-[#0E2A43] group-hover:text-white group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-3 font-sans text-lg font-bold text-[#0E2A43] dark:text-white transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="mt-1 font-sans text-base text-[#0E2A43]/60 dark:text-white/60 leading-relaxed transition-colors duration-300">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            key={`benefits-${activeTab}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#F2FAFB] dark:bg-[#0e1f3a] rounded-2xl p-6 sm:p-8 transition-colors duration-300 hover:shadow-xl dark:hover:shadow-[#1CA7B8]/20 border border-transparent hover:border-[#1CA7B8]/40 dark:hover:border-[#1CA7B8]/50"
          >
            <h3 className="font-sans text-xl font-bold text-[#0E2A43] dark:text-white mb-4 transition-colors duration-300">
              {activeTab === "online" ? "☁️ Online POS Benefits" : "📶 Offline POS Benefits"}
            </h3>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + (index * 0.05) }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="h-5 w-5 text-[#1CA7B8] flex-shrink-0 mt-0.5" />
                  <span className="font-sans text-sm sm:text-base text-[#0E2A43]/80 dark:text-gray-300 transition-colors duration-300">
                    {benefit}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* ERP Modules Section */}
        <div className="mt-16">
          <h3 className="text-center font-sans text-2xl sm:text-3xl font-bold text-[#0E2A43] dark:text-white mb-4 transition-colors duration-300">
            Complete <span className="text-[#1CA7B8]">ERP Modules</span>
          </h3>
          <p className="text-center text-[#0E2A43]/60 dark:text-white max-w-2xl mx-auto font-sans text-lg sm:text-lg mb-10 transition-colors duration-300">
            All-in-one business management solution with integrated modules for every aspect of your operations.
          </p>

          {/* Accounting Modules */}
          <div className="mb-12">
            <h4 className="font-sans text-lg font-bold text-[#0E2A43] dark:text-white mb-4 flex items-center gap-2 transition-colors duration-300">
              <Wallet className="h-5 w-5 text-[#1CA7B8]" />
              Accounting & Finance
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {erpModules.map((module, index) => {
                const Icon = module.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.05 }}
                    className="bg-[#F2FAFB] dark:bg-[#0e1f3a] p-4 rounded-xl border border-[#0E2A43]/5 dark:border-[#1a3a5a] hover:border-[#1CA7B8]/40 dark:hover:border-[#1CA7B8]/50 transition-all duration-300 hover:shadow-md dark:hover:shadow-[#1CA7B8]/20"
                  >
                    <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#1CA7B8]/10 dark:bg-[#1CA7B8]/20 text-[#1CA7B8]">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h5 className="mt-2 font-sans text-lg font-bold text-[#0E2A43] dark:text-white transition-colors duration-300">
                      {module.title}
                    </h5>
                    <p className="mt-1 font-sans text-base text-[#0E2A43]/60 dark:text-white/60 transition-colors duration-300">
                      {module.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* POS Modules */}
          <div className="mb-12">
            <h4 className="font-sans text-lg font-bold text-[#0E2A43] dark:text-white mb-4 flex items-center gap-2 transition-colors duration-300">
              <ShoppingCart className="h-5 w-5 text-[#1CA7B8]" />
              Point of Sale
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {posModules.map((module, index) => {
                const Icon = module.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.05 }}
                    className="bg-[#F2FAFB] dark:bg-[#0e1f3a] p-4 rounded-xl border border-[#0E2A43]/5 dark:border-[#1a3a5a] hover:border-[#1CA7B8]/40 dark:hover:border-[#1CA7B8]/50 transition-all duration-300 hover:shadow-md dark:hover:shadow-[#1CA7B8]/20"
                  >
                    <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#1CA7B8]/10 dark:bg-[#1CA7B8]/20 text-[#1CA7B8]">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h5 className="mt-2 font-sans text-lg font-bold text-[#0E2A43] dark:text-white transition-colors duration-300">
                      {module.title}
                    </h5>
                    <p className="mt-1 font-sans text-base text-[#0E2A43]/60 dark:text-white/60 transition-colors duration-300">
                      {module.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Inventory Modules */}
          <div className="mb-12">
            <h4 className="font-sans text-lg font-bold text-[#0E2A43] dark:text-white mb-4 flex items-center gap-2 transition-colors duration-300">
              <Package className="h-5 w-5 text-[#1CA7B8]" />
              Inventory Management
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {inventoryModules.map((module, index) => {
                const Icon = module.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.05 }}
                    className="bg-[#F2FAFB] dark:bg-[#0e1f3a] p-4 rounded-xl border border-[#0E2A43]/5 dark:border-[#1a3a5a] hover:border-[#1CA7B8]/40 dark:hover:border-[#1CA7B8]/50 transition-all duration-300 hover:shadow-md dark:hover:shadow-[#1CA7B8]/20"
                  >
                    <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#1CA7B8]/10 dark:bg-[#1CA7B8]/20 text-[#1CA7B8]">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h5 className="mt-2 font-sans text-lg font-bold text-[#0E2A43] dark:text-white transition-colors duration-300">
                      {module.title}
                    </h5>
                    <p className="mt-1 font-sans text-base text-[#0E2A43]/60 dark:text-white/60 transition-colors duration-300">
                      {module.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Purchase Modules */}
          <div className="mb-12">
            <h4 className="font-sans text-lg font-bold text-[#0E2A43] dark:text-white mb-4 flex items-center gap-2 transition-colors duration-300">
              <Truck className="h-5 w-5 text-[#1CA7B8]" />
              Purchase & Supplier Management
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {purchaseModules.map((module, index) => {
                const Icon = module.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.05 }}
                    className="bg-[#F2FAFB] dark:bg-[#0e1f3a] p-4 rounded-xl border border-[#0E2A43]/5 dark:border-[#1a3a5a] hover:border-[#1CA7B8]/40 dark:hover:border-[#1CA7B8]/50 transition-all duration-300 hover:shadow-md dark:hover:shadow-[#1CA7B8]/20"
                  >
                    <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#1CA7B8]/10 dark:bg-[#1CA7B8]/20 text-[#1CA7B8]">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h5 className="mt-2 font-sans text-lg font-bold text-[#0E2A43] dark:text-white transition-colors duration-300">
                      {module.title}
                    </h5>
                    <p className="mt-1 font-sans text-base text-[#0E2A43]/60 dark:text-white/60 transition-colors duration-300">
                      {module.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Sales Modules */}
          <div className="mb-12">
            <h4 className="font-sans text-lg font-bold text-[#0E2A43] dark:text-white mb-4 flex items-center gap-2 transition-colors duration-300">
              <ShoppingCart className="h-5 w-5 text-[#1CA7B8]" />
              Sales Management
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {salesModules.map((module, index) => {
                const Icon = module.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.05 }}
                    className="bg-[#F2FAFB] dark:bg-[#0e1f3a] p-4 rounded-xl border border-[#0E2A43]/5 dark:border-[#1a3a5a] hover:border-[#1CA7B8]/40 dark:hover:border-[#1CA7B8]/50 transition-all duration-300 hover:shadow-md dark:hover:shadow-[#1CA7B8]/20"
                  >
                    <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#1CA7B8]/10 dark:bg-[#1CA7B8]/20 text-[#1CA7B8]">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h5 className="mt-2 font-sans text-lg font-bold text-[#0E2A43] dark:text-white transition-colors duration-300">
                      {module.title}
                    </h5>
                    <p className="mt-1 font-sans text-base text-[#0E2A43]/60 dark:text-white/60 transition-colors duration-300">
                      {module.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Employee Modules */}
          <div className="mb-12">
            <h4 className="font-sans text-lg font-bold text-[#0E2A43] dark:text-white mb-4 flex items-center gap-2 transition-colors duration-300">
              <UserCircle className="h-5 w-5 text-[#1CA7B8]" />
              Employee Management
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {employeeModules.map((module, index) => {
                const Icon = module.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.05 }}
                    className="bg-[#F2FAFB] dark:bg-[#0e1f3a] p-4 rounded-xl border border-[#0E2A43]/5 dark:border-[#1a3a5a] hover:border-[#1CA7B8]/40 dark:hover:border-[#1CA7B8]/50 transition-all duration-300 hover:shadow-md dark:hover:shadow-[#1CA7B8]/20"
                  >
                    <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#1CA7B8]/10 dark:bg-[#1CA7B8]/20 text-[#1CA7B8]">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h5 className="mt-2 font-sans text-lg font-bold text-[#0E2A43] dark:text-white transition-colors duration-300">
                      {module.title}
                    </h5>
                    <p className="mt-1 font-sans text-base text-[#0E2A43]/60 dark:text-white/60 transition-colors duration-300">
                      {module.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Reports Modules */}
          <div>
            <h4 className="font-sans text-lg font-bold text-[#0E2A43] dark:text-white mb-4 flex items-center gap-2 transition-colors duration-300">
              <BarChart3 className="h-5 w-5 text-[#1CA7B8]" />
              Reporting & Analytics
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {reportModules.map((module, index) => {
                const Icon = module.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.05 }}
                    className="bg-[#F2FAFB] dark:bg-[#0e1f3a] p-4 rounded-xl border border-[#0E2A43]/5 dark:border-[#1a3a5a] hover:border-[#1CA7B8]/40 dark:hover:border-[#1CA7B8]/50 transition-all duration-300 hover:shadow-md dark:hover:shadow-[#1CA7B8]/20"
                  >
                    <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#1CA7B8]/10 dark:bg-[#1CA7B8]/20 text-[#1CA7B8]">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h5 className="mt-2 font-sans text-lg font-bold text-[#0E2A43] dark:text-white transition-colors duration-300">
                      {module.title}
                    </h5>
                    <p className="mt-1 font-sans text-base text-[#0E2A43]/60 dark:text-white/60 transition-colors duration-300">
                      {module.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Target Industries */}
        <div className="mt-16 bg-[#F2FAFB] dark:bg-[#0e1f3a] rounded-3xl p-8 sm:p-10 transition-colors duration-300 hover:shadow-xl dark:hover:shadow-[#1CA7B8]/20 border border-transparent hover:border-[#1CA7B8]/40 dark:hover:border-[#1CA7B8]/50">
          <h3 className="text-center font-sans text-2xl sm:text-3xl font-bold text-[#0E2A43] dark:text-white mb-6 transition-colors duration-300">
            <span className="text-[#1CA7B8]">Target</span> Industries
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {[
              "Retail Stores",
              "Wholesale Businesses",
              "Distribution Companies",
              "Supermarkets",
              "Grocery Stores",
              "Medical Stores",
              "Restaurants",
              "Cafés",
              "Fitness Centers",
              "Service Providers",
              "Small Businesses",
              "Medium Enterprises",
              "Multi-Branch Organizations"
            ].map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.03 }}
                className="bg-white dark:bg-[#142a4a] rounded-lg px-4 py-3 text-center shadow-sm dark:shadow-[#0a1628] hover:shadow-md dark:hover:shadow-[#1CA7B8]/40 transition-all duration-300 hover:border-[#1CA7B8]/40 dark:hover:border-[#1CA7B8]/50 border border-transparent"
              >
                <span className="font-sans text-lg font-medium text-[#0E2A43] dark:text-white transition-colors duration-300">
                  {industry}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-4 rounded-3xl bg-gradient-to-r from-[#1CA7B8]/10 to-[#0E2A43]/10 dark:from-[#1CA7B8]/20 dark:to-[#0E2A43]/20 px-8 py-6 border border-[#1CA7B8]/20 dark:border-[#1CA7B8]/40 transition-colors duration-300 hover:shadow-xl dark:hover:shadow-[#1CA7B8]/20 hover:border-[#1CA7B8]/40 dark:hover:border-[#1CA7B8]/50">
            <span className="font-sans text-lg font-semibold text-[#0E2A43] dark:text-white transition-colors duration-300">
               Ready to streamline your business operations?
            </span>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1CA7B8] to-[#0E2A43] dark:from-[#1CA7B8] dark:to-[#0E2A43] px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#1CA7B8]/25 dark:shadow-[#1CA7B8]/40 hover:scale-105 transition-transform"
            >
              Get Started with DEXO
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}