import OverviewSVG from "../assets/icons/Overview.svg?react";
import TransactionSVG from "../assets/icons/Transaction.svg?react";
import BalanceSVG from "../assets/icons/wallet.svg?react";
import BillSVG from "../assets/icons/Bill.svg?react";
import ExpenseSVG from "../assets/icons/Expencces.svg?react";
import GoalSVG from "../assets/icons/Goal.svg?react";
import SettingSVG from "../assets/icons/Settings.svg?react";
import DetailSVG from "../assets/icons/Icon.svg?react";
import ChevronRightSVG from "../assets/icons/chevrons-right.svg?react";
import LogoutSVG from "../assets/icons/Icon2.svg?react";

import AdobeSVG from "../assets/icons/Adobe.svg?react";
import FigmaSVG from "../assets/icons/Figma.svg?react";
import FoodSVG from "../assets/icons/Food.svg?react";
import GamepadSVG from "../assets/icons/gamepad-2.svg?react";
import HouseSVG from "../assets/icons/Housing.svg?react";
import MovieSVG from "../assets/icons/Movie.svg?react";
import OtherSVG from "../assets/icons/Others.svg?react";
import ShoppingSVG from "../assets/icons/Shopping.svg?react";
import TransportSVG from "../assets/icons/Trasnport.svg?react";

import ArrowRightSVG from "../assets/icons/arrow-right.svg?react";
import ArrowDownSVG from "../assets/icons/Downarrow.svg?react";
import ArrowUpSVG from "../assets/icons/Uparrow.svg?react";
import ArrowUpRightSVG from "../assets/icons/arrow-up-right.svg?react";

import EditSVG from "../assets/icons/edit.svg?react";

import MastercardSVG from "../assets/icons/Mastercard-Logo 1.svg?react";
import VisaSVG from "../assets/icons/Visa_Logo 1.svg?react";

import TargetSVG from "../assets/icons/octicon_goal-16.svg?react";
import AwardSVG from "../assets/icons/Frame 39997.svg?react";

const Icon = {
  Overview: ({ size = 24, color = "currentColor", ...props }) => (
    <OverviewSVG width={size} height={size} stroke={color} {...props} />
  ),

  Transaction: ({ size = 24, color = "currentColor", ...props }) => (
    <TransactionSVG width={size} height={size} stroke={color} {...props} />
  ),

  Balance: ({ size = 24, color = "currentColor", ...props }) => (
    <BalanceSVG width={size} height={size} stroke={color} {...props} />
  ),

  Bill: ({ size = 24, color = "currentColor", ...props }) => (
    <BillSVG width={size} height={size} stroke={color} {...props} />
  ),

  Expense: ({ size = 24, color = "currentColor", ...props }) => (
    <ExpenseSVG width={size} height={size} stroke={color} {...props} />
  ),

  Goal: ({ size = 24, color = "currentColor", ...props }) => (
    <GoalSVG width={size} height={size} stroke={color} {...props} />
  ),

  Setting: ({ size = 24, color = "currentColor", ...props }) => (
    <SettingSVG width={size} height={size} stroke={color} {...props} />
  ),

  Detail: ({ size = 24, color = "currentColor", ...props }) => (
    <DetailSVG width={size} height={size} stroke={color} {...props} />
  ),

  ChevronRight: ({ size = 24, color = "currentColor", ...props }) => (
    <ChevronRightSVG width={size} height={size} stroke={color} {...props} />
  ),

  Logout: ({ size = 24, color = "currentColor", ...props }) => (
    <LogoutSVG
      width={size}
      height={size}
      style={{ color }}
      {...props}
    />
  ),

  Adobe: ({ size = 24, color = "currentColor", ...props }) => (
    <AdobeSVG width={size} height={size} stroke={color} {...props} />
  ),

  Figma: ({ size = 24, color = "currentColor", ...props }) => (
    <FigmaSVG width={size} height={size} stroke={color} {...props} />
  ),

  Food: ({ size = 24, color = "currentColor", ...props }) => (
    <FoodSVG width={size} height={size} stroke={color} {...props} />
  ),

  Gamepad: ({ size = 24, color = "currentColor", ...props }) => (
    <GamepadSVG width={size} height={size} stroke={color} {...props} />
  ),

  House: ({ size = 24, color = "currentColor", ...props }) => (
    <HouseSVG width={size} height={size} stroke={color} {...props} />
  ),

  Movie: ({ size = 24, color = "currentColor", ...props }) => (
    <MovieSVG width={size} height={size} stroke={color} {...props} />
  ),

  Other: ({ size = 24, color = "currentColor", ...props }) => (
    <OtherSVG width={size} height={size} stroke={color} {...props} />
  ),

  Shopping: ({ size = 24, color = "currentColor", ...props }) => (
    <ShoppingSVG width={size} height={size} stroke={color} {...props} />
  ),

  Transport: ({ size = 24, color = "currentColor", ...props }) => (
    <TransportSVG width={size} height={size} stroke={color} {...props} />
  ),

  ArrowRight: ({ size = 24, color = "currentColor", ...props }) => (
    <ArrowRightSVG width={size} height={size} stroke={color} {...props} />
  ),

  ArrowDown: ({ size = 24, color = "currentColor", ...props }) => (
    <ArrowDownSVG width={size} height={size} stroke={color} {...props} />
  ),

  ArrowUp: ({ size = 24, color = "currentColor", ...props }) => (
    <ArrowUpSVG width={size} height={size} stroke={color} {...props} />
  ),

  ArrowUpRight: ({ size = 24, color = "currentColor", ...props }) => (
    <ArrowUpRightSVG width={size} height={size} stroke={color} {...props} />
  ),

  Edit: ({ size = 24, color = "currentColor", ...props }) => (
    <EditSVG width={size} height={size} stroke={color} {...props} />
  ),

  Mastercard: ({ size = 24, color = "currentColor", ...props }) => (
    <MastercardSVG width={size} height={size} {...props} />
  ),

  Visa: ({ size = 24, color = "currentColor", ...props }) => (
    <VisaSVG width={size} height={size} {...props} />
  ),

  Target: ({ size = 24, color = "currentColor", ...props }) => (
    <TargetSVG width={size} height={size} stroke={color} {...props} />
  ),

  Award: ({ size = 24, color = "currentColor", ...props }) => (
    <AwardSVG width={size} height={size} stroke={color} {...props} />
  ),
};

export default Icon;