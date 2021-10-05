import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as FiIcons from "react-icons/fc";
import * as HiIcons from "react-icons/hi";  
import * as FlIcons from "react-icons/fi";
import * as BiIcons from "react-icons/bi";
import * as BsIcons from "react-icons/bs";
import * as ShIcons from "react-icons/cg";

export const SidebarData = [
  {
    title: "Monitoring",
    path: "/monitoring",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  
    subNav: [
      {
        title: "Online Users",
        path: "/onlineusers",
        icon: <FlIcons.FiUsers/>,
      },
      {
        title: "Terminals",
        path: "/terminals",
        icon: <BsIcons.BsTerminal />,
      },
      {
        title: "Clients",
        path: "/clients",
        icon: <FlIcons.FiUserPlus/>,
      },
      {
        title: "Restore Login",
        path: "/restorelogin",
        icon: <FaIcons.FaTrashRestoreAlt />,
      },
      {
        title: "BuxModels",
        path: "/buxmodels",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Check PINFL Code",
        path: "/checkPINFLCode",
        icon: <BiIcons.BiCommentCheck />,
      },
      {
        title: "Check Region Code",
        path: "/checkregioncode",
        icon: <BiIcons.BiCommentCheck />,
      },
      {
        title: "Check BSS Phone",
        path: "/comparephone",
        icon: <BiIcons.BiCommentCheck />,
      },
      {
        title: "Check INN Code",
        path: "/checkINNCode",
        icon: <BiIcons.BiCommentCheck />,
      },
      {
        title: "Check Borrowers",
        path: "/checkborrowsers",
        icon: <BiIcons.BiCommentCheck />,
      },
      {
        title: "Check OFB Visitors",
        path: "/checkofbvisitors",
        icon: <BiIcons.BiCommentCheck />,
      },
    ],
  },
  // begin 09/09/2021
  {
    title: "Reports",
    path: "/reports",
    icon: <AiIcons.AiTwotoneFolder />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  
    subNav: [
      {
        title: "OFB Conversion",
        path: "/ofbconversion",
        icon: <AiIcons.AiTwotoneWallet/>,
      },
      {
        title: "OFB Currency",
        path: "/currency/ofbcurrency",
        icon: <HiIcons.HiOutlineCurrencyDollar />,
        cName: "sub-nav",
      }
    ],
  }, // end
  // begin 08/09/2021
  {
    title: "PC Requests",
    path: "/pcrequests",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  
    subNav: [
      {
        title: "UZCARD [P2pInfo]",
        path: "/p2pinfo",
        icon: <ShIcons.CgCreditCard/>,
      },
      {
        title: "UZCARD [Cards.New]",
        path: "/cardsnew",
        icon: <ShIcons.CgCreditCard/>,
      },
      {
        title: "HUMO [GetBalance]",
        path: "/getbalance",
        icon: <FlIcons.FiCreditCard/>,
      },
      {
        title: "HUMO [GetCardInfo]",
        path: "/getcardinfo",
        icon: <FlIcons.FiCreditCard/>,
      },
      {
        title: "TIETO [GetPinTryCount]",
        path: "/getpintrycount",
        icon: <FlIcons.FiCreditCard/>,
      },
      {
        title: "TIETO [TietoBalance]",
        path: "/tietobalance",
        icon: <FlIcons.FiCreditCard/>,
      },
    ],
  },
  // end
  // begin 10.09.2021
  {
    title: "BSS Cards",
    path: "/bsscards",
    icon: <FlIcons.FiCreditCard />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  
    subNav: [
      {
        title: "Card Services",
        path: "/cardservices",
        icon: <ShIcons.CgCreditCard/>,
      },
      {
        title: "Open_Physical_Card",
        path: "/openphysicalcard",
        icon: <ShIcons.CgCreditCard/>,
      }
    ],
  },
  // end
  {
    title: "BSS Requests",
    path: "/bssrequests",
    icon: <IoIcons.IoMdText />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  
    subNav: [
      {
        title: "Fine transactions",
        path: "/bssrequests/services1",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Error transactions",
        path: "/bssrequests/services2",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "All transactions",
        path: "/bssrequests/services3",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
// begin
{
  title: "BSS Currency",
  path: "/currency",
  icon: <AiIcons.AiFillGoogleCircle />,
  iconClosed: <RiIcons.RiArrowDownSFill />,
  iconOpened: <RiIcons.RiArrowUpSFill />,

  subNav: [
    {
      title: "BSS Convertions",
      path: "/bsscovertions",
      icon: <FiIcons.FcDatabase />,
      cName: "sub-nav",
    },
    {
      title: "Exchange Rate",
      path: "/currency/exchangerate",
      icon: <FiIcons.FcCurrencyExchange />,
      cName: "sub-nav",
    }
  ],
},
// end HiOutlineCurrencyDollar
  {
    title: "BSS Statistics",
    path: "/bssstatistics",
    icon: <FiIcons.FcStatistics/>,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  
    subNav: [
      {
        title: "Top(10) P2P Users",
        path: "/bssstatistics/services1",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Top(10) PayUsers",
        path: "/bssstatistics/services2",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Top(10) PayServices",
        path: "/bssstatistics/services3",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Client Device",
        path: "/bssstatistics/services4",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Registration By Branch",
        path: "/bssstatistics/services5",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Registration Rate",
        path: "/bssstatistics/services6",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Transaction Rate",
        path: "/bssstatistics/services7",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <FaIcons.FaPhone />,
  },
  // {
  //   title: "Events",
  //   path: "/events",
  //   icon: <FaIcons.FaEnvelopeOpenText />,
  
  //   iconClosed: <RiIcons.RiArrowDownSFill />,
  //   iconOpened: <RiIcons.RiArrowUpSFill />,
  
  //   subNav: [
  //     {
  //       title: "Event 1",
  //       path: "/events/events1",
  //       icon: <IoIcons.IoIosPaper />,
  //     },
  //     {
  //       title: "Event 2",
  //       path: "/events/events2",
  //       icon: <IoIcons.IoIosPaper />,
  //     },
  //   ],
  // },
  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
  },
  {
    title: "Logout",
    path: "/logout",
    icon: <IoIcons.IoMdHelpCircle />,
  },
];