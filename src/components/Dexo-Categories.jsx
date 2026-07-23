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
import offlinePosImg from "../assets/Offline POS.png";
import onlinePosImg from "../assets/Online POS.png";
import targetBusinessesImg from "../assets/Target Businesses.png";

// Import DEXO Software Suite Module Images 
import homeImg from "../assets/Home.png";
import adminHomeImg from "../assets/Admin Home.png";
import bankSystemImg from "../assets/Bank Account Tracking System.png";
import purchaseAnalyticsImg from "../assets/Purchase Analytics Dashboard(Admin).png";
import b2bClientDashboardImg from "../assets/IMS(B2B Client Dashboard) Admin.png";
import gmsImg from "../assets/GMS.png";
import inventoryManagementImg from "../assets/Inventory Management System.png";
import orderTrackingImg from "../assets/Order Tracking System(Admin).png";
import smartPosImg from "../assets/Smart POS & Billing System.png";
import salesDashboardAdminImg from "../assets/Sales Analytics Dashboard(Admin).png";
import myFirmActionImg from "../assets/MyFirmDetails(Actions) Admin.png";
import myFirmDateImg from "../assets/MyFirmDetails(Date & Location) Admin.png";
import myFirmBasicImg from "../assets/MyFirmDetails(basic info) Admin.png";

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
    image: inventoryManagementImg,
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
    image: inventoryManagementImg,
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
    image: inventoryManagementImg,
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
    image: gmsImg,
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
    image: null,
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
    image: gmsImg,
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
    image: gmsImg,
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
    image: gmsImg,
    features: [
      "Member fee lookup",
      "Payment collection",
      "This month revenue summary"
    ]
  }
];

// ============================================================
// DEXO MODULE CARD COMPONENTS WITH SMOOTH ANIMATIONS
// ============================================================

// Smooth animation variants
const slideVariants = {
  left: {
    hidden: { opacity: 0, x: -60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
      }
    }
  },
  right: {
    hidden: { opacity: 0, x: 60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
      }
    }
  }
};

function DexoModuleCard({ module, index, direction }) {
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
  const variant = direction === "left" ? slideVariants.left : slideVariants.right;

  return (
    <motion.div
      variants={variant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.15, margin: "-50px" }}
      className={`group bg-[#0e1f3a] rounded-xl sm:rounded-2xl overflow-hidden border ${styles.panel} 
        hover:shadow-2xl ${styles.shadow} transition-all duration-400 hover:-translate-y-2 
        hover:border-[#1CA7B8]/50`}
    >
      {module.image && (
        <div className="relative overflow-hidden bg-[#0a1628]">
          <img
            src={module.image}
            alt={module.title}
            className="w-full h-56 sm:h-64 object-contain transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent opacity-60" />
          <div className={`absolute top-3 right-3 ${dexoSidebarColorMap[module.id]} px-3 py-1 rounded-full shadow-lg`}>
            <span className="text-xs font-bold text-white tracking-wider">{module.title}</span>
          </div>
          <div className={`absolute bottom-0 left-0 right-0 h-1 ${dexoSidebarColorMap[module.id]}`} />
        </div>
      )}

      <div className="p-5 sm:p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${styles.badge} 
            transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}>
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <h4 className={`font-sans font-bold text-lg sm:text-xl text-white ${styles.light} 
              transition-colors duration-300 group-hover:text-[#1CA7B8]`}>
              {module.title}
            </h4>
          </div>
        </div>
        <p className="font-sans text-sm sm:text-base text-white/60 mb-4 leading-relaxed">{module.description}</p>
        {module.features && (
          <ul className="space-y-2">
            {module.features.slice(0, 4).map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2.5 group/item transition-all duration-300 hover:translate-x-1">
                <CheckCircle className={`h-4 w-4 ${styles.light} flex-shrink-0 mt-0.5 
                  transition-all duration-300 group-hover/item:scale-110`} />
                <span className="font-sans text-sm sm:text-base text-white/60 group-hover:text-white/80 transition-colors duration-300">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
}

function DexoAdminPanelCard({ module, index, direction }) {
  const styles = accentStyles.cyan;
  const variant = direction === "left" ? slideVariants.left : slideVariants.right;

  return (
    <motion.div
      variants={variant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.15, margin: "-50px" }}
      className="group bg-[#0e1f3a] rounded-xl sm:rounded-2xl overflow-hidden border border-[#1a3a5a] 
        hover:border-cyan-500/40 transition-all duration-400 hover:-translate-y-2 
        hover:shadow-2xl hover:shadow-cyan-500/10"
    >
      {module.image && (
        <div className="relative overflow-hidden bg-[#0a1628]">
          <img
            src={module.image}
            alt={module.title}
            className="w-full h-56 sm:h-64 object-contain transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent opacity-60" />
          <div className="absolute top-3 right-3 bg-cyan-500 px-3 py-1 rounded-full shadow-lg">
            <span className="text-xs font-bold text-white tracking-wider">Admin</span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-cyan-500" />
        </div>
      )}
      <div className="p-5 sm:p-6">
        {/* ✅ INCREASED HEADING SIZE */}
        <h4 className={`font-sans font-bold text-base sm:text-lg md:text-xl text-white ${styles.light} 
          transition-colors duration-300 group-hover:text-cyan-400`}>
          {module.title}
        </h4>
        {/* ✅ INCREASED DESCRIPTION SIZE */}
        <p className="font-sans text-sm sm:text-base md:text-lg text-white/50 mb-3 leading-relaxed">
          {module.description}
        </p>
        <ul className="space-y-2.5">
          {module.features.slice(0, 4).map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2.5 group/item transition-all duration-300 hover:translate-x-1">
              <CheckCircle className={`h-4 w-4 sm:h-5 sm:w-5 ${styles.light} flex-shrink-0 mt-0.5 
                transition-all duration-300 group-hover/item:scale-110`} />
              {/* ✅ INCREASED FEATURE TEXT SIZE */}
              <span className="font-sans text-sm sm:text-base md:text-lg text-white/60 group-hover:text-white/80 transition-colors duration-300">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

function DexoGymSubModuleCard({ module, index, direction }) {
  const styles = accentStyles.pink;
  const variant = direction === "left" ? slideVariants.left : slideVariants.right;

  return (
    <motion.div
      variants={variant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.15, margin: "-50px" }}
      className="group bg-[#0e1f3a] rounded-xl sm:rounded-2xl overflow-hidden border border-pink-500/10 
        hover:border-pink-500/40 transition-all duration-400 hover:-translate-y-2 
        hover:shadow-2xl hover:shadow-pink-500/10"
    >
      {module.image && (
        <div className="relative overflow-hidden bg-[#0a1628]">
          <img
            src={module.image}
            alt={module.title}
            className="w-full h-56 sm:h-64 object-contain transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent opacity-60" />
          <div className="absolute top-3 right-3 bg-pink-500 px-3 py-1 rounded-full shadow-lg">
            <span className="text-xs font-bold text-white tracking-wider">Gym</span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-pink-500" />
        </div>
      )}
      <div className="p-5 sm:p-6">
        {/* ✅ INCREASED HEADING SIZE */}
        <h4 className={`font-sans font-bold text-base sm:text-lg md:text-xl text-white ${styles.light} 
          transition-colors duration-300 group-hover:text-pink-400`}>
          {module.title}
        </h4>
        {/* ✅ INCREASED DESCRIPTION SIZE */}
        <p className="font-sans text-sm sm:text-base md:text-lg text-white/50 mb-3 leading-relaxed">
          {module.description}
        </p>
        <ul className="space-y-2.5">
          {module.features.slice(0, 4).map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2.5 group/item transition-all duration-300 hover:translate-x-1">
              <CheckCircle className={`h-4 w-4 sm:h-5 sm:w-5 ${styles.light} flex-shrink-0 mt-0.5 
                transition-all duration-300 group-hover/item:scale-110`} />
              {/* ✅ INCREASED FEATURE TEXT SIZE */}
              <span className="font-sans text-sm sm:text-base md:text-lg text-white/60 group-hover:text-white/80 transition-colors duration-300">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

// ============================================================
// INVENTORY MANAGEMENT SYSTEM DETAIL SECTION
// ============================================================

function InventoryManagementCard({ module, index, direction }) {
  const styles = accentStyles.purple;
  const variant = direction === "left" ? slideVariants.left : slideVariants.right;

  return (
    <motion.div
      variants={variant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.15, margin: "-50px" }}
      className="group bg-[#0e1f3a] rounded-xl sm:rounded-2xl overflow-hidden border border-[#1a3a5a] 
        hover:border-purple-500/40 transition-all duration-400 hover:-translate-y-2 
        hover:shadow-2xl hover:shadow-purple-500/10"
    >
      {module.image && (
        <div className="relative overflow-hidden bg-[#0a1628]">
          <img
            src={module.image}
            alt={module.title}
            className="w-full h-56 sm:h-64 object-contain transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent opacity-60" />
          <div className="absolute top-3 right-3 bg-purple-500 px-3 py-1 rounded-full shadow-lg">
            <span className="text-xs font-bold text-white tracking-wider">Inventory</span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-purple-500" />
        </div>
      )}
      <div className="p-5 sm:p-6">
        <div className="flex items-center gap-3 mb-2">
          <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${styles.badge} 
            transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}>
            {module.icon && <module.icon className="h-5 w-5" />}
          </div>
          {/* ✅ INCREASED HEADING SIZE */}
          <h4 className={`font-sans font-bold text-base sm:text-lg md:text-xl text-white ${styles.light} 
            transition-colors duration-300 group-hover:text-purple-400`}>
            {module.title}
          </h4>
        </div>
        {/* ✅ INCREASED DESCRIPTION SIZE */}
        <p className="font-sans text-sm sm:text-base md:text-lg text-white/50 mb-3 leading-relaxed">
          {module.description}
        </p>
        <ul className="space-y-2.5">
          {module.features.slice(0, 4).map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2.5 group/item transition-all duration-300 hover:translate-x-1">
              <CheckCircle className={`h-4 w-4 sm:h-5 sm:w-5 ${styles.light} flex-shrink-0 mt-0.5 
                transition-all duration-300 group-hover/item:scale-110`} />
              {/* ✅ INCREASED FEATURE TEXT SIZE */}
              <span className="font-sans text-sm sm:text-base md:text-lg text-white/60 group-hover:text-white/80 transition-colors duration-300">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

function InventoryManagementSection() {
  const inventoryModules = [
    {
      id: "category-mgmt",
      title: "Category Management",
      description: "Manage organizational folders",
      icon: Layers,
      image: inventoryManagementImg,
      features: [
        "Manage Categories (Add, Delete, Clear)"
      ]
    },
    {
      id: "product-params",
      title: "Product Parameters",
      description: "Fields include",
      icon: Barcode,
      image: inventoryManagementImg,
      features: [
        "Category, Product Name, Barcode (Optional)",
        "Cost Price, Retail Price, Margin, Product ID",
        "Discount (Optional)"
      ]
    },
    {
      id: "system-logic",
      title: "System Logic Triggers",
      description: "Automated system logic",
      icon: Zap,
      image: inventoryManagementImg,
      features: [
        "Status: Active / Reorder states",
        "Quantity ≤ 5 auto-sets to 'Reorder'",
        "Low Stock Indicator: Yellow notification card"
      ]
    },
    {
      id: "grid-actions",
      title: "Grid Actions",
      description: "Inventory record management",
      icon: FileTextIcon,
      image: inventoryManagementImg,
      features: [
        "Search - Filter inventory records",
        "Import - Bulk update records",
        "Print PDF - Physical audits"
      ]
    }
  ];

  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-5">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-purple-500/30" />
        <h3 className="font-sans text-base sm:text-lg font-bold text-white/80">Inventory Management System</h3>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-purple-500/30" />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {inventoryModules.map((module, index) => (
          <InventoryManagementCard 
            key={module.id} 
            module={module} 
            index={index} 
            direction={index % 2 === 0 ? "left" : "right"}
          />
        ))}
      </div>
    </div>
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
        {/* DEXO SOFTWARE SUITE MODULES - WITH SMOOTH LEFT/RIGHT ANIMATION */}
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

            {/* Navigation Modules Grid - 2 COLUMNS WITH SMOOTH LEFT/RIGHT */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#1CA7B8]/30" />
                <h3 className="font-sans text-base sm:text-lg font-bold text-white/90">Colour-Coded Navigation Modules</h3>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#1CA7B8]/30" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {dexoSidebarModulesData.map((module, index) => (
                  <DexoModuleCard 
                    key={module.id} 
                    module={module} 
                    index={index} 
                    direction={index % 2 === 0 ? "left" : "right"}
                  />
                ))}
              </div>
            </div>

            {/* Admin Panel Modules - 2 COLUMNS WITH SMOOTH LEFT/RIGHT */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-cyan-500/30" />
                <h3 className="font-sans text-base sm:text-lg font-bold text-white/80">Admin Panel Modules</h3>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-cyan-500/30" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {dexoSidebarAdminPanelModules.map((module, index) => (
                  <DexoAdminPanelCard 
                    key={module.id} 
                    module={module} 
                    index={index} 
                    direction={index % 2 === 0 ? "left" : "right"}
                  />
                ))}
              </div>
            </div>

            {/* Gym Sub-Modules - 2 COLUMNS WITH SMOOTH LEFT/RIGHT */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-pink-500/30" />
                <h3 className="font-sans text-base sm:text-lg font-bold text-white/80">Gym Management Sub-Modules</h3>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-pink-500/30" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {dexoSidebarGymSubModules.map((module, index) => (
                  <DexoGymSubModuleCard 
                    key={module.id} 
                    module={module} 
                    index={index} 
                    direction={index % 2 === 0 ? "left" : "right"}
                  />
                ))}
              </div>
            </div>

            {/* Inventory Management System Detail Section */}
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

          {/* Decorative icon cluster with enhanced hover */}
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