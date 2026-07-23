// DexoCategories.jsx - DEXO POS & ERP Categories with Forced Dark Mode
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
  Boxes,
  Store,
  Utensils,
  Coffee,
  HeartPulse,
  Dumbbell,
  Maximize2,
  Minimize2,
  Home,
  ShoppingBag,
  Landmark,
  LogOut,
  Eye,
  Edit,
  Trash2,
  CreditCard as CreditCardIcon,
  Clock as ClockIcon,
  AlertCircle,
  Shield as ShieldIcon,
  FileText as FileTextIcon,
  Search
} from "lucide-react";
import dexoLogo from "../assets/dexologo.png";
import accountingImg from "../assets/accounting & finance.png";
import employeeImg from "../assets/Employee Management.png";
import inventoryImg from "../assets/Inventory Management.png";
import offlinePosImg from "../assets/Offline POS.png";
import onlinePosImg from "../assets/Online POS.png";
import posModuleImg from "../assets/POS.png";
import purchaseImg from "../assets/Purchase & Supplier Management.png";
import reportsImg from "../assets/Reporting & Analytics.png";
import salesImg from "../assets/Sales Management.png";
import targetBusinessesImg from "../assets/Target Businesses.png";

// Import DEXO Software Suite Module Images
import homeImg from "../assets/Home.png";
import employeeDetailsImg from "../assets/IMS(Employee Details).png";
import purchasesDashboardImg from "../assets/IMS(Purchases Dashboard).png";
import manageCategoryImg from "../assets/IMS (Manage Category).png";
import smartPosImg from "../assets/Smart POS & Billing System.png";
import bankSystemImg from "../assets/Bank Account Tracking System.png";
import membersManagementImg from "../assets/GMS(Members Management).png";
import attendanceTrackingImg from "../assets/GMS(Attendance Tracking).png";
import feeManagementImg from "../assets/GMS(Fee Management).png";
import adminHomeImg from "../assets/ADMIN HOME.png";
import myFirmBasicImg from "../assets/MyFirmDetails(basic info) Admin.png";
import myFirmDateImg from "../assets/MyFirmDetails(Date & Location) Admin.png";
import myFirmActionImg from "../assets/MyFirmDetails(Action) Admin.png";
import salesDashboardAdminImg from "../assets/Sales Analytics Dashboard (Admin).png";
import b2bClientDashboardImg from "../assets/IMS(B2B Client Dashboard) Admin.png";
import purchaseAnalyticsImg from "../assets/Purchase Analytics Dashboard(Admin).png";
import orderTrackingImg from "../assets/Order Tracking System(Admin).png";

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

// Quick-stat strip shown above the ERP module grids
const erpStats = [
  { icon: Layers, value: "7", label: "Integrated Modules" },
  { icon: Zap, value: "80+", label: "Business Features" },
  { icon: RefreshCw, value: "Real-Time", label: "Data Sync" },
  { icon: Monitor, value: "1", label: "Unified Dashboard" },
];

// Each ERP category gets its own accent color - ALTERNATING IMAGE POSITION
const erpCategories = [
  { title: "Accounting & Finance", icon: Wallet, accent: "violet", modules: erpModules, cols: "lg:grid-cols-2", image: accountingImg, imagePosition: "left" },
  { title: "Point of Sale", icon: ShoppingCart, accent: "amber", modules: posModules, cols: "lg:grid-cols-2", image: posModuleImg, imagePosition: "right" },
  { title: "Inventory Management", icon: Package, accent: "sky", modules: inventoryModules, cols: "lg:grid-cols-2", image: inventoryImg, imagePosition: "left" },
  { title: "Purchase & Supplier Management", icon: Truck, accent: "rose", modules: purchaseModules, cols: "lg:grid-cols-2", image: purchaseImg, imagePosition: "right" },
  { title: "Sales Management", icon: TrendingUp, accent: "emerald", modules: salesModules, cols: "lg:grid-cols-2", image: salesImg, imagePosition: "left" },
  { title: "Employee Management", icon: UserCircle, accent: "indigo", modules: employeeModules, cols: "lg:grid-cols-2", image: employeeImg, imagePosition: "right" },
  { title: "Reporting & Analytics", icon: BarChart3, accent: "fuchsia", modules: reportModules, cols: "lg:grid-cols-2", image: reportsImg, imagePosition: "left" },
];

// Tailwind classes per accent — badge fill, hover border, hover shadow glow
const accentStyles = {
  violet: {
    badge: "bg-violet-500/20 text-violet-400",
    border: "hover:border-violet-500/50",
    shadow: "hover:shadow-violet-500/20",
    panel: "bg-violet-500/[0.04] border-violet-500/20",
    hover: "hover:bg-violet-500/10",
    glow: "hover:shadow-violet-500/30",
    light: "text-violet-300"
  },
  brown: {
  badge: "bg-amber-700 text-white",
  border: "hover:border-amber-600/50",
  shadow: "hover:shadow-amber-600/20",
  panel: "bg-amber-600/10 border-amber-600/20",
  hover: "hover:bg-amber-600/20",
  glow: "hover:shadow-amber-600/30",
  light: "text-amber-300"
},
  sky: {
    badge: "bg-sky-500/20 text-sky-400",
    border: "hover:border-sky-500/50",
    shadow: "hover:shadow-sky-500/20",
    panel: "bg-sky-500/[0.04] border-sky-500/20",
    hover: "hover:bg-sky-500/10",
    glow: "hover:shadow-sky-500/30",
    light: "text-sky-300"
  },
  rose: {
    badge: "bg-rose-500/20 text-rose-400",
    border: "hover:border-rose-500/50",
    shadow: "hover:shadow-rose-500/20",
    panel: "bg-rose-500/[0.04] border-rose-500/20",
    hover: "hover:bg-rose-500/10",
    glow: "hover:shadow-rose-500/30",
    light: "text-rose-300"
  },
  emerald: {
    badge: "bg-emerald-500/20 text-emerald-400",
    border: "hover:border-emerald-500/50",
    shadow: "hover:shadow-emerald-500/20",
    panel: "bg-emerald-500/[0.04] border-emerald-500/20",
    hover: "hover:bg-emerald-500/10",
    glow: "hover:shadow-emerald-500/30",
    light: "text-emerald-300"
  },
  indigo: {
    badge: "bg-indigo-500/20 text-indigo-400",
    border: "hover:border-indigo-500/50",
    shadow: "hover:shadow-indigo-500/20",
    panel: "bg-indigo-500/[0.04] border-indigo-500/20",
    hover: "hover:bg-indigo-500/10",
    glow: "hover:shadow-indigo-500/30",
    light: "text-indigo-300"
  },
  fuchsia: {
    badge: "bg-fuchsia-500/20 text-fuchsia-400",
    border: "hover:border-fuchsia-500/50",
    shadow: "hover:shadow-fuchsia-500/20",
    panel: "bg-fuchsia-500/[0.04] border-fuchsia-500/20",
    hover: "hover:bg-fuchsia-500/10",
    glow: "hover:shadow-fuchsia-500/30",
    light: "text-fuchsia-300"
  },
  // DEXO Modules Colors
  yellow: {
    badge: "bg-yellow-500/20 text-yellow-400",
    border: "hover:border-yellow-500/50",
    shadow: "hover:shadow-yellow-500/20",
    panel: "bg-yellow-500/[0.04] border-yellow-500/20",
    hover: "hover:bg-yellow-500/10",
    glow: "hover:shadow-yellow-500/30",
    light: "text-yellow-300"
  },
  black: {
    badge: "bg-gray-800 text-gray-300",
    border: "hover:border-gray-500/50",
    shadow: "hover:shadow-gray-500/20",
    panel: "bg-gray-800/20 border-gray-700/20",
    hover: "hover:bg-gray-700/20",
    glow: "hover:shadow-gray-500/30",
    light: "text-gray-300"
  },
  green: {
    badge: "bg-green-500 text-white",
    border: "hover:border-green-500/50",
    shadow: "hover:shadow-green-500/20",
    panel: "bg-green-500/10 border-green-500/20",
    hover: "hover:bg-green-500/20",
    glow: "hover:shadow-green-500/30",
    light: "text-green-300"
  },
  orange: {
    badge: "bg-orange-500 text-white",
    border: "hover:border-orange-500/50",
    shadow: "hover:shadow-orange-500/20",
    panel: "bg-orange-500/10 border-orange-500/20",
    hover: "hover:bg-orange-500/20",
    glow: "hover:shadow-orange-500/30",
    light: "text-orange-300"
  },
  purple: {
    badge: "bg-purple-500 text-white",
    border: "hover:border-purple-500/50",
    shadow: "hover:shadow-purple-500/20",
    panel: "bg-purple-500/10 border-purple-500/20",
    hover: "hover:bg-purple-500/20",
    glow: "hover:shadow-purple-500/30",
    light: "text-purple-300"
  },
  red: {
    badge: "bg-red-500 text-white",
    border: "hover:border-red-500/50",
    shadow: "hover:shadow-red-500/20",
    panel: "bg-red-500/10 border-red-500/20",
    hover: "hover:bg-red-500/20",
    glow: "hover:shadow-red-500/30",
    light: "text-red-300"
  },
  pink: {
    badge: "bg-pink-500 text-white",
    border: "hover:border-pink-500/50",
    shadow: "hover:shadow-pink-500/20",
    panel: "bg-pink-500/10 border-pink-500/20",
    hover: "hover:bg-pink-500/20",
    glow: "hover:shadow-pink-500/30",
    light: "text-pink-300"
  },
  cyan: {
    badge: "bg-cyan-500 text-white",
    border: "hover:border-cyan-500/50",
    shadow: "hover:shadow-cyan-500/20",
    panel: "bg-cyan-500/10 border-cyan-500/20",
    hover: "hover:bg-cyan-500/20",
    glow: "hover:shadow-cyan-500/30",
    light: "text-cyan-300"
  },
amber: {
  badge: "bg-amber-600 text-white",
  border: "hover:border-amber-500/50",
  shadow: "hover:shadow-amber-500/20",
  panel: "bg-amber-500/10 border-amber-500/20",
  hover: "hover:bg-amber-500/20",
  glow: "hover:shadow-amber-500/30",
  light: "text-amber-300"
}
};

// ============================================================
// DEXO SOFTWARE SUITE MODULES SECTION
// ============================================================

const dexoSidebarColorMap = {
  home: "bg-yellow-500",
  admin: "bg-gray-800",
  employee: "bg-green-500",
  purchases: "bg-orange-500",
  inventory: "bg-purple-500",
  sales: "bg-red-500",
  bank: "bg-yellow-500",
  gym: "bg-pink-500",
  exit: "bg-red-700"
};

const dexoSidebarModulesData = [
  {
    id: "home",
    title: "HOME",
    color: "yellow",
    sidebarColor: "bg-yellow-500",
    description: "System landing page and mission overview",
    image: homeImg,
    features: [
      "Real-time Date & Time display",
      "User identification and session management",
      "Quick access to all modules",
      "System health monitoring"
    ]
  },
  {
    id: "admin",
    title: "ADMIN",
    color: "black",
    sidebarColor: "bg-gray-800",
    description: "System configuration and administrator management",
    image: adminHomeImg,
    features: [
      "High-level system initialization",
      "User permissions management",
      "Administrator credential creation",
      "System configuration settings"
    ]
  },
  {
    id: "employee",
    title: "EMPLOYEE",
    color: "green",
    sidebarColor: "bg-green-500",
    description: "Personnel records and KYE compliance",
    image: employeeDetailsImg,
    features: [
      "Employee registration & profiles",
      "KYE (Know Your Employee) Protocol",
      "ID Card & Utility Bill validation",
      "PDF & Excel reporting"
    ]
  },
  {
    id: "purchases",
    title: "PURCHASES",
    color: "orange",
    sidebarColor: "bg-orange-500",
    description: "Supplier management and inventory procurement",
    image: purchasesDashboardImg,
    features: [
      "Supplier liability management",
      "Inventory intake processing",
      "Bill information capture",
      "Payment status tracking"
    ]
  },
  {
    id: "inventory",
    title: "INVENTORY",
    color: "purple",
    sidebarColor: "bg-purple-500",
    description: "SKU management and automated stock alerts",
    image: manageCategoryImg,
    features: [
      "Category & product management",
      "Low stock auto-alerts (≤5 items)",
      "Barcode support",
      "Bulk import/export",
      "Status tracking (Active/Reorder)"
    ]
  },
  {
    id: "sales",
    title: "SALES",
    color: "red",
    sidebarColor: "bg-red-500",
    description: "POS checkout and transaction processing",
    image: smartPosImg,
    features: [
      "Smart POS billing interface",
      "Multi-search (Name/ID/Barcode)",
      "Real-time financial breakdown",
      "Invoice generation & printing"
    ]
  },
  {
    id: "bank",
    title: "BANK",
    color: "yellow",
    sidebarColor: "bg-yellow-500",
    description: "Financial reconciliation and cash flow tracking",
    image: bankSystemImg,
    features: [
      "Purchase amount tracking (Outgoing)",
      "Sales amount tracking (Incoming)",
      "Color-coded status indicators",
      "Payment reconciliation"
    ]
  },
  {
    id: "gym",
    title: "GYM",
    color: "pink",
    sidebarColor: "bg-pink-500",
    description: "Fitness center membership and fee management",
    image: membersManagementImg,
    features: [
      "Member registration & management",
      "Attendance tracking with counters",
      "Fee collection & reporting",
      "Membership status tracking"
    ]
  },
  {
    id: "exit",
    title: "EXIT",
    color: "red",
    sidebarColor: "bg-red-700",
    description: "Secure application shutdown",
    features: [
      "Session logout",
      "Secure application termination",
      "Data persistence confirmation"
    ]
  }
];

const dexoSidebarAdminPanelModules = [
  {
    id: "admin-home",
    title: "Admin Home",
    description: "Primary control environment & mission overview",
    image: adminHomeImg,
    features: [
      "Company mission overview",
      "Quick access to submodules",
      "System control environment"
    ]
  },
  {
    id: "my-firm-basic",
    title: "My Firm Details — Basic Info",
    description: "Business Identity",
    image: myFirmBasicImg,
    features: [
      "Firm type & name configuration",
      "Contact information management",
      "Address & location setup"
    ]
  },
  {
    id: "my-firm-date",
    title: "My Firm Details — Dates & Location",
    description: "Financial Year Setup",
    image: myFirmDateImg,
    features: [
      "Business commencement date",
      "Book start date configuration",
      "Financial year-end setup"
    ]
  },
  {
    id: "my-firm-action",
    title: "My Firm Details — Actions",
    description: "Data Management Controls",
    image: myFirmActionImg,
    features: [
      "Save firm details to database",
      "Load existing data",
      "Clear all fields",
      "Generate historical reports(PDF)"
    ]
  },
  {
    id: "sales-analytics",
    title: "Sales Analytics Dashboard",
    description: "Revenue Performance Tracking",
    image: salesDashboardAdminImg,
    features: [
      "Real-time KPI metrics",
      "Daily invoice management",
      "Search & date filtering"
    ]
  },
  {
    id: "b2b-sales",
    title: "B2B Client Dashboard",
    description: "Client and Corporate Account Management",
    image: b2bClientDashboardImg,
    features: [
      "Corporate account management",
      "Complex billing & credit balances",
      "Payment processing"
    ]
  },
  {
    id: "purchase-analytics",
    title: "Purchase Analytics Dashboard",
    description: "Purchases Analytics and Expenditure",
    image: purchaseAnalyticsImg,
    features: [
      "Purchase metrics tracking",
      "Daily purchase bill management",
      "Supplier reporting"
    ]
  },
  {
    id: "order-tracking",
    title: "Order Tracking System",
    description: "Production and Order Tracking",
    image: orderTrackingImg,
    features: [
      "Active order monitoring",
      "9-stage production lifecycle",
      "Real-time status tracking",
      "Documentation actions in single PDF"
    ]
  }
];

const dexoSidebarGymSubModules = [
  {
    id: "gym-members",
    title: "Members Management",
    description: "Register and manage gym members",
    image: membersManagementImg,
    features: [
      "Member registration",
      "Profile management",
      "Membership status tracking"
    ]
  },
  {
    id: "gym-attendance",
    title: "Attendance Tracking",
    description: "Track member attendance with counters",
    image: attendanceTrackingImg,
    features: [
      "Total / Present / Absent counters",
      "Quick check-in by Member ID",
      "Daily attendance monitoring"
    ]
  },
  {
    id: "gym-fees",
    title: "Fee Management",
    description: "Fee collection and revenue tracking",
    image: feeManagementImg,
    features: [
      "Member fee lookup",
      "Payment collection",
      "This month revenue summary"
    ]
  }
];

// ============================================================
// DEXO MODULE CARD COMPONENTS
// ============================================================

function DexoModuleCard({ module, index }) {
  const IconMap = {
    home: Home,
    admin: Settings,
    employee: Users,
    purchases: ShoppingBag,
    inventory: Package,
    sales: ShoppingCart,
    bank: Landmark,
    gym: Dumbbell,
    exit: LogOut
  };

  const Icon = IconMap[module.id] || Package;
  const styles = accentStyles[module.color] || accentStyles.yellow;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ 
        opacity: 1,
        y: 0 
      }}
      transition={{ delay: index * 0.06, duration: 0.5 }}
      className={`group bg-[#0e1f3a] rounded-xl sm:rounded-2xl overflow-hidden border ${styles.panel} 
        hover:shadow-xl ${styles.shadow} transition-all duration-300 hover:-translate-y-1 
        hover:border-[#1CA7B8]/30`}
    >
      {module.image && (
        <div className="relative overflow-hidden bg-[#0a1628]">
          <img
            src={module.image}
            alt={module.title}
            className="w-full h-48 sm:h-56 object-contain transition-transform duration-500 group-hover:scale-105"
          />
          <div className={`absolute top-2 right-2 ${dexoSidebarColorMap[module.id]} px-3 py-1 rounded-full shadow-lg`}>
            <span className="text-xs font-bold text-white tracking-wider">{module.title}</span>
          </div>
          <div className={`absolute bottom-0 left-0 right-0 h-1 ${dexoSidebarColorMap[module.id]}`} />
        </div>
      )}

      <div className="p-4 sm:p-5">
        <div className="flex items-center gap-3 mb-2 min-w-0">
          <div className={`inline-flex h-8 w-8 items-center justify-center rounded-lg flex-shrink-0 ${styles.badge}`}>
            <Icon className="h-4 w-4" />
          </div>
          <div className="min-w-0">
            <h4 className={`font-sans font-bold text-base text-white break-words ${styles.light}`}>
              {module.title}
            </h4>
          </div>
        </div>
        <p className="font-sans text-lg text-white/80 mb-3">{module.description}</p>
        {module.features && (
          <ul className="space-y-1">
            {module.features.slice(0, 4).map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle className={`h-4 w-4 ${styles.light} flex-shrink-0 mt-0.5`} />
                <span className="font-sans text-base text-white/70">{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
}

function DexoAdminPanelCard({ module, index }) {
  const styles = accentStyles.cyan;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ 
        opacity: 1,
        y: 0 
      }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="group bg-[#0e1f3a] rounded-xl sm:rounded-2xl overflow-hidden border border-[#1a3a5a] 
        hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 
        hover:shadow-xl hover:shadow-cyan-500/10"
    >
      {module.image && (
        <div className="relative overflow-hidden bg-[#0a1628]">
          <img
            src={module.image}
            alt={module.title}
            className="w-full h-48 sm:h-56 object-contain transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-2 right-2 bg-cyan-500 px-3 py-1 rounded-full shadow-lg">
            <span className="text-xs font-bold text-white tracking-wider">Admin</span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-cyan-500" />
        </div>
      )}
      <div className="p-4 sm:p-5">
        <h4 className={`font-sans font-bold text-sm sm:text-base text-white ${styles.light}`}>
          {module.title}
        </h4>
        <p className="font-sans text-lg text-white/90 mb-2">{module.description}</p>
        <ul className="space-y-1">
          {module.features.slice(0, 4).map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <CheckCircle className={`h-4 w-4 ${styles.light} flex-shrink-0 mt-0.5`} />
              <span className="font-sans text-base text-white/70">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

function DexoGymSubModuleCard({ module, index }) {
  const styles = accentStyles.pink;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ 
        opacity: 1,
        y: 0 
      }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="group bg-[#0e1f3a] rounded-xl sm:rounded-2xl overflow-hidden border border-pink-500/10 
        hover:border-pink-500/40 transition-all duration-300 hover:-translate-y-1 
        hover:shadow-xl hover:shadow-pink-500/10"
    >
      {module.image && (
        <div className="relative overflow-hidden bg-[#0a1628]">
          <img
            src={module.image}
            alt={module.title}
            className="w-full h-48 sm:h-56 object-contain transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-2 right-2 bg-pink-500 px-3 py-1 rounded-full shadow-lg">
            <span className="text-xs font-bold text-white tracking-wider">Gym</span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-pink-500" />
        </div>
      )}
      <div className="p-4 sm:p-5">
        <h4 className={`font-sans font-bold text-sm sm:text-base text-white ${styles.light}`}>
          {module.title}
        </h4>
        <p className="font-sans text-lg text-white/90 mb-2">{module.description}</p>
        <ul className="space-y-1">
          {module.features.slice(0, 4).map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <CheckCircle className={`h-4 w-4 ${styles.light} flex-shrink-0 mt-0.5`} />
              <span className="font-sans text-base text-white/70">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

// ============================================================
// INVENTORY MANAGEMENT SYSTEM DETAIL SECTION - CONSISTENT STYLE
// ============================================================

function InventoryManagementSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="mb-12"
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-purple-500/30" />
        <h3 className="font-sans text-base sm:text-lg font-bold text-white/80">Inventory Management System</h3>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-purple-500/30" />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        {/* Card 1: Category Management */}
        <div className="group bg-[#0e1f3a] rounded-xl sm:rounded-2xl overflow-hidden border border-[#1a3a5a] 
          hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-1 
          hover:shadow-xl hover:shadow-purple-500/10"
        >
          <div className="relative overflow-hidden bg-[#0a1628]">
            <img
              src={manageCategoryImg}
              alt="Category Management"
              className="w-full h-48 sm:h-56 object-contain transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute top-2 right-2 bg-purple-500 px-3 py-1 rounded-full shadow-lg">
              <span className="text-xs font-bold text-white tracking-wider">Inventory</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-purple-500" />
          </div>
          <div className="p-4 sm:p-5">
            <div className="flex items-center gap-3 mb-2 min-w-0">
              <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg flex-shrink-0 bg-purple-500/20 text-purple-400">
                <Layers className="h-4 w-4" />
              </div>
              <div className="min-w-0">
                <h4 className="font-sans font-bold text-base text-white break-words text-purple-300">
                  Category Management
                </h4>
              </div>
            </div>
            <p className="font-sans text-lg text-white/80 mb-3">Manage organizational folders</p>
            <ul className="space-y-1">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-purple-400 flex-shrink-0 mt-0.5" />
                <span className="font-sans text-base text-white/70">
                  Manage Categories (Add, Delete, Clear)
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Card 2: Product Parameters */}
        <div className="group bg-[#0e1f3a] rounded-xl sm:rounded-2xl overflow-hidden border border-[#1a3a5a] 
          hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-1 
          hover:shadow-xl hover:shadow-purple-500/10"
        >
          <div className="relative overflow-hidden bg-[#0a1628]">
            <img
              src={manageCategoryImg}
              alt="Product Parameters"
              className="w-full h-48 sm:h-56 object-contain transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute top-2 right-2 bg-purple-500 px-3 py-1 rounded-full shadow-lg">
              <span className="text-xs font-bold text-white tracking-wider">Inventory</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-purple-500" />
          </div>
          <div className="p-4 sm:p-5">
            <div className="flex items-center gap-3 mb-2 min-w-0">
              <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg flex-shrink-0 bg-purple-500/20 text-purple-400">
                <Barcode className="h-4 w-4" />
              </div>
              <div className="min-w-0">
                <h4 className="font-sans font-bold text-base text-white break-words text-purple-300">
                  Product Parameters
                </h4>
              </div>
            </div>
            <p className="font-sans text-lg text-white/80 mb-3">Fields include</p>
            <ul className="space-y-1">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-purple-400 flex-shrink-0 mt-0.5" />
                <span className="font-sans text-base text-white/70">
                  Category, Product Name, Barcode (Optional)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-purple-400 flex-shrink-0 mt-0.5" />
                <span className="font-sans text-base text-white/70">
                  Cost Price, Retail Price, Margin, Product ID
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-purple-400 flex-shrink-0 mt-0.5" />
                <span className="font-sans text-base text-white/70">
                  Discount (Optional)
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Card 3: System Logic Triggers */}
        <div className="group bg-[#0e1f3a] rounded-xl sm:rounded-2xl overflow-hidden border border-[#1a3a5a] 
          hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-1 
          hover:shadow-xl hover:shadow-purple-500/10"
        >
          <div className="relative overflow-hidden bg-[#0a1628]">
            <img
              src={manageCategoryImg}
              alt="System Logic"
              className="w-full h-48 sm:h-56 object-contain transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute top-2 right-2 bg-purple-500 px-3 py-1 rounded-full shadow-lg">
              <span className="text-xs font-bold text-white tracking-wider">Inventory</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-purple-500" />
          </div>
          <div className="p-4 sm:p-5">
            <div className="flex items-center gap-3 mb-2 min-w-0">
              <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg flex-shrink-0 bg-purple-500/20 text-purple-400">
                <Zap className="h-4 w-4" />
              </div>
              <div className="min-w-0">
                <h4 className="font-sans font-bold text-base text-white break-words text-purple-300">
                  System Logic Triggers
                </h4>
              </div>
            </div>
            <p className="font-sans text-lg text-white/80 mb-3">Automated system logic</p>
            <ul className="space-y-1">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-purple-400 flex-shrink-0 mt-0.5" />
                <span className="font-sans text-base text-white/70">
                  Status: Active / Reorder states
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                <span className="font-sans text-base text-white/70">
                  Quantity ≤ 5 auto-sets to <span className="text-yellow-400 font-semibold">'Reorder'</span>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="h-4 w-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                <span className="font-sans text-base text-white/70">
                  Low Stock Indicator: Yellow notification card
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Card 4: Grid Actions */}
        <div className="group bg-[#0e1f3a] rounded-xl sm:rounded-2xl overflow-hidden border border-[#1a3a5a] 
          hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-1 
          hover:shadow-xl hover:shadow-purple-500/10"
        >
          <div className="relative overflow-hidden bg-[#0a1628]">
            <img
              src={manageCategoryImg}
              alt="Grid Actions"
              className="w-full h-48 sm:h-56 object-contain transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute top-2 right-2 bg-purple-500 px-3 py-1 rounded-full shadow-lg">
              <span className="text-xs font-bold text-white tracking-wider">Inventory</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-purple-500" />
          </div>
          <div className="p-4 sm:p-5">
            <div className="flex items-center gap-3 mb-2 min-w-0">
              <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg flex-shrink-0 bg-purple-500/20 text-purple-400">
                <FileTextIcon className="h-4 w-4" />
              </div>
              <div className="min-w-0">
                <h4 className="font-sans font-bold text-base text-white break-words text-purple-300">
                  Grid Actions
                </h4>
              </div>
            </div>
            <p className="font-sans text-lg text-white/80 mb-3">Inventory record management</p>
            <ul className="space-y-1">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-purple-400 flex-shrink-0 mt-0.5" />
                <span className="font-sans text-base text-white/70">
                  Search - Filter inventory records
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-purple-400 flex-shrink-0 mt-0.5" />
                <span className="font-sans text-base text-white/70">
                  Import - Bulk update records
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-purple-400 flex-shrink-0 mt-0.5" />
                <span className="font-sans text-base text-white/70">
                  Print PDF - Physical audits
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ============================================================
// MAIN ERP CATEGORY BLOCK
// ============================================================

function ModuleCategoryBlock({ category, catIndex, activeTab }) {
  const { title, icon: HeaderIcon, accent, modules, cols, image, imagePosition } = category;
  const styles = accentStyles[accent];
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const getAlignmentClasses = () => {
    if (imagePosition === "right") {
      return {
        container: "sm:flex-row-reverse",
        titleSection: "sm:text-right sm:items-end",
        titleFlex: "sm:flex-row-reverse",
        badge: "sm:ml-3",
        description: "sm:ml-auto",
        featureBadge: "sm:flex-row-reverse",
        clickHint: "sm:justify-end"
      };
    }
    return {
      container: "",
      titleSection: "",
      titleFlex: "",
      badge: "",
      description: "",
      featureBadge: "",
      clickHint: ""
    };
  };

  const align = getAlignmentClasses();

  const contentPane = (
    <div className="flex-1 min-w-0">
      <div className={`flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 ${align.container}`}>
        {image && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: catIndex * 0.04, duration: 0.4 }}
            className={`w-full sm:w-72 md:w-96 lg:w-[420px] xl:w-[480px] flex-shrink-0 overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 shadow-lg shadow-black/30 transition-all duration-300 cursor-pointer ${
              isExpanded 
                ? `scale-105 ${styles.glow} shadow-2xl ${styles.hover} border-${accent}-500/50` 
                : `hover:scale-[1.02] hover:shadow-xl hover:${styles.glow} ${styles.hover}`
            }`}
            onClick={toggleExpand}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <div className="relative">
              <img
                src={image}
                alt={`${title} illustration`}
                className="w-full h-auto object-contain bg-[#0a1628]"
              />
              <div className={`absolute top-2 right-2 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full transition-all duration-300 ${
                isExpanded ? 'opacity-100 scale-110' : 'opacity-0 group-hover:opacity-70'
              }`}>
                {isExpanded ? (
                  <Minimize2 className="h-3 w-3 text-white" />
                ) : (
                  <Maximize2 className="h-3 w-3 text-white" />
                )}
              </div>
            </div>
          </motion.div>
        )}
        
        <div className={`flex-1 min-w-0 flex flex-col justify-center ${align.titleSection}`}>
          <div className={`flex items-center gap-3 mb-2 min-w-0 ${align.titleFlex}`}>
            <div className={`inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl flex-shrink-0 ${styles.badge} ${align.badge}`}>
              <HeaderIcon className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <h4 className="font-sans text-xl sm:text-2xl md:text-3xl font-bold text-white transition-colors duration-300 break-words">
              {title}
            </h4>
          </div>
          <div className={`flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 ${align.featureBadge}`}>
            <span className="font-sans text-sm sm:text-base font-semibold uppercase tracking-wider text-white/60">
              {modules.length} Features
            </span>
            <span className="h-1 w-8 rounded-full bg-[#1CA7B8]/40" />
            <span className="font-sans text-sm sm:text-base text-[#1CA7B8]">
              Integrated Module
            </span>
          </div>
          <p className={`mt-3 font-sans text-base sm:text-lg md:text-xl text-white/50 max-w-md ${align.description}`}>
            Complete {title.toLowerCase()} solution for your business operations
          </p>
        </div>
      </div>

      <div className={`grid grid-cols-1 sm:grid-cols-2 ${cols} gap-3 sm:gap-4`}>
        {modules.map((module, index) => {
          const Icon = module.icon;
          const key = `${module.title}-${activeTab}`;
          return (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: catIndex * 0.04 + index * 0.03 }}
              className={`group bg-[#142a4a] p-4 sm:p-5 rounded-xl border border-[#1a3a5a] ${styles.border} shadow-sm hover:shadow-lg ${styles.shadow} transition-all duration-300 hover:-translate-y-1 cursor-pointer ${styles.hover}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className={`inline-flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg ${styles.badge} transition-transform duration-300 group-hover:scale-110`}>
                <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <h5 className="mt-2 font-sans text-base sm:text-lg md:text-xl font-bold text-white transition-colors duration-300 group-hover:text-[#1CA7B8]">
                {module.title}
              </h5>
              <p className="mt-1 font-sans text-sm sm:text-base md:text-lg text-white/60 transition-colors duration-300 group-hover:text-white/80">
                {module.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );

  return (
    <motion.div 
      className={`rounded-2xl sm:rounded-3xl border ${styles.panel} p-4 sm:p-6 md:p-8 transition-all duration-300 ${
        isExpanded ? `shadow-2xl ${styles.glow} border-${accent}-500/30` : ''
      }`}
      animate={{
        scale: isExpanded ? 1.01 : 1,
      }}
      transition={{ duration: 0.3 }}
    >
      {contentPane}
    </motion.div>
  );
}

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

  const features = activeTab === "online" ? posFeatures.online : posFeatures.offline;
  const benefits = activeTab === "online" ? onlineBenefits : offlineBenefits;

  useEffect(() => {
    // This will trigger re-render of all modules
  }, [activeTab]);

  return (
    <section id="dexoservices" className="bg-[#0a1628] py-12 sm:py-16 md:py-20 lg:py-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Always Dark */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5">
            <motion.img 
              src={dexoLogo} 
              alt="DEXO Logo" 
              className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-18 lg:w-18 rounded-xl shadow-md shadow-[#1CA7B8]/20 cursor-pointer"
              whileHover={{ scale: 1.15, rotate: 5 }}
              transition={{ duration: 0.3 }}
            />
            <span className="inline-block rounded-full bg-[#0e1f3a] px-3 py-1 sm:px-4 sm:py-1.5 text-[10px] sm:text-xs md:text-sm lg:text-base font-bold uppercase tracking-[0.15em] text-[#1CA7B8] font-sans border border-[#1CA7B8]/40">
              DEXO Desktop ERP & POS
            </span>
          </div>
          <h2 className="mt-3 sm:mt-4 font-sans text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white transition-colors duration-300">
            Choose Your <span className="text-[#1CA7B8]">POS Solution</span>
          </h2>
          <div className="flex justify-center gap-2 mt-2 sm:mt-3">
            <span className="inline-block h-1 w-10 sm:w-12 rounded-full bg-[#1CA7B8]" />
            <span className="inline-block h-1 w-4 sm:w-6 rounded-full bg-[#1CA7B8]/30" />
          </div>
          <p className="mt-3 sm:mt-4 text-white/70 max-w-2xl mx-auto font-sans text-sm sm:text-base lg:text-lg leading-relaxed transition-colors duration-300 px-4 sm:px-0">
            Whether you need cloud-based management or reliable offline operations, 
            we have the perfect POS solution for your business.
          </p>
        </div>

        {/* Tab Buttons - Always Dark */}
        <div className="flex justify-center mb-8 sm:mb-10">
          <div className="inline-flex bg-[#0e1f3a] rounded-full p-1 border border-[#1CA7B8]/20 transition-colors duration-300">
            <button
              onClick={() => setActiveTab("online")}
              className={`px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full text-xs sm:text-sm md:text-base font-semibold transition-all duration-300 ${
                activeTab === "online"
                  ? "bg-gradient-to-r from-[#1CA7B8] to-[#0E2A43] text-white shadow-lg shadow-[#1CA7B8]/25"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <Cloud className="inline-block h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" />
              Online POS
            </button>
            <button
              onClick={() => setActiveTab("offline")}
              className={`px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full text-xs sm:text-sm md:text-base font-semibold transition-all duration-300 ${
                activeTab === "offline"
                  ? "bg-gradient-to-r from-[#1CA7B8] to-[#0E2A43] text-white shadow-lg shadow-[#1CA7B8]/25"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <WifiOff className="inline-block h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" />
              Offline POS
            </button>
          </div>
        </div>

        {/* POS Features Grid - Always Dark */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16">
          <motion.div
            key={`features-${activeTab}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={`${feature.title}-${activeTab}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="group bg-[#142a4a] p-3 sm:p-4 md:p-5 rounded-xl shadow-md shadow-[#0a1628] hover:shadow-xl hover:shadow-[#1CA7B8]/20 transition-all duration-300 hover:-translate-y-1 border border-[#1a3a5a] hover:border-[#1CA7B8]/50 cursor-pointer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <div className="inline-flex h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 items-center justify-center rounded-lg bg-[#1CA7B8]/20 text-[#1CA7B8] transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-[#1CA7B8] group-hover:to-[#0E2A43] group-hover:text-white group-hover:scale-110">
                    <Icon className="h-4 w-4 sm:h-4.5 sm:w-4.5 md:h-5 md:w-5" />
                  </div>
                  <h3 className="mt-2 sm:mt-3 font-sans text-sm sm:text-base md:text-lg font-bold text-white transition-colors duration-300 group-hover:text-[#1CA7B8]">
                    {feature.title}
                  </h3>
                  <p className="mt-1 font-sans text-sm sm:text-base text-white/60 leading-relaxed transition-colors duration-300 group-hover:text-white/80">
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
            className="bg-[#0e1f3a] rounded-2xl p-4 sm:p-6 md:p-8 transition-colors duration-300 hover:shadow-xl hover:shadow-[#1CA7B8]/20 border border-transparent hover:border-[#1CA7B8]/50"
          >
            <div className="mb-4 sm:mb-5 overflow-hidden rounded-xl sm:rounded-2xl border border-white/5 bg-[#0a1628]">
              <img
                src={activeTab === "online" ? onlinePosImg : offlinePosImg}
                alt={activeTab === "online" ? "Online POS illustration" : "Offline POS illustration"}
                className="w-full h-auto object-contain"
              />
            </div>
            <h3 className="font-sans text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 transition-colors duration-300">
              {activeTab === "online" ? "Online POS Benefits" : "Offline POS Benefits"}
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={`${benefit}-${activeTab}`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + (index * 0.05) }}
                  className="flex items-start gap-3 group cursor-pointer hover:pl-2 transition-all duration-300"
                >
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-[#1CA7B8] flex-shrink-0 mt-0.5 transition-all duration-300 group-hover:scale-110 group-hover:text-[#5DCAA5]" />
                  <span className="font-sans text-sm sm:text-base text-gray-300 transition-colors duration-300 group-hover:text-white">
                    {benefit}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* ============================================================ */}
        {/* DEXO SOFTWARE SUITE MODULES - ONLY SHOW ON OFFLINE TAB */}
        {/* 2 COLUMNS ON DESKTOP, 1 COLUMN ON MOBILE */}
        {/* ============================================================ */}
        {activeTab === "offline" && (
          <div className="mt-20 sm:mt-24">
            <div className="text-center mb-10 sm:mb-14">
              <span className="inline-block rounded-full bg-[#1CA7B8]/10 px-4 py-1.5 text-xs md:text-sm font-semibold uppercase tracking-[0.15em] text-[#1CA7B8] border border-[#1CA7B8]/30">
                DEXO Software Suite
              </span>
              <h2 className="mt-3 font-sans text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                Complete <span className="text-[#1CA7B8]">POS & ERP</span> Modules
              </h2>
              <div className="flex justify-center gap-2 mt-3">
                <span className="inline-block h-1 w-12 rounded-full bg-[#1CA7B8]" />
                <span className="inline-block h-1 w-6 rounded-full bg-[#1CA7B8]/30" />
              </div>
              <p className="mt-4 text-white/90 max-w-3xl mx-auto font-sans text-base sm:text-lg leading-relaxed">
                Enterprise-grade Point of Sale solution designed to centralise business operations, 
                ensure financial integrity, and provide real-time data visibility across all modules.
              </p>
            </div>

            {/* Navigation Modules Grid - 2 COLUMNS ON DESKTOP, 1 ON MOBILE */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#1CA7B8]/30" />
                <h3 className="font-sans text-base sm:text-lg font-bold text-white/90">Colour-Coded Navigation Modules</h3>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#1CA7B8]/30" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {dexoSidebarModulesData.map((module, index) => (
                  <DexoModuleCard key={module.id} module={module} index={index} />
                ))}
              </div>
            </div>

            {/* Admin Panel Modules - 2 COLUMNS ON DESKTOP, 1 ON MOBILE */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-cyan-500/30" />
                <h3 className="font-sans text-base sm:text-lg font-bold text-white/80">Admin Panel Modules</h3>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-cyan-500/30" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {dexoSidebarAdminPanelModules.map((module, index) => (
                  <DexoAdminPanelCard key={module.id} module={module} index={index} />
                ))}
              </div>
            </div>

            {/* Gym Sub-Modules - 2 COLUMNS ON DESKTOP, 1 ON MOBILE */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-pink-500/30" />
                <h3 className="font-sans text-base sm:text-lg font-bold text-white/80">Gym Management Sub-Modules</h3>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-pink-500/30" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {dexoSidebarGymSubModules.map((module, index) => (
                  <DexoGymSubModuleCard key={module.id} module={module} index={index} />
                ))}
              </div>
            </div>

            {/* ============================================================ */}
            {/* INVENTORY MANAGEMENT SYSTEM DETAIL SECTION */}
            {/* ============================================================ */}
            <InventoryManagementSection />

            {/* Key Features Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1,
                y: 0 
              }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="bg-[#0e1f3a] rounded-2xl p-6 sm:p-8 border border-[#1CA7B8]/20 
                hover:border-[#1CA7B8]/40 transition-all duration-300"
            >
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                <div className="text-center">
                  <div className="inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#1CA7B8]/20 text-[#1CA7B8] mb-2">
                    <Zap className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <h4 className="font-sans font-bold text-white text-xs sm:text-sm">Real-Time Sync</h4>
                  <p className="font-sans text-[10px] sm:text-xs text-white/40">Data consistency</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#1CA7B8]/20 text-[#1CA7B8] mb-2">
                    <ShieldIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <h4 className="font-sans font-bold text-white text-xs sm:text-sm">Secure Data</h4>
                  <p className="font-sans text-[10px] sm:text-xs text-white/40">Enterprise-grade</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#1CA7B8]/20 text-[#1CA7B8] mb-2">
                    <BarChart3 className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <h4 className="font-sans font-bold text-white text-xs sm:text-sm">Analytics</h4>
                  <p className="font-sans text-[10px] sm:text-xs text-white/40">Real-time KPIs</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#1CA7B8]/20 text-[#1CA7B8] mb-2">
                    <Printer className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <h4 className="font-sans font-bold text-white text-xs sm:text-sm">PDF Reports</h4>
                  <p className="font-sans text-[10px] sm:text-xs text-white/40">Exportable docs</p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
        {/* ============================================================ */}
        {/* END OF DEXO SOFTWARE SUITE MODULES */}
        {/* ============================================================ */}

        {/* ERP Modules Section */}
        <div className="relative mt-16 sm:mt-20 lg:mt-24">
          {/* Signature moment: dark dot-textured panel for the intro + stats, one bold accent for the whole section */}
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-[#050d1a] px-4 sm:px-8 md:px-12 py-10 sm:py-14 mb-12 sm:mb-16">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.15]"
              style={{
                backgroundImage: "radial-gradient(circle, #1CA7B8 1px, transparent 1px)",
                backgroundSize: "22px 22px",
              }}
            />
            <div className="pointer-events-none absolute -top-10 -left-10 h-56 w-56 rounded-full bg-[#1CA7B8]/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-10 -right-10 h-56 w-56 rounded-full bg-[#1CA7B8]/10 blur-3xl" />

            <div className="relative text-center">
              <span className="inline-block rounded-full bg-white/10 px-3 py-1 sm:px-4 sm:py-1.5 text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-[0.15em] text-[#5DCAA5] font-sans border border-[#1CA7B8]/30">
                One Platform, Every Department
              </span>
              <h3 className="mt-3 sm:mt-4 font-sans text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                Complete <span className="text-[#5DCAA5]">ERP Modules</span>
              </h3>
              <div className="flex justify-center gap-2 mt-2 sm:mt-3">
                <span className="inline-block h-1 w-10 sm:w-12 rounded-full bg-[#1CA7B8]" />
                <span className="inline-block h-1 w-4 sm:w-6 rounded-full bg-[#1CA7B8]/30" />
              </div>
              <p className="mt-3 sm:mt-4 text-white/80 max-w-2xl mx-auto font-sans text-sm sm:text-base lg:text-lg leading-relaxed px-4 sm:px-0">
                All-in-one business management solution with integrated modules for every aspect of your operations.
              </p>
            </div>

            {/* Quick-stat strip — white cards floating on the dark panel */}
            <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-8 sm:mt-10">
              {erpStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={`${stat.label}-${activeTab}`}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                    className="bg-white/[0.06] backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-white/10 hover:border-[#1CA7B8]/50 hover:bg-white/10 transition-all duration-300 cursor-pointer hover:scale-105 hover:-translate-y-1"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-[#1CA7B8]/20 text-[#5DCAA5] mb-2 sm:mb-3 transition-all duration-300 group-hover:scale-110">
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <div className="font-sans text-lg sm:text-xl md:text-2xl font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="font-sans text-sm sm:text-base text-white/60">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Category grids — each with its own accent color and feature count */}
          <div className="relative space-y-10 sm:space-y-12">
            {erpCategories.map((category, catIndex) => (
              <ModuleCategoryBlock
                key={`${category.title}-${activeTab}`}
                category={category}
                catIndex={catIndex}
                activeTab={activeTab}
              />
            ))}
          </div>
        </div>

        {/* Target Industries with Enhanced Glow */}
        <div className="mt-12 sm:mt-16 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <span className="inline-block rounded-full bg-[#0e1f3a] px-3 py-1 sm:px-4 sm:py-1.5 text-[13px] sm:text-base md:text-base font-bold uppercase tracking-[0.15em] text-[#1CA7B8] font-sans border border-[#1CA7B8]/40">
              Who Can Use DEXO
            </span>
            <h3 className="mt-3 sm:mt-4 font-sans text-2xl sm:text-3xl md:text-4xl font-bold text-white transition-colors duration-300">
              Built for <span className="text-[#1CA7B8]">Every Kind</span> of Business
            </h3>
            <p className="mt-3 font-sans text-base sm:text-lg md:text-xl text-white/70 leading-relaxed max-w-lg">
              From a single storefront to a multi-branch operation, DEXO scales with the way your business actually runs.
            </p>
            <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 sm:gap-y-4">
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
                "Multi-Branch Organizations",
              ].map((industry, index) => (
                <motion.div
                  key={`${industry}-${activeTab}`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04 }}
                  className="group relative flex items-center gap-2.5 sm:gap-3 p-2 sm:p-2.5 rounded-xl cursor-pointer transition-all duration-300 hover:bg-[#1CA7B8]/10 hover:scale-105 hover:shadow-xl hover:shadow-[#1CA7B8]/30 border border-transparent hover:border-[#1CA7B8]/40"
                  whileHover={{
                    scale: 1.05,
                    x: 4,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#1CA7B8]/0 via-[#1CA7B8]/10 to-[#1CA7B8]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md" />
                  <div className="absolute -inset-1 rounded-xl bg-[#1CA7B8]/0 group-hover:bg-[#1CA7B8]/5 transition-all duration-500 blur-xl opacity-0 group-hover:opacity-100" />
                  
                  <span className="inline-flex h-5 w-5 sm:h-5.5 sm:w-5.5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-emerald-500/40">
                    <CheckCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-white" strokeWidth={3} />
                  </span>
                  <span className="font-sans text-base sm:text-lg md:text-xl font-medium text-white/80 group-hover:text-white transition-all duration-300 group-hover:translate-x-1">
                    {industry}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Decorative icon cluster with enhanced hover, over the Target Businesses photo */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden p-8 sm:p-10 min-h-[280px] sm:min-h-[340px] flex items-center justify-center">
            <img
              src={targetBusinessesImg}
              alt="Businesses that use DEXO"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#050d1a]/75" />
            <div className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 sm:h-56 sm:w-56 rounded-full bg-[#1CA7B8] opacity-30 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-14 -right-10 h-44 w-44 sm:h-64 sm:w-64 rounded-full bg-violet-500 opacity-30 blur-3xl" />
            <div className="relative grid grid-cols-3 gap-4 sm:gap-6">
              {[
                { icon: Store, label: "Retail", color: "hover:shadow-[#1CA7B8]/40" },
                { icon: Utensils, label: "Dining", color: "hover:shadow-[#F59E0B]/40" },
                { icon: Coffee, label: "Cafés", color: "hover:shadow-[#FBBF24]/40" },
                { icon: HeartPulse, label: "Medical", color: "hover:shadow-[#F43F5E]/40" },
                { icon: Building2, label: "Hotels", color: "hover:shadow-[#A78BFA]/40" },
                { icon: Dumbbell, label: "Fitness", color: "hover:shadow-[#34D399]/40" },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={`${item.label}-${activeTab}`}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + index * 0.08 }}
                    className={`group flex flex-col items-center gap-2 p-3 sm:p-4 rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-300 cursor-pointer hover:scale-110 hover:-translate-y-1 hover:shadow-2xl ${item.color}`}
                    whileHover={{
                      scale: 1.1,
                      y: -4,
                      transition: { duration: 0.3 }
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <div className="relative">
                      <div className="absolute inset-0 rounded-2xl bg-[#1CA7B8]/0 group-hover:bg-[#1CA7B8]/10 transition-all duration-500 blur-xl opacity-0 group-hover:opacity-100" />
                      <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center text-[#5DCAA5] transition-all duration-300 group-hover:bg-[#1CA7B8]/20 group-hover:border-[#1CA7B8]/40 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-[#1CA7B8]/30 relative z-10">
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6 transition-all duration-300 group-hover:scale-110 group-hover:text-[#5DCAA5]" />
                      </div>
                    </div>
                    <span className="font-sans text-[11px] sm:text-xs text-white/40 group-hover:text-white/90 transition-all duration-300 group-hover:font-medium">
                      {item.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-4 rounded-3xl bg-gradient-to-r from-[#1CA7B8]/20 to-[#0E2A43]/20 px-4 sm:px-6 md:px-8 py-4 sm:py-6 border border-[#1CA7B8]/40 transition-colors duration-300 hover:shadow-xl hover:shadow-[#1CA7B8]/20 hover:border-[#1CA7B8]/50">
            <span className="font-sans text-base sm:text-base md:text-lg font-semibold text-white transition-colors duration-300">
               Ready to streamline your business operations?
            </span>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1CA7B8] to-[#0E2A43] px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 text-xs sm:text-sm md:text-base font-semibold text-white shadow-lg shadow-[#1CA7B8]/40 hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started with DEXO
              <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}