# 🌊 Bluevora

**Smart Oceans. Smarter Livelihoods.**

Bluevora is an **IoT-powered seaweed monitoring and digital marketplace platform** designed to support coastal communities and sustainable aquaculture. It enables real-time environmental monitoring, early warning alerts, and fair market access for seaweed farmers.

---

## 🚀 Problem Statement

Seaweed farmers and coastal communities face:
- Sudden crop losses due to temperature, pH, and salinity fluctuations
- Lack of real-time environmental monitoring
- Dependency on middlemen leading to unfair pricing
- Income instability caused by climate change and seasonal bans

---

## 💡 Our Solution

Bluevora integrates **IoT sensors, cloud analytics, and a digital marketplace** into a single platform that:

- Monitors ocean parameters in real time
- Sends early warning alerts for unsafe conditions
- Provides a farmer-friendly dashboard
- Connects farmers directly with buyers
- Promotes sustainable and climate-resilient aquaculture

---

## 🛠️ Tech Stack

**Frontend**
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Deployed on Vercel

**Backend**
- Firebase (Firestore / Realtime Database)
- Firebase Authentication

**IoT**
- ESP32
- Water sensors (Temperature, pH, Salinity, Turbidity)

---

## 📊 Features

- 📈 Real-time ocean monitoring dashboard  
- 🚨 Environmental threshold alerts  
- 🌱 Seaweed cultivation insights  
- 🛒 Marketplace preview for direct buyer access  
- 📱 Fully responsive UI



## 📂 Project Structure

/
├── app/                        # Next.js App Router
│   ├── dashboard/              # Dashboard page
│   │   └── page.tsx
│   ├── login/                  # Login page
│   │   └── page.tsx
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Landing page
│
├── components/                 # Reusable UI components
│   ├── AlertPanel.tsx          # Alert & warning display
│   ├── ChartSection.tsx        # Data visualization section
│   ├── MarketplaceCard.tsx     # Marketplace preview cards
│   ├── MetricCard.tsx          # Sensor metric cards
│   └── Navbar.tsx              # Navigation bar
│
├── data/                       # Mock / static data
│   └── mockSensorData.ts       # Sample IoT sensor data
│
├── .next/                      # Auto-generated build files (ignored in prod)
├── node_modules/               # Project dependencies
│
├── .gitignore
├── README.md                   # Project documentation
├── next-env.d.ts               # Next.js TypeScript types
├── next.config.mjs             # Next.js configuration
├── package.json                # Dependencies & scripts
├── package-lock.json
├── postcss.config.mjs          # PostCSS configuration
├── tailwind.config.ts          # Tailwind CSS setup
└── tsconfig.json               # TypeScript configuration




---

## 📂 website image


![image](https://github.com/ciril7/Bluevora/blob/main/Screenshot%202026-01-28%20192230.png)


![image](https://github.com/ciril7/Bluevora/blob/main/Screenshot%202026-01-28%20192258.png)


![image](https://github.com/ciril7/Bluevora/blob/main/Screenshot%202026-02-13%20224826.png)


screen recording - https://drive.google.com/file/d/10BGMsIqaeRFi4QXYP-kwuU41YZeQVRQc/view?usp=sharing

survey records and datas - https://drive.google.com/drive/folders/1RJdgnLLoTPW91Y3-CeeLArkJzv0iLHS0

